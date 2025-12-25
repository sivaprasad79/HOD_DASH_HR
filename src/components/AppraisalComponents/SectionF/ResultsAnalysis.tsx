import React from 'react';
import { Plus, Trash2 } from 'lucide-react';
import { useResultsAnalysis } from '../../../hooks/useResultsAnalysis';
import type { Responsibility } from '../../../types/index';

const ResultsHeader = () => (
    <thead>
        <tr>
            {['Year', 'Semester', 'Subject Code', 'Subject Name', 'No. of Students Registered', 'No. of Students Passed', 'Result %', 'Verified by (CoE/CCoE)', ''].map((h, i) => (
                <th key={i} className="border-r border-blue-800/30 last:border-r-0 px-2 py-3 font-bold text-center bg-blue-900 text-white align-middle text-xs tracking-wide">
                    {h}
                </th>
            ))}
        </tr>
    </thead>
);

const ResultsRow = ({ data, onUpdate, onRemove }: { data: Responsibility, onUpdate: any, onRemove: any }) => {
    const inputClass = "w-full p-2 border border-blue-200 rounded text-sm focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-all bg-white hover:bg-blue-50/30";
    return (
        <tr className="hover:bg-blue-50/20 transition-colors duration-150 group">
            {/* Simplified inputs for brevity - assuming Standard inputs */}
            <td className="p-2 border border-blue-100"><input className={inputClass} value={data.year} onChange={(e) => onUpdate(data.id, 'year', e.target.value)} /></td>
            <td className="p-2 border border-blue-100"><input className={inputClass} value={data.semester} onChange={(e) => onUpdate(data.id, 'semester', e.target.value)} /></td>
            <td className="p-2 border border-blue-100"><input className={inputClass} value={data.subjectCode} onChange={(e) => onUpdate(data.id, 'subjectCode', e.target.value)} /></td>
            <td className="p-2 border border-blue-100"><input className={inputClass} value={data.subjectName} onChange={(e) => onUpdate(data.id, 'subjectName', e.target.value)} /></td>
            <td className="p-2 border border-blue-100"><input type="number" className={inputClass} value={data.studentsRegistered} onChange={(e) => onUpdate(data.id, 'studentsRegistered', e.target.value)} /></td>
            <td className="p-2 border border-blue-100"><input type="number" className={inputClass} value={data.studentsPassed} onChange={(e) => onUpdate(data.id, 'studentsPassed', e.target.value)} /></td>
            <td className="p-2 border border-blue-100 text-center font-bold text-blue-900">{data.passPercentage}%</td>
            <td className="p-2 border border-blue-100 bg-gray-50"></td>
            <td className="p-2 border border-blue-100 text-center">
                <button onClick={() => onRemove(data.id)} className="text-red-400 hover:text-red-600 hover:bg-red-50 p-2 rounded-full transition-colors opacity-0 group-hover:opacity-100 focus:opacity-100"><Trash2 size={18} /></button>
            </td>
        </tr>
    )
}

export const ResultsAnalysis: React.FC = () => {
    const { data, addRow, updateRow, removeRow } = useResultsAnalysis();

    return (
        <div className="bg-white rounded-xl shadow-lg border border-blue-100 overflow-hidden mb-8">
            <div className="p-6 border-b border-blue-100 flex justify-between items-center bg-blue-50/30">
                <div>
                    <h2 className="text-xl font-bold text-blue-900 uppercase">F. Results Analysis (Credit Points 20)</h2>
                    <span className="text-sm italic text-red-600 bg-red-50 px-2 ">Note: Only Theory Subjects</span>
                </div>
                <button onClick={addRow} className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-bold text-sm"><Plus size={16} /> Add Subject</button>
            </div>
            <div className="overflow-x-auto">
                <table className="w-full border-collapse min-w-[1000px]">
                    <ResultsHeader />
                    <tbody>
                        {data.map(item => <ResultsRow key={item.id} data={item} onUpdate={updateRow} onRemove={removeRow} />)}
                    </tbody>
                    {/* Custom Footer for F since it has different split */}
                    <tfoot>
                        <tr className="bg-red-50 font-bold border-t-2 border-red-200">
                            <td colSpan={4} className="border border-red-200 px-4 py-4 text-right text-red-900 text-sm uppercase">Average Weightage (Out of Max. 20 Points)</td>
                            <td colSpan={2} className="border border-red-200 px-4">
                                <div className="flex justify-between border-b border-red-200 py-1"><span>By Faculty</span><input className="w-16 bg-white border border-red-300 px-1" /></div>
                                <div className="flex justify-between py-1"><span>By Head</span><input className="w-16 bg-white border border-red-300 px-1" /></div>
                            </td>
                            <td colSpan={3} className="border border-red-200 bg-red-50/50"></td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>
    );
};
