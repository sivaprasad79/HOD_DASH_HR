import React from 'react';
import { Trash2 } from 'lucide-react';
import { Responsibility } from '../../../types/index';

interface Props {
    data: Responsibility;
    onUpdate: (id: string, field: keyof Responsibility, value: any) => void;
    onRemove: (id: string) => void;
}

export const TeachingRow: React.FC<Props> = ({ data, onUpdate, onRemove }) => {
    const cellClass = "p-2 border border-blue-100 align-top";
    const inputClass = "w-full p-2 border border-blue-200 rounded text-sm focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-all bg-white hover:bg-blue-50/30";

    return (
        <tr className="hover:bg-blue-50/20 transition-colors duration-150 group">
            <td className={cellClass}>
                <input type="text" className={inputClass} value={data.year} onChange={(e) => onUpdate(data.id, 'year', e.target.value)} placeholder="Year" />
            </td>
            <td className={cellClass}>
                <select className={inputClass} value={data.semester} onChange={(e) => onUpdate(data.id, 'semester', e.target.value)}>
                    <option value="">Sem</option>
                    {[1, 2, 3, 4, 5, 6, 7, 8].map(i => <option key={i} value={i}>{i}</option>)}
                </select>
            </td>
            <td className={cellClass}>
                <input type="text" className={inputClass} value={data.subjectCode} onChange={(e) => onUpdate(data.id, 'subjectCode', e.target.value)} placeholder="Code" />
            </td>
            <td className={cellClass}>
                <input type="text" className={inputClass} value={data.subjectName} onChange={(e) => onUpdate(data.id, 'subjectName', e.target.value)} placeholder="Subject Name" />
            </td>
            <td className={cellClass}>
                <input type="number" className={inputClass} value={data.scheduledClasses} onChange={(e) => onUpdate(data.id, 'scheduledClasses', e.target.value)} />
            </td>
            <td className={cellClass}>
                <input type="number" className={inputClass} value={data.classesHeld} onChange={(e) => onUpdate(data.id, 'classesHeld', e.target.value)} />
            </td>
            <td className={cellClass}>
                <input type="number" min="0" max="10" className={inputClass} value={data.creditPointsFaculty} onChange={(e) => onUpdate(data.id, 'creditPointsFaculty', e.target.value)} />
            </td>
            <td className={cellClass}>
                <input type="text" className={inputClass} value={data.documentIndex} onChange={(e) => onUpdate(data.id, 'documentIndex', e.target.value)} />
            </td>
            <td className={cellClass}>
                <input type="number" className={`${inputClass} bg - gray - 100 text - gray - 400 cursor - not - allowed`} value={data.creditPointsAuthority || ''} disabled readOnly />
            </td>
            <td className={`${cellClass} text - center align - middle`}>
                <button onClick={() => onRemove(data.id)} className="text-red-400 hover:text-red-600 hover:bg-red-50 p-2 rounded-full transition-colors opacity-0 group-hover:opacity-100 focus:opacity-100"><Trash2 size={18} /></button>
            </td>
        </tr>
    );
};
