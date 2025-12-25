import React, { useRef, useState, useEffect } from 'react';
import { Upload, FileSpreadsheet, CheckCircle2, Eye } from 'lucide-react';
import * as XLSX from 'xlsx';

const UploadZone = ({ title, accept, description, onFileProcessed, uploadedFileName, onFileRemove, onFileView }) => {
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
          onFileProcessed(jsonData, uploadedFile.name);
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
        {(file || uploadedFileName) ? <CheckCircle2 size={32} /> : <FileSpreadsheet size={32} />}
      </div>

      <h3 className="card-title">{title}</h3>
      <div className="card-desc">
        {(file || uploadedFileName) ? (
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
            <span style={{ color: 'var(--color-primary)', fontWeight: 600 }}>
              {file ? file.name : uploadedFileName}
            </span>
            {onFileView && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onFileView();
                }}
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  color: '#3B82F6',
                  padding: '4px',
                  display: 'flex',
                  alignItems: 'center'
                }}
                title="View data"
              >
                <Eye size={16} />
              </button>
            )}
            <button
              onClick={(e) => {
                e.stopPropagation(); // Prevent triggering the file input
                setFile(null);
                if (fileInputRef.current) fileInputRef.current.value = '';
                if (onFileRemove) onFileRemove();
              }}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                color: '#EF4444',
                padding: '4px',
                display: 'flex',
                alignItems: 'center'
              }}
              title="Remove file"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 6 6 18" /><path d="m6 6 12 12" />
              </svg>
            </button>
          </div>
        ) : (
          description || "Drag & drop your Excel file here, or click to browse"
        )}
      </div>
      {(file || uploadedFileName) && <p style={{ fontSize: '0.8rem', color: '#10B981', marginTop: '0.5rem' }}>File Processed Successfully</p>}
    </div>
  );
};

export default UploadZone;
