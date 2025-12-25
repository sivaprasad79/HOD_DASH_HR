import React from 'react';

export const OverallPerformance: React.FC = () => {
    const inputClass = "w-full border-b border-gray-300 focus:border-blue-600 outline-none px-1 py-0.5 bg-transparent";
    const headerClass = "border border-black px-2 py-2 font-bold text-center text-sm";
    const rowHeaderClass = "border border-black px-2 py-2 text-sm font-medium";
    const cellClass = "border border-black px-2 py-2";
    const fullInput = "w-full h-full border-none outline-none bg-transparent text-center focus:bg-blue-50";

    const rows = [
        "A. Institute Activities (Points 10)",
        "B. Department Activities (Points 10)",
        "C. Teaching Process (Points 16)",
        "D. Students' feedback (Points 20)",
        "E. Annual Confidential Report (ACR) (Points 10)",
        "F. Results (Points 20)",
        "G. Research (Points 14)",
        "H. Contribution to Society (Points 5)",
        "Total (Max. Credit Points 100)",
        "Total on 10 Point scale"
    ];

    const SignatureBlock = ({ title }: { title: string }) => (
        <div className="mt-8">
            <h4 className="font-bold text-gray-800 text-sm mb-4">{title}</h4>
            <textarea className="w-full border border-gray-300 rounded p-2 focus:ring-2 focus:ring-blue-500 outline-none min-h-[60px]" rows={2}></textarea>
            <div className="flex justify-between items-end mt-4">
                <div className="flex gap-2 items-end">
                    <label className="font-bold text-sm">Date:</label>
                    <input type="text" className="border-b-2 border-black w-32 outline-none" />
                </div>
                <div className="flex gap-2 items-end">
                    <label className="font-bold text-sm">Name & Signature</label>
                </div>
            </div>
            <div className="border-b-2 border-black mt-1"></div>
        </div>
    );

    return (
        <div className="bg-white rounded-xl shadow-lg border border-blue-100 p-8 mb-8">
            <h2 className="text-center text-xl font-bold uppercase underline mb-6 text-blue-900">Overall Annual Performance</h2>

            <div className="overflow-x-auto mb-8">
                <table className="w-full border-collapse border border-black min-w-[800px]">
                    <thead>
                        <tr>
                            <th className={headerClass}>Average Weightage by Reporting Authority</th>
                            <th className={headerClass}>
                                Academic Year 1<br />
                                <div className="flex items-center gap-1 font-normal text-xs text-left mt-1">FY: <input className={inputClass} /></div>
                            </th>
                            <th className={headerClass}>
                                Academic Year 2<br />
                                <div className="flex items-center gap-1 font-normal text-xs text-left mt-1">FY: <input className={inputClass} /></div>
                            </th>
                            <th className={headerClass}>
                                Academic Year 3<br />
                                <div className="flex items-center gap-1 font-normal text-xs text-left mt-1">FY: <input className={inputClass} /></div>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {rows.map((row, index) => (
                            <tr key={index}>
                                <td className={rowHeaderClass}>{row}</td>
                                <td className={cellClass}><input type="text" className={fullInput} /></td>
                                <td className={cellClass}><input type="text" className={fullInput} /></td>
                                <td className={cellClass}><input type="text" className={fullInput} /></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className="space-y-6">
                <div>
                    <h3 className="font-bold text-gray-800 mb-2">Observations by Reporting Authority: <span className="font-normal text-sm">(In respect of the Weightage of activities claimed):</span></h3>
                    <div className="space-y-2">
                        <input type="text" className="w-full border-b border-black outline-none focus:border-blue-600 py-1" />
                        <input type="text" className="w-full border-b border-black outline-none focus:border-blue-600 py-1" />
                    </div>
                </div>

                <div>
                    <h3 className="font-bold text-gray-800 mb-2">Remedial Measures suggested by Reporting Authority:</h3>
                    <div className="space-y-2">
                        <input type="text" className="w-full border-b border-black outline-none focus:border-blue-600 py-1" />
                        <input type="text" className="w-full border-b border-black outline-none focus:border-blue-600 py-1" />
                    </div>
                </div>

                <div className="mt-8 flex justify-between items-end">
                    <div className="flex gap-2 items-end">
                        <label className="font-bold text-sm">Date:</label>
                        <input type="text" className="border-b-2 border-black w-40 outline-none font-bold" />
                    </div>
                    <div className="font-bold text-sm">Name & Signature</div>
                </div>

                <SignatureBlock title="Recommendations of Asst. Director – I Yr / AD-MBA / AD-Pharmacy:" />
                <SignatureBlock title="Recommendations of AD – GNITC / JD – GNITC / Principal – GNIT:" />
                <SignatureBlock title="Recommendations of Director / Principal – GNHMCH:" />


            </div>
        </div>
    );
};
