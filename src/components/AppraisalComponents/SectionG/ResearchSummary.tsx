import React from 'react';
import { useResearchSummary } from '../../../hooks/useResearchSummary';
import { TableFooter } from '../ResponsibilitiesTable/TableFooter';

export const ResearchSummary: React.FC = () => {
    const { data, updateCount, getTotalPoints } = useResearchSummary();

    return (
        <div className="bg-white rounded-xl shadow-lg border border-blue-100 overflow-hidden mb-8">
            <div className="p-6 border-b border-blue-100 bg-blue-50/30">
                <h2 className="text-xl font-bold text-blue-900 uppercase tracking-tight">
                    G. RESEARCH & DEVELOPMENT Summary (Points - 14)
                </h2>
                <span className="text-sm italic text-blue-600">Period: July to June of every Academic Year</span>
            </div>
            <div className="overflow-x-auto">
                <table className="w-full border-collapse min-w-[1000px]">
                    <thead>
                        <tr>
                            {['S.No', 'Category', 'Limit Count (Max.)', 'Numbers (Count)', 'Marks (per unit)', 'Credit Points (Faculty)', 'Supporting Doc Index', 'Credit Points (Dean-R&D)'].map((h, i) => (
                                <th key={i} className="border-r border-blue-800/30 px-2 py-3 font-bold text-center bg-blue-900 text-white text-xs">{h}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item, index) => (
                            <tr key={item.id} className="hover:bg-blue-50/20">
                                <td className="p-2 border border-blue-100 text-center font-bold bg-gray-50">{index + 1}</td>
                                <td className="p-2 border border-blue-100 font-medium text-gray-800">{item.category}</td>
                                <td className="p-2 border border-blue-100 text-center text-gray-500">{item.limitCount || '-'}</td>
                                <td className="p-2 border border-blue-100">
                                    <input
                                        type="number"
                                        className="w-full p-1 border border-blue-200 text-center font-bold text-blue-900 focus:ring-2 focus:ring-red-500 rounded"
                                        value={item.count || 0}
                                        min="0"
                                        onChange={(e) => updateCount(item.id, Number(e.target.value))}
                                    />
                                </td>
                                <td className="p-2 border border-blue-100 text-center text-gray-600">{item.marksPerUnit}</td>
                                <td className="p-2 border border-blue-100 text-center font-bold text-lg text-blue-700">{item.creditPointsFaculty}</td>
                                <td className="p-2 border border-blue-100"><input className="w-full border-none focus:outline-none bg-transparent" /></td>
                                <td className="p-2 border border-blue-100 bg-gray-50"></td>
                            </tr>
                        ))}
                    </tbody>
                    <TableFooter totalPoints={getTotalPoints()} />
                </table>
            </div>
        </div>
    );
};
