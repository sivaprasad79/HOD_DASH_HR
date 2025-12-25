import React from 'react';
import { Plus } from 'lucide-react';
import { useStudentFeedback } from '../../../hooks/useStudentFeedback';
import { FeedbackHeader } from './FeedbackHeader';
import { FeedbackRow } from './FeedbackRow';
import { TableFooter } from '../ResponsibilitiesTable/TableFooter';

export const StudentFeedback: React.FC = () => {
    const { data, addRow, updateRow, removeRow, getTotalPoints } = useStudentFeedback();

    return (
        <div className="bg-white rounded-xl shadow-lg border border-blue-100 overflow-hidden mb-8">
            <div className="p-6 border-b border-blue-100 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-blue-50/30">
                <div>
                    <h2 className="text-xl font-bold text-blue-900 uppercase tracking-tight">
                        D. Students' Feedback (Points - 20)
                    </h2>
                    <div className="text-sm mt-2 flex flex-col sm:flex-row gap-2 sm:items-center">
                        <span className="italic text-red-600 font-medium border border-red-200 bg-red-50 px-2 py-0.5 rounded">Note: Max. 10 Credit points for each sem. & min. 70% students data</span>
                    </div>
                </div>
                <button onClick={addRow} className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-5 py-2.5 rounded-lg font-bold transition-all shadow-md hover:shadow-lg text-sm border-b-4 border-red-800 active:border-b-0 active:translate-y-1">
                    <Plus size={18} /> Add Feedback
                </button>
            </div>
            <div className="overflow-x-auto">
                <table className="w-full border-collapse min-w-[1000px]">
                    <FeedbackHeader />
                    <tbody>
                        {data.map((item) => <FeedbackRow key={item.id} data={item} onUpdate={updateRow} onRemove={removeRow} />)}
                    </tbody>
                    <TableFooter totalPoints={getTotalPoints()} />
                </table>
            </div>
        </div>
    );
};
