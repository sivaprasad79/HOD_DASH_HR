import React from 'react';
import { Users } from 'lucide-react';

const EmployeeTable = () => {
    // Mock Data
    const employees = [
        { id: 'EMP001', name: 'Dr. Sarah Smith', designation: 'Professor', joinDate: '2015-08-12', status: 'Active' },
        { id: 'EMP002', name: 'Prof. James Wilson', designation: 'Associate Professor', joinDate: '2018-03-24', status: 'Active' },
        { id: 'EMP003', name: 'Dr. Emily Chen', designation: 'Assistant Professor', joinDate: '2020-01-15', status: 'On Leave' },
        { id: 'EMP004', name: 'Mr. Robert Brown', designation: 'Lecturer', joinDate: '2022-09-01', status: 'Active' },
        { id: 'EMP005', name: 'Ms. Anita Roy', designation: 'Lab Instructor', joinDate: '2023-02-10', status: 'Active' },
    ];

    return (
        <div className="table-section">
            <div className="section-header">
                <div className="section-title">
                    <Users size={20} />
                    <span>Department Employees</span>
                </div>
                <div className="badge badge-active" style={{ fontSize: '0.9rem', padding: '0.4rem 1rem' }}>
                    Read Only View
                </div>
            </div>

            <div style={{ overflowX: 'auto' }}>
                <table className="employee-table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Designation</th>
                            <th>Date of Joining</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {employees.map((emp) => (
                            <tr key={emp.id}>
                                <td style={{ fontWeight: 600, color: 'var(--color-primary)' }}>{emp.id}</td>
                                <td>{emp.name}</td>
                                <td>{emp.designation}</td>
                                <td>{emp.joinDate}</td>
                                <td>
                                    <span className={`badge ${emp.status === 'Active' ? 'badge-active' : ''}`}
                                        style={{ backgroundColor: emp.status !== 'Active' ? '#FFF5F5' : undefined, color: emp.status !== 'Active' ? '#C53030' : undefined }}>
                                        {emp.status}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default EmployeeTable;
