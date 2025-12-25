import React, { forwardRef, useImperativeHandle } from 'react';
import { Plus } from 'lucide-react';
import { useResponsibilities } from '../../../hooks/useResponsibilities';
import { TableHeader } from './TableHeader';
import { TableRow } from './TableRow';
import { TableFooter } from './TableFooter';

export interface SectionRef {
    validate: () => boolean;
}

export const ResponsibilitiesTable = forwardRef<SectionRef, {}>((props, ref) => {
    const { data, errors, addRow, updateRow, removeRow, getTotalPoints, getAppraisedPoints, validate } = useResponsibilities(10);
    const totalPoints = getTotalPoints();
    const effectivePoints = getAppraisedPoints();

    useImperativeHandle(ref, () => ({
        validate
    }));

    return (
        <div className="bg-white rounded-xl shadow-lg border border-blue-100 overflow-hidden">
            <div className="p-6 bg-gradient-to-r from-blue-50 to-white flex justify-between items-center border-b border-blue-100">
                <div>
                    <h2 className="text-xl font-bold text-blue-900">A. Additional Responsibilities (Institute Level)</h2>
                    <p className="text-sm text-blue-600 mt-1">Max Credit Points: 10</p>
                </div>
                <button
                    onClick={addRow}
                    className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-all shadow-md active:scale-95 text-sm font-semibold"
                >
                    <span className="text-lg font-bold">+</span> Add Activity
                </button>
            </div>

            <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-red-200">
                    <TableHeader />
                    <tbody className="bg-white">
                        {data.length === 0 ? (
                            <tr>
                                <td colSpan={8} className="p-8 text-center">
                                    {errors['TABLE_ERROR'] ? (
                                        <div className="text-red-500 font-bold bg-red-50 p-4 rounded-lg border border-red-200 animate-pulse">
                                            ⚠️ At least one activity is required. Please add a row.
                                        </div>
                                    ) : (
                                        <span className="text-gray-400 italic">No activities added. Click "Add Activity" to start.</span>
                                    )}
                                </td>
                            </tr>
                        ) : (
                            data.map((item) => (
                                <TableRow
                                    key={item.id}
                                    data={item}
                                    onUpdate={updateRow}
                                    onRemove={removeRow}
                                    errors={errors[item.id]}
                                />
                            ))
                        )}
                    </tbody>
                    <TableFooter totalPoints={effectivePoints} />
                </table>
            </div>
        </div>
    );
});
