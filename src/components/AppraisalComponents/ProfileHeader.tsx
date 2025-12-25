import React, { useState, forwardRef, useImperativeHandle } from 'react';


export interface ProfileHeaderRef {
    validate: () => boolean;
}

export const ProfileHeader = forwardRef<ProfileHeaderRef, {}>((_, ref) => {
    // Removed fileInputRef
    const [formData, setFormData] = useState({
        employeeName: '',
        college: '',
        department: '',
        doj: '',
        empId: '',
        designation: '',
        workload: '',
        dob: '',
        age: '',
        academicYear: '2024-25'
    });

    const [errors, setErrors] = useState<Record<string, boolean>>({});

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        if (value) setErrors(prev => ({ ...prev, [name]: false }));
    };

    // Auto-calculate age from DOB
    const handleDobChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const dobStr = e.target.value;
        let ageStr = '';
        if (dobStr) {
            const dob = new Date(dobStr);
            const diffMs = Date.now() - dob.getTime();
            const ageDate = new Date(diffMs);
            ageStr = Math.abs(ageDate.getUTCFullYear() - 1970).toString();
        }

        setFormData(prev => ({ ...prev, dob: dobStr, age: ageStr }));
        if (dobStr) setErrors(prev => ({ ...prev, dob: false }));
    };

    const validate = () => {
        const newErrors: Record<string, boolean> = {};
        let isValid = true;

        // All fields are required except age (auto-calc) and academicYear (default)
        const requiredFields = ['employeeName', 'college', 'department', 'doj', 'empId', 'designation', 'workload', 'dob'];

        requiredFields.forEach(field => {
            if (!formData[field as keyof typeof formData]) {
                newErrors[field] = true;
                isValid = false;
            }
        });

        setErrors(newErrors);
        return isValid;
    };

    useImperativeHandle(ref, () => ({
        validate
    }));

    // handleFileUpload removed

    const labelClass = "font-bold text-blue-900 text-sm mb-1 block";
    // Base input class with conditional error styling
    const getInputClass = (fieldName: string) => `
        w-full bg-transparent border-b-2 outline-none px-2 py-1 transition-colors text-gray-800
        ${errors[fieldName]
            ? 'border-red-500 bg-red-50 placeholder-red-300'
            : 'border-red-200 focus:border-red-600 focus:bg-red-50'
        }
    `;
    const rowClass = "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-4";

    return (
        <div className="bg-white p-6 md:p-8 rounded-xl shadow-xl mb-6 text-gray-800 border border-blue-100 relative">



            <div className="text-center mb-10 mt-8 md:mt-0">
                <h1 className="text-3xl md:text-5xl font-extrabold text-blue-900 mb-3 tracking-wide uppercase" style={{ textShadow: '1px 1px 0px rgba(0,0,0,0.1)' }}>
                    Guru Nanak Institutions
                </h1>
                <h2 className="text-lg md:text-xl font-semibold text-red-700 flex flex-col md:flex-row justify-center items-center gap-2">
                    <span>Teaching Appraisal and 360° Feedback Form for Academic Year</span>
                    <input
                        type="text"
                        name="academicYear"
                        value={formData.academicYear}
                        onChange={handleChange}
                        className="bg-transparent border-b-2 border-red-400 font-bold text-center w-32 focus:outline-none focus:border-red-700 text-blue-900"
                    />
                </h2>
            </div>

            <div className="space-y-6">
                {/* Row 1 */}
                <div className={rowClass}>
                    <div>
                        <label className={labelClass}>Employee Name:</label>
                        <input
                            type="text"
                            name="employeeName"
                            value={formData.employeeName}
                            onChange={handleChange}
                            className={getInputClass('employeeName')}
                            placeholder="Enter Name"
                        />
                    </div>
                    <div>
                        <label className={labelClass}>College:</label>
                        <input
                            type="text"
                            name="college"
                            value={formData.college}
                            onChange={handleChange}
                            className={getInputClass('college')}
                            placeholder="Enter College"
                        />
                    </div>
                    <div>
                        <label className={labelClass}>Department:</label>
                        <input
                            type="text"
                            name="department"
                            value={formData.department}
                            onChange={handleChange}
                            className={getInputClass('department')}
                            placeholder="Enter Department"
                        />
                    </div>
                    <div>
                        <label className={labelClass}>DOJ:</label>
                        <input
                            type="text"
                            name="doj"
                            value={formData.doj}
                            onChange={handleChange}
                            className={getInputClass('doj')}
                            placeholder="YYYY-MM-DD"
                            onFocus={(e) => e.target.type = 'date'}
                            onBlur={(e) => { if (!e.target.value) e.target.type = 'text'; }}
                        />
                    </div>
                </div>

                {/* Row 2 */}
                <div className={rowClass}>
                    <div>
                        <label className={labelClass}>Emp ID:</label>
                        <input
                            type="text"
                            name="empId"
                            value={formData.empId}
                            onChange={handleChange}
                            className={getInputClass('empId')}
                            placeholder="Enter Emp ID"
                        />
                    </div>
                    <div>
                        <label className={labelClass}>Designation:</label>
                        <input
                            type="text"
                            name="designation"
                            value={formData.designation}
                            onChange={handleChange}
                            className={getInputClass('designation')}
                            placeholder="Enter Designation"
                        />
                    </div>
                    <div>
                        <label className={labelClass}>Workload (Theory & Labs Count):</label>
                        <input
                            type="text"
                            name="workload"
                            value={formData.workload}
                            onChange={handleChange}
                            className={getInputClass('workload')}
                            placeholder="Enter Workload"
                        />
                    </div>
                    <div>
                        <label className={labelClass}>DOB / Age:</label>
                        <div className="flex gap-2">
                            <input
                                type="text"
                                name="dob"
                                value={formData.dob}
                                onChange={handleDobChange}
                                className={getInputClass('dob')}
                                placeholder="YYYY-MM-DD"
                                onFocus={(e) => e.target.type = 'date'}
                                onBlur={(e) => { if (!e.target.value) e.target.type = 'text'; }}
                            />
                            <input
                                type="text"
                                placeholder="Age"
                                value={formData.age}
                                readOnly
                                className={`${getInputClass('age').split('bg-red-50')[0]} w-20 bg-gray-50 text-center font-bold text-gray-500`}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
});
