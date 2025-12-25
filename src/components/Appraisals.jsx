import React, { useState } from 'react';
import { CheckCircle, Clock, ChevronRight, User } from 'lucide-react';

import AppraisalForm from './AppraisalForm';

const Appraisals = ({ teachingProcessData }) => {
    const [selectedEmployee, setSelectedEmployee] = useState(null);

    const appraisalList = [
        { id: 'EMP001', name: 'Dr. Sarah Smith', role: 'Professor', status: 'Completed', score: '92/100', date: '2023-11-15' },
        { id: 'EMP002', name: 'Prof. James Wilson', role: 'Associate Professor', status: 'Pending', score: '-', date: '-' },
        { id: 'EMP003', name: 'Dr. Emily Chen', role: 'Assistant Professor', status: 'In Progress', score: '-', date: '2023-12-01' },
        { id: 'EMP004', name: 'Mr. Robert Brown', role: 'Lecturer', status: 'Pending', score: '-', date: '-' },
    ];

    if (selectedEmployee) {
        return (
            <div className="animate-fade-in h-full">
                <button
                    onClick={() => setSelectedEmployee(null)}
                    style={{ marginBottom: '1.5rem', background: 'none', border: 'none', color: 'var(--color-primary)', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 600 }}
                >
                    ← Back to List
                </button>

                <div className="table-section mb-6">
                    <div className="section-header">
                        <div className="section-title">
                            <User size={20} />
                            <span>Appraisal: {selectedEmployee.name}</span>
                        </div>
                        <div className="badge badge-active">
                            {selectedEmployee.status}
                        </div>
                    </div>
                </div>

                <AppraisalForm teachingProcessData={teachingProcessData} />
            </div>
        );
    }

    return (
        <div className="animate-fade-in">
            <div className="section-header" style={{ marginBottom: '2rem' }}>
                <div>
                    <h2 className="title-large" style={{ fontSize: '1.5rem' }}>Department Appraisals</h2>
                    <p style={{ color: 'var(--color-text-sub)' }}>Track and manage performance reviews.</p>
                </div>
                <div className="badge" style={{ background: 'var(--color-primary)', color: 'white', fontSize: '1rem', padding: '0.5rem 1rem' }}>
                    Cycle 2023-2024
                </div>
            </div>

            <div className="card-grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))' }}>
                {appraisalList.map((item) => (
                    <div
                        key={item.id}
                        className="upload-card"
                        style={{ alignItems: 'flex-start', textAlign: 'left', minHeight: 'auto', gap: '0.5rem', position: 'relative' }}
                        onClick={() => setSelectedEmployee(item)}
                    >
                        <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', marginBottom: '0.5rem' }}>
                            <span style={{ fontWeight: 600, color: 'var(--color-text-sub)', fontSize: '0.8rem' }}>{item.id}</span>
                            {item.status === 'Completed' ? (
                                <CheckCircle size={18} color="#10B981" />
                            ) : (
                                <Clock size={18} color="#ECC94B" />
                            )}
                        </div>

                        <h3 className="card-title" style={{ fontSize: '1.1rem' }}>{item.name}</h3>
                        <p className="card-desc">{item.role}</p>

                        <div style={{ width: '100%', height: '1px', background: 'var(--color-border)', margin: '1rem 0' }}></div>

                        <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', alignItems: 'center' }}>
                            <span className={`badge ${item.status === 'Completed' ? 'badge-active' : ''}`}
                                style={{
                                    backgroundColor: item.status === 'Pending' ? '#FFFBEB' : (item.status === 'In Progress' ? '#EBF8FF' : undefined),
                                    color: item.status === 'Pending' ? '#B45309' : (item.status === 'In Progress' ? '#2B6CB0' : undefined)
                                }}>
                                {item.status}
                            </span>
                            <ChevronRight size={18} color="var(--color-text-sub)" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Appraisals;
