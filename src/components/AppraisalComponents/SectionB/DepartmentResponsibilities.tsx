import React, { forwardRef, useImperativeHandle } from 'react';
import { Plus } from 'lucide-react';
import { useResponsibilities } from '../../../hooks/useResponsibilities';
import { TableHeader } from '../ResponsibilitiesTable/TableHeader';
import { TableRow } from '../ResponsibilitiesTable/TableRow';
import { TableFooter } from '../ResponsibilitiesTable/TableFooter';

export interface SectionRef {
    validate: () => boolean;
}

export const DepartmentResponsibilities = forwardRef<SectionRef, {}>((props, ref) => {
    const { data, errors, addRow, updateRow, removeRow, getTotalPoints, getAppraisedPoints, validate } = useResponsibilities(10);

    useImperativeHandle(ref, () => ({
        validate
    }));

    return (
        <div className="bg-white rounded-xl shadow-lg border border-blue-100 overflow-hidden mb-8">
            <div className="p-6 border-b border-blue-100 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-blue-50/30">
                <div>
                    <h2 className="text-xl font-bold text-blue-900 uppercase tracking-tight">
                        B. Additional Responsibilities (Department Level)
                    </h2>
                    <div className="text-sm mt-2 flex flex-col sm:flex-row gap-2 sm:items-center">
                        <span className="font-bold text-white bg-blue-700 px-3 py-1 rounded-full shadow-sm">Points: 10</span>
                        <span className="hidden sm:inline text-blue-200">|</span>
                        <span className="italic text-red-600 font-medium border border-red-200 bg-red-50 px-2 py-0.5 rounded">Note: Max. 5 Credit points for each semester</span>
                    </div>
                </div>
                <button
                    onClick={addRow}
                    className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-5 py-2.5 rounded-lg font-bold transition-all shadow-md hover:shadow-lg text-sm border-b-4 border-red-800 active:border-b-0 active:translate-y-1"
                >
                    <Plus size={18} />
                    Add Activity
                </button>
            </div>

            <div className="overflow-x-auto">
                <table className="w-full border-collapse min-w-[1000px]">
                    <TableHeader />
                    <tbody>
                        {data.length === 0 ? (
                            <tr>
                                <td colSpan={8} className="p-8 text-center">
                                    {errors['TABLE_ERROR'] ? (
                                        <div className="text-red-500 font-bold bg-red-50 p-4 rounded-lg border border-red-200 animate-pulse">
                                            ⚠️ At least one activity is required. Please add a row.
                                        </div>
                                    ) : (
                                        <div className="flex flex-col items-center justify-center gap-2">
                                            <div className="p-4 bg-blue-50 rounded-full">
                                                <Plus size={32} className="text-blue-300" />
                                            </div>
                                            <p className="text-blue-900 font-medium">No responsibilities added yet.</p>
                                            <button onClick={addRow} className="text-red-600 hover:text-red-700 hover:underline text-sm font-bold">Add your first activity</button>
                                        </div>
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
                    <TableFooter totalPoints={getAppraisedPoints()} />
                </table>
            </div>
        </div>
    );
});
