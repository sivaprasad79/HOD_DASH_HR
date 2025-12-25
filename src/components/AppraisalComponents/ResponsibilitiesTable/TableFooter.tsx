import React from 'react';

interface Props {
    totalPoints: number;
    maxScore?: number;
}

export const TableFooter: React.FC<Props> = ({ totalPoints, maxScore = 10 }) => {
    return (
        <tfoot>
            <tr className="bg-red-50 font-bold border-t-2 border-red-200">
                <td colSpan={4} className="border border-red-200 px-4 py-4 text-right text-red-900 text-sm uppercase tracking-wide">
                    Average Weightage by Faculty & Head (Out of Max. {maxScore} Points)
                </td>
                <td className="border border-red-200 px-4 py-4 text-center text-red-700 text-xl bg-white shadow-inner">
                    {totalPoints}
                    <span className="text-red-300 text-xs ml-1">/ {maxScore}</span>
                </td>
                <td colSpan={3} className="border border-red-200 bg-red-50/50"></td>
            </tr>
        </tfoot>
    );
};
