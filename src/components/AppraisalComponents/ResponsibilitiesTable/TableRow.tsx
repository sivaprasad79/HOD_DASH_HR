import React from 'react';
import { Trash2 } from 'lucide-react';
import type { Responsibility } from '../../../types';

interface Props {
    data: Responsibility;
    onUpdate: (id: string, field: keyof Responsibility, value: any) => void;
    onRemove: (id: string) => void;
    errors?: string[];
}

export const TableRow: React.FC<Props> = ({ data, onUpdate, onRemove, errors = [] }) => {
    const cellClass = "p-2 border border-blue-100 align-top";
    const getError = (fieldStr: string) => errors.find(e => e.toLowerCase().includes(fieldStr.toLowerCase()));

    // Enhanced Error Class: Add ring and glowing effect on error
    const getErrorClass = (fieldStr: string) => getError(fieldStr) ? "border-red-500 bg-red-50 focus:ring-red-500 focus:border-red-500 ring-1 ring-red-200" : "border-blue-200 focus:ring-blue-500 focus:border-blue-500";

    const baseInputClass = "w-full p-2 border rounded text-sm outline-none transition-all";
    const inputClass = (field: string) => `${baseInputClass} ${getErrorClass(field)} bg - white hover: bg - blue - 50 / 30`;

    const renderError = (field: string) => {
        const error = getError(field);
        if (!error) return null;
        return (
            <div className="flex items-center gap-1 mt-1 text-xs text-red-600 font-medium animate-pulse">
                <span>⚠️ {error}</span>
            </div>
        );
    };

    return (
        <tr className="hover:bg-blue-50/20 transition-colors duration-150 group">
            <td className={cellClass}>
                <input
                    type="text"
                    className={inputClass('year')}
                    value={data.year}
                    onChange={(e) => onUpdate(data.id, 'year', e.target.value)}
                    placeholder="2024-25"
                />
                {renderError('year')}
            </td>
            <td className={cellClass}>
                <select
                    className={inputClass('semester')}
                    value={data.semester}
                    onChange={(e) => onUpdate(data.id, 'semester', e.target.value)}
                >
                    <option value="">Select</option>
                    {[1, 2, 3, 4, 5, 6, 7, 8].map(i => <option key={i} value={i}>Sem {i}</option>)}
                </select>
                {renderError('semester')}
            </td>
            <td className={cellClass}>
                <textarea
                    className={inputClass('activity')}
                    rows={3}
                    value={data.activity}
                    onChange={(e) => onUpdate(data.id, 'activity', e.target.value)}
                    placeholder="Describe activity..."
                />
                {renderError('activity')}
            </td>
            <td className={cellClass}>
                <textarea
                    className={inputClass('criteria')}
                    rows={3}
                    value={data.criteria}
                    onChange={(e) => onUpdate(data.id, 'criteria', e.target.value)}
                    placeholder="Criteria..."
                />
            </td>
            <td className={cellClass}>
                <input
                    type="number"
                    min="0"
                    max="10"
                    className={inputClass('points')}
                    value={data.creditPointsFaculty}
                    onChange={(e) => onUpdate(data.id, 'creditPointsFaculty', e.target.value)}
                />
                {/* Check for generic 'Points' error since field name in hook might differ slightly in error string construction */}
                {renderError('points')}
            </td>
            <td className={cellClass}>
                <input
                    type="text"
                    className={inputClass('documentIndex')}
                    value={data.documentIndex}
                    onChange={(e) => onUpdate(data.id, 'documentIndex', e.target.value)}
                />
            </td>
            <td className={cellClass}>
                <input
                    type="number"
                    className={`${baseInputClass} border - gray - 200 bg - gray - 100 text - gray - 400 cursor - not - allowed`}
                    value={data.creditPointsAuthority || ''}
                    disabled
                    readOnly
                    placeholder="Authority"
                />
            </td>
            <td className={`${cellClass} text - center align - middle`}>
                <button
                    onClick={() => onRemove(data.id)}
                    className="text-red-400 hover:text-red-600 hover:bg-red-50 p-2 rounded-full transition-colors opacity-0 group-hover:opacity-100 focus:opacity-100"
                    title="Remove Row"
                >
                    <Trash2 size={18} />
                </button>
            </td>
        </tr>
    );
};
