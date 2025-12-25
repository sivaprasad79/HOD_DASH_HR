import React, { useState, useEffect } from 'react';
import { LayoutDashboard, FileText, ClipboardList, Settings, LogOut, Bell, Search } from 'lucide-react';
import * as XLSX from 'xlsx';
import UploadZone from './components/UploadZone.jsx';
import EmployeeTable from './components/EmployeeTable.jsx';
import Appraisals from './components/Appraisals.jsx';
import './index.css'; // Ensure styles are loaded

function App() {
  const [activeTab, setActiveTab] = useState('dashboard');

  // Initialize state from localStorage
  const [teachingProcessData, setTeachingProcessData] = useState(() => {
    try {
      const saved = localStorage.getItem('teachingProcessData');
      return saved ? JSON.parse(saved) : null;
    } catch (e) {
      console.error("Failed to load teaching data", e);
      return null;
    }
  });
  const [teachingProcessFile, setTeachingProcessFile] = useState(() => localStorage.getItem('teachingProcessFileName'));

  const [studentFeedbackData, setStudentFeedbackData] = useState(() => {
    try {
      const saved = localStorage.getItem('studentFeedbackData');
      return saved ? JSON.parse(saved) : null;
    } catch (e) {
      console.error("Failed to load feedback data", e);
      return null;
    }
  });
  const [studentFeedbackFile, setStudentFeedbackFile] = useState(() => localStorage.getItem('studentFeedbackFileName'));

  // Persist state to localStorage
  useEffect(() => {
    try {
      if (teachingProcessData) localStorage.setItem('teachingProcessData', JSON.stringify(teachingProcessData));
      else localStorage.removeItem('teachingProcessData');

      if (teachingProcessFile) localStorage.setItem('teachingProcessFileName', teachingProcessFile);
      else localStorage.removeItem('teachingProcessFileName');
    } catch (e) {
      console.error("Failed to save teaching data", e);
    }
  }, [teachingProcessData, teachingProcessFile]);

  useEffect(() => {
    try {
      if (studentFeedbackData) localStorage.setItem('studentFeedbackData', JSON.stringify(studentFeedbackData));
      else localStorage.removeItem('studentFeedbackData');

      if (studentFeedbackFile) localStorage.setItem('studentFeedbackFileName', studentFeedbackFile);
      else localStorage.removeItem('studentFeedbackFileName');
    } catch (e) {
      console.error("Failed to save feedback data", e);
    }
  }, [studentFeedbackData, studentFeedbackFile]);

  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  const handleDownload = (data, fileName) => {
    if (!data || data.length === 0) {
      alert("No data available to download.");
      return;
    }

    try {
      const ws = XLSX.utils.json_to_sheet(data);
      const wb = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(wb, ws, "Sheet1");

      // Use the original filename if possible, otherwise generate one
      const name = fileName || "export.xlsx";
      XLSX.writeFile(wb, name);
    } catch (error) {
      console.error("Error creating Excel file:", error);
      alert("Failed to download file.");
    }
  };

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <div style={{ marginBottom: '3rem', paddingLeft: '1rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>HR Portal</h2>
          <span style={{ fontSize: '0.8rem', opacity: 0.7, letterSpacing: '1px' }}>HOD ACCESS</span>
        </div>

        <nav style={{ flex: 1 }}>
          <a href="#" className={`nav-item ${activeTab === 'dashboard' ? 'active' : ''}`} onClick={() => setActiveTab('dashboard')}>
            <LayoutDashboard size={20} />
            <span>Dashboard</span>
          </a>
          <a href="#" className={`nav-item ${activeTab === 'appraisals' ? 'active' : ''}`} onClick={() => setActiveTab('appraisals')}>
            <ClipboardList size={20} />
            <span>Appraisals</span>
          </a>
          <a href="#" className="nav-item">
            <FileText size={20} />
            <span>Reports</span>
          </a>
          <a href="#" className="nav-item">
            <Settings size={20} />
            <span>Settings</span>
          </a>
        </nav>

        <a href="#" className="nav-item" style={{ marginTop: 'auto', color: '#FEB2B2' }}>
          <LogOut size={20} />
          <span>Logout</span>
        </a>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        {/* Header */}
        <header className="header">
          <div>
            <h1 className="title-large">Welcome back, HOD</h1>
            <p style={{ color: 'var(--color-text-sub)' }}>Manage your department effectively.</p>
          </div>

          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
            <div style={{ position: 'relative' }}>
              <Search size={20} style={{ position: 'absolute', left: '12px', top: '10px', color: '#A0AEC0' }} />
              <input
                type="text"
                placeholder="Search..."
                style={{
                  padding: '0.6rem 1rem 0.6rem 2.5rem',
                  borderRadius: '8px',
                  border: '1px solid #E2E8F0',
                  outline: 'none',
                  width: '250px'
                }}
              />
            </div>

            {/* Notification Section */}
            <div style={{ position: 'relative' }}>
              <button
                className="btn"
                onClick={() => {
                  setShowNotifications(!showNotifications);
                  setShowProfileMenu(false);
                }}
                style={{ background: 'white', padding: '0.6rem', borderRadius: '50%', border: '1px solid #E2E8F0', cursor: 'pointer', position: 'relative' }}
              >
                <Bell size={20} color="#718096" />
                <span style={{ position: 'absolute', top: '0', right: '0', width: '10px', height: '10px', background: '#E53E3E', borderRadius: '50%', border: '2px solid white' }}></span>
              </button>

              {showNotifications && (
                <div className="animate-fade-in" style={{
                  position: 'absolute',
                  top: '120%',
                  right: 0,
                  width: '320px',
                  background: 'white',
                  borderRadius: '12px',
                  boxShadow: 'var(--shadow-lg)',
                  border: '1px solid var(--color-border)',
                  zIndex: 50,
                  overflow: 'hidden'
                }}>
                  <div style={{ padding: '1rem', borderBottom: '1px solid var(--color-border)', fontWeight: 600, color: 'var(--color-primary)' }}>
                    Notifications <span style={{ background: '#E53E3E', color: 'white', padding: '0.1rem 0.5rem', borderRadius: '10px', fontSize: '0.7rem', marginLeft: '0.5rem' }}>3 New</span>
                  </div>
                  <div style={{ maxHeight: '300px', overflowY: 'auto' }}>
                    {[
                      { id: 1, text: "Dr. Sarah submitted 2023-24 Teaching Plan", time: "10 mins ago", type: "file" },
                      { id: 2, text: "Pending Leave Request: Mr. Robert Brown", time: "2 hours ago", type: "alert" },
                      { id: 3, text: "Quarterly Appraisal Cycle is closing soon", time: "1 day ago", type: "info" }
                    ].map(notif => (
                      <div key={notif.id} style={{ padding: '1rem', borderBottom: '1px solid #F7FAFC', cursor: 'pointer', transition: 'background 0.2s' }} className="nav-item-hover">
                        <p style={{ fontSize: '0.9rem', marginBottom: '0.3rem' }}>{notif.text}</p>
                        <span style={{ fontSize: '0.75rem', color: '#A0AEC0' }}>{notif.time}</span>
                      </div>
                    ))}
                  </div>
                  <div style={{ padding: '0.8rem', textAlign: 'center', background: '#F7FAFC', fontSize: '0.85rem', color: 'var(--color-primary)', cursor: 'pointer' }}>
                    Mark all as read
                  </div>
                </div>
              )}
            </div>

            {/* Profile Section */}
            <div style={{ position: 'relative' }}>
              <div
                onClick={() => {
                  setShowProfileMenu(!showProfileMenu);
                  setShowNotifications(false);
                }}
                style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--color-accent)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', cursor: 'pointer' }}
              >
                H
              </div>

              {showProfileMenu && (
                <div className="animate-fade-in" style={{
                  position: 'absolute',
                  top: '120%',
                  right: 0,
                  width: '200px',
                  background: 'white',
                  borderRadius: '12px',
                  boxShadow: 'var(--shadow-lg)',
                  border: '1px solid var(--color-border)',
                  zIndex: 50
                }}>
                  <div style={{ padding: '1rem', borderBottom: '1px solid var(--color-border)' }}>
                    <p style={{ fontWeight: 600 }}>HOD Admin</p>
                    <p style={{ fontSize: '0.8rem', color: '#718096' }}>hod@university.edu</p>
                  </div>
                  <div style={{ padding: '0.5rem' }}>
                    {['My Profile', 'Account Settings', 'Help & Support'].map(item => (
                      <div key={item} style={{ padding: '0.6rem 1rem', fontSize: '0.9rem', color: '#4A5568', cursor: 'pointer', borderRadius: '6px' }} className="nav-item-hover">
                        {item}
                      </div>
                    ))}
                    <div style={{ width: '100%', height: '1px', background: 'var(--color-border)', margin: '0.4rem 0' }}></div>
                    <div style={{ padding: '0.6rem 1rem', fontSize: '0.9rem', color: '#E53E3E', cursor: 'pointer', borderRadius: '6px' }} className="nav-item-hover">
                      Sign Out
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        {activeTab === 'dashboard' && (
          <div className="animate-fade-in">
            {/* Upload Section */}
            <div className="card-grid">
              <UploadZone
                title="Teaching Process"
                description="Drop Teaching Process Excel file here"
                accept=".xlsx, .xls, .csv"
                uploadedFileName={teachingProcessFile}
                onFileProcessed={(data, fileName) => {
                  setTeachingProcessData(data);
                  setTeachingProcessFile(fileName);
                  console.log("Teaching Process Data:", data);
                  alert(`Successfully loaded ${data.length} rows for Teaching Process`);
                }}
                onFileRemove={() => {
                  setTeachingProcessData(null);
                  setTeachingProcessFile(null);
                }}
                onFileView={() => {
                  handleDownload(teachingProcessData, teachingProcessFile);
                }}
              />
              <UploadZone
                title="Student Feedback"
                description="Drop Student Feedback (CSV/XLSX) here"
                accept=".xlsx, .xls, .csv"
                uploadedFileName={studentFeedbackFile}
                onFileProcessed={(data, fileName) => {
                  setStudentFeedbackData(data);
                  setStudentFeedbackFile(fileName);
                  console.log("Student Feedback Data:", data);
                  alert(`Successfully loaded ${data.length} rows for Student Feedback`);
                }}
                onFileRemove={() => {
                  setStudentFeedbackData(null);
                  setStudentFeedbackFile(null);
                }}
                onFileView={() => {
                  handleDownload(studentFeedbackData, studentFeedbackFile);
                }}
              />
            </div>

            {/* Employee Table Section */}
            <EmployeeTable />
          </div>
        )}

        {/* Appraisals Content */}
        {activeTab === 'appraisals' && (
          <Appraisals teachingProcessData={teachingProcessData} />
        )}

      </main>
    </div>
  );
}


export default App;
