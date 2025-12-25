import React, { forwardRef, useImperativeHandle } from 'react';
import { Plus } from 'lucide-react';
import { useResponsibilities } from '../../../hooks/useResponsibilities';
import { TableHeader } from '../ResponsibilitiesTable/TableHeader';
import { TableRow } from '../ResponsibilitiesTable/TableRow';
import { TableFooter } from '../ResponsibilitiesTable/TableFooter';

export interface SectionRef {
    validate: () => boolean;
}

export const ContributionSociety = forwardRef<SectionRef, {}>((props, ref) => {
    // Reusing the generic hook since structure is identical to A
    // Section H has Max 5 Points
    const { data, errors, addRow, updateRow, removeRow, getTotalPoints, getAppraisedPoints, validate } = useResponsibilities(5);

    useImperativeHandle(ref, () => ({
        validate
    }));

    return (
        <div className="bg-white rounded-xl shadow-lg border border-blue-100 overflow-hidden mb-8">
            <div className="p-6 border-b border-blue-100 flex justify-between items-center bg-blue-50/30">
                <h2 className="text-xl font-bold text-blue-900 uppercase">H. CONTRIBUTION TO SOCIETY (Points - 5)</h2>
                <button onClick={addRow} className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-bold text-sm"><Plus size={16} /> Add Activity</button>
            </div>
            <div className="overflow-x-auto">
                <table className="w-full border-collapse min-w-[1000px]">
                    <TableHeader />
                    <tbody>
                        {data.map((item) => (
                            <TableRow
                                key={item.id}
                                data={item}
                                onUpdate={updateRow}
                                onRemove={removeRow}
                                errors={errors[item.id]}
                            />
                        ))}
                    </tbody>
                    <TableFooter totalPoints={getAppraisedPoints()} maxScore={5} />
                </table>
            </div>
        </div>
    );
});
