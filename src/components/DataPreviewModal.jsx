import React from 'react';
import { X } from 'lucide-react';

const DataPreviewModal = ({ title, data, onClose }) => {
    if (!data || data.length === 0) return null;

    // Get headers from the first object
    const headers = Object.keys(data[0]);

    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000,
            backdropFilter: 'blur(4px)'
        }}>
            <div className="animate-fade-in" style={{
                backgroundColor: 'white',
                borderRadius: '12px',
                width: '90%',
                maxWidth: '1000px',
                maxHeight: '85vh',
                display: 'flex',
                flexDirection: 'column',
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
            }}>
                {/* Header */}
                <div style={{
                    padding: '1.5rem',
                    borderBottom: '1px solid #E2E8F0',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }}>
                    <h2 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#1A202C' }}>
                        {title} - Data Preview
                    </h2>
                    <button
                        onClick={onClose}
                        style={{
                            padding: '0.5rem',
                            borderRadius: '50%',
                            border: 'none',
                            background: '#F7FAFC',
                            cursor: 'pointer',
                            color: '#4A5568',
                            transition: 'background 0.2s'
                        }}
                        className="hover:bg-gray-200"
                    >
                        <X size={24} />
                    </button>
                </div>

                {/* Content */}
                <div style={{ padding: '1.5rem', overflow: 'auto' }}>
                    <div style={{
                        border: '1px solid #E2E8F0',
                        borderRadius: '8px',
                        overflow: 'hidden'
                    }}>
                        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.875rem' }}>
                            <thead style={{ background: '#F7FAFC' }}>
                                <tr>
                                    {headers.map((header) => (
                                        <th key={header} style={{
                                            padding: '0.75rem 1rem',
                                            textAlign: 'left',
                                            fontWeight: '600',
                                            color: '#4A5568',
                                            borderBottom: '1px solid #E2E8F0',
                                            textTransform: 'capitalize'
                                        }}>
                                            {header.replace(/_/g, ' ')}
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((row, index) => (
                                    <tr key={index} style={{
                                        borderBottom: index === data.length - 1 ? 'none' : '1px solid #E2E8F0',
                                        backgroundColor: index % 2 === 0 ? 'white' : '#F7FAFC'
                                    }}>
                                        {headers.map((header) => (
                                            <td key={`${index}-${header}`} style={{
                                                padding: '0.75rem 1rem',
                                                color: '#2D3748'
                                            }}>
                                                {row[header]}
                                            </td>
                                        ))}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div style={{ marginTop: '1rem', textAlign: 'right', color: '#718096', fontSize: '0.875rem' }}>
                        Showing {data.length} rows
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DataPreviewModal;
