import React from 'react';

export const TableHeader: React.FC = () => {
    const headerClass = "border-r border-blue-800/30 last:border-r-0 px-4 py-3 font-bold text-center bg-blue-900 text-white align-middle text-sm tracking-wide";

    return (
        <thead>
            <tr>
                <th className={headerClass}>Year</th>
                <th className={headerClass}>Semester</th>
                <th className={headerClass}>Activity</th>
                <th className={headerClass}>Criteria</th>
                <th className={headerClass}>
                    Credit Points<br />(Faculty)
                </th>
                <th className={headerClass}>
                    Supporting Document<br />Index No.
                </th>
                <th className={headerClass}>
                    Credit Points<br />(Assessed by Reporting Authority)
                </th>
                <th className="bg-blue-900 border-b border-blue-800 px-4 py-2 w-10"></th> {/* Action column */}
            </tr>
        </thead>
    );
};
