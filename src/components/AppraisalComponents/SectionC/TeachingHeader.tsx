import React from 'react';

export const TeachingHeader: React.FC = () => {
    const headerClass = "border-r border-blue-800/30 last:border-r-0 px-2 py-3 font-bold text-center bg-blue-900 text-white align-middle text-xs tracking-wide";

    return (
        <thead>
            <tr>
                <th className={headerClass}>Year</th>
                <th className={headerClass}>Sem</th>
                <th className={headerClass}>Subject Code</th>
                <th className={headerClass}>Subject Name</th>
                <th className={headerClass}>No. of<br />Scheduled Classes</th>
                <th className={headerClass}>No. of<br />Classes Held</th>
                <th className={headerClass}>Credit Points<br />(Faculty)</th>
                <th className={headerClass}>Supporting Doc<br />Index No.</th>
                <th className={headerClass}>Credit Points<br />(Authority)</th>
                <th className="bg-blue-900 border-b border-blue-800 w-10"></th>
            </tr>
        </thead>
    );
};
