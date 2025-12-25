import React, { useState } from 'react';
import { TableFooter } from '../ResponsibilitiesTable/TableFooter';

interface Grade {
    label: string;
    points: number;
    description: string;
}

const GRADES: Grade[] = [
    { label: 'Extraordinary', points: 10, description: '100-96%' },
    { label: 'Excellent', points: 9, description: '95-90%' },
    { label: 'Very Good', points: 8, description: '89-80%' },
    { label: 'Good', points: 7, description: '79-70%' },
    { label: 'Satisfactory', points: 5, description: '69-55%' },
    { label: 'Poor', points: 0, description: '< 55%' },
];

export const AnnualConfidentialReport: React.FC = () => {
    const [selectedGrade, setSelectedGrade] = useState<string | null>(null);
    const [points, setPoints] = useState<number>(0);

    const handleSelect = (grade: Grade) => {
        setSelectedGrade(grade.label);
        setPoints(grade.points);
    };

    return (
        <div className="bg-white rounded-xl shadow-lg border border-blue-100 overflow-hidden mb-8">
            <div className="p-6 border-b border-blue-100 bg-blue-50/30">
                <h2 className="text-xl font-bold text-blue-900 uppercase tracking-tight">
                    E. Annual Confidential Report (ACR) MAINTAINED AT INSTITUTION LEVEL (Points - 10)
                </h2>
                <div className="text-sm mt-2">
                    <span className="italic text-red-600 font-medium border border-red-200 bg-red-50 px-2 py-0.5 rounded">Note: Enclose proofs</span>
                </div>
            </div>

            <div className="p-6">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-6">
                    {GRADES.map((grade) => (
                        <button
                            key={grade.label}
                            onClick={() => handleSelect(grade)}
                            className={`flex flex-col items-center justify-center p-4 rounded-lg border-2 transition-all ${selectedGrade === grade.label
                                    ? 'border-red-500 bg-red-50 text-red-900 shadow-md transform scale-105'
                                    : 'border-gray-200 hover:border-blue-300 hover:bg-blue-50 text-gray-600'
                                }`}
                        >
                            <span className="font-bold text-sm mb-1">{grade.label}</span>
                            <span className="text-xs text-gray-500 mb-2">{grade.description}</span>
                            <span className="font-extrabold text-xl text-blue-900">{grade.points}</span>
                        </button>
                    ))}
                </div>

                <div className="flex border-t border-gray-200 pt-4 items-center justify-between bg-gray-50 p-4 rounded-lg">
                    <span className="font-bold text-gray-700 uppercase text-sm">Selected Grade: <span className="text-blue-900">{selectedGrade || 'None'}</span></span>
                </div>
            </div>
            <table className="w-full border-collapse">
                <TableFooter totalPoints={points} />
            </table>
        </div>
    );
};
