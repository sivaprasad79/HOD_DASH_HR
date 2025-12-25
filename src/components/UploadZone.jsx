import React, { useRef, useState } from 'react';
import { Upload, FileSpreadsheet, CheckCircle2 } from 'lucide-react';
import * as XLSX from 'xlsx';

const UploadZone = ({ title, accept, description, onFileProcessed }) => {
  const [isDragging, setIsDragging] = useState(false);
  const [file, setFile] = useState(null);
  const fileInputRef = useRef(null);

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const processFile = async (uploadedFile) => {
    setFile(uploadedFile);

    // If it's an Excel/CSV file, try to read it
    if (uploadedFile.name.match(/\.(xlsx|xls|csv)$/)) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const data = e.target.result;
        const workbook = XLSX.read(data, { type: 'binary' });
        const sheetName = workbook.SheetNames[0];
        const sheet = workbook.Sheets[sheetName];
        const jsonData = XLSX.utils.sheet_to_json(sheet);

        // Pass the data back to the parent
        if (onFileProcessed) {
          onFileProcessed(jsonData);
        }
      };
      reader.readAsBinaryString(uploadedFile);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const droppedFiles = e.dataTransfer.files;
    if (droppedFiles.length > 0) {
      processFile(droppedFiles[0]);
    }
  };

  const handleClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    if (e.target.files.length > 0) {
      processFile(e.target.files[0]);
    }
  };

  return (
    <div
      className={`upload-card ${isDragging ? 'dragging' : ''}`}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      onClick={handleClick}
    >
      <input
        type="file"
        ref={fileInputRef}
        style={{ display: 'none' }}
        accept={accept}
        onChange={handleFileChange}
      />

      <div className="upload-icon-wrapper">
        {file ? <CheckCircle2 size={32} /> : <FileSpreadsheet size={32} />}
      </div>

      <h3 className="card-title">{title}</h3>
      <p className="card-desc">
        {file ? (
          <span style={{ color: 'var(--color-primary)', fontWeight: 600 }}>
            {file.name}
          </span>
        ) : (
          description || "Drag & drop your Excel file here, or click to browse"
        )}
      </p>
      {file && <p style={{ fontSize: '0.8rem', color: '#10B981', marginTop: '0.5rem' }}>File Processed Successfully</p>}
    </div>
  );
};

export default UploadZone;
