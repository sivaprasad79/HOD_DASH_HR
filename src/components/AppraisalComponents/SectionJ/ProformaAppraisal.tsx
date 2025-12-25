import React from 'react';

export const ProformaAppraisal: React.FC = () => {
    const inputClass = "w-full h-full border-none outline-none bg-transparent text-center focus:bg-blue-50 px-1 font-medium text-blue-900";
    const headerClass = "border border-black px-2 py-2 font-bold text-center text-xs bg-gray-100";
    const cellClass = "border border-black p-0 h-10";
    const labelClass = "font-bold text-sm text-gray-800";
    const borderBClass = "border-b border-black outline-none focus:border-blue-600 w-full";

    return (
        <div className="bg-white rounded-xl shadow-2xl border border-gray-300 p-2 md:p-8 mb-8 landscape:p-8 print:shadow-none print:border-none">
            <h1 className="text-center text-2xl font-serif font-bold uppercase mb-1 drop-shadow-sm text-gray-900">Proforma For Annual Appraisal</h1>
            <p className="text-center italic text-gray-600 mb-6 font-medium">(To be filled by the individual)</p>

            <div className="flex gap-2 items-center mb-4">
                <label className={labelClass}>Department (Mention Subject Name for H&S):</label>
                <input type="text" className="border-b-2 border-black flex-grow outline-none px-2 font-bold text-blue-900" />
            </div>

            {/* Table 1: Personal Details */}
            <div className="overflow-x-auto mb-6 shadow-sm">
                <table className="w-full border-collapse border-2 border-black min-w-[1000px]">
                    <thead>
                        <tr>
                            <th className={headerClass} rowSpan={2}>Name & Designation</th>
                            <th className={headerClass} rowSpan={2}>DOJ</th>
                            <th className={headerClass} rowSpan={2}>Starting Salary</th>
                            <th className={headerClass} colSpan={2}>Last Increment</th>
                            <th className={headerClass} rowSpan={2}>Present Salary</th>
                            <th className={headerClass} rowSpan={2}>Effective date<br />of Increment</th>
                            <th className={headerClass} rowSpan={2}>Status of<br />Ratification<br />(Yes / No)</th>
                            <th className={headerClass} rowSpan={2}>On PF<br />(Yes / No)</th>
                            <th className={headerClass} rowSpan={2}>Campus<br />Accommodation<br />(Yes / No)</th>
                            <th className={headerClass} rowSpan={2}>Paying for<br />Transport<br />(Yes / No)</th>
                        </tr>
                        <tr>
                            <th className={headerClass}>Date of<br />Increment</th>
                            <th className={headerClass}>Amount of<br />Increment</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className={cellClass}><input type="text" className={inputClass} /></td>
                            <td className={cellClass}><input type="date" className={inputClass} /></td>
                            <td className={cellClass}><input type="text" className={inputClass} /></td>
                            <td className={cellClass}><input type="date" className={inputClass} /></td>
                            <td className={cellClass}><input type="text" className={inputClass} /></td>
                            <td className={cellClass}><input type="text" className={inputClass} /></td>
                            <td className={cellClass}><input type="date" className={inputClass} /></td>
                            <td className={cellClass}><input type="text" className={inputClass} /></td>
                            <td className={cellClass}><input type="text" className={inputClass} /></td>
                            <td className={cellClass}><input type="text" className={inputClass} /></td>
                            <td className={cellClass}><input type="text" className={inputClass} /></td>
                        </tr>
                        <tr>
                            <td className={cellClass}><input type="text" className={inputClass} /></td>
                            <td className={cellClass}><input type="date" className={inputClass} /></td>
                            <td className={cellClass}><input type="text" className={inputClass} /></td>
                            <td className={cellClass}><input type="date" className={inputClass} /></td>
                            <td className={cellClass}><input type="text" className={inputClass} /></td>
                            <td className={cellClass}><input type="text" className={inputClass} /></td>
                            <td className={cellClass}><input type="date" className={inputClass} /></td>
                            <td className={cellClass}><input type="text" className={inputClass} /></td>
                            <td className={cellClass}><input type="text" className={inputClass} /></td>
                            <td className={cellClass}><input type="text" className={inputClass} /></td>
                            <td className={cellClass}><input type="text" className={inputClass} /></td>
                        </tr>
                    </tbody>
                </table>
            </div>

            {/* Table 2: Education */}
            <h3 className="font-bold text-center border-x-2 border-t-2 border-black bg-gray-50 py-1 text-sm">Education <span className="font-normal italic">(Note: Mention Year of Passing/Awarded and Percentage)</span></h3>
            <div className="overflow-x-auto mb-6 shadow-sm">
                <table className="w-full border-collapse border-2 border-black min-w-[1000px]">
                    <tbody>
                        <tr>
                            <td className="border-r-2 border-black p-2 w-1/6 font-bold text-xs">SSC:</td>
                            <td className="border-r-2 border-black p-0 w-1/6"><textarea className="w-full h-24 p-2 outline-none resize-none text-sm" placeholder="Details..."></textarea></td>

                            <td className="border-r-2 border-black p-2 w-1/6 font-bold text-xs">Inter / Diploma/ITI:</td>
                            <td className="border-r-2 border-black p-0 w-1/6"><textarea className="w-full h-24 p-2 outline-none resize-none text-sm" placeholder="Details..."></textarea></td>

                            <td className="border-r-2 border-black p-2 w-1/6 font-bold text-xs">UG (Specify):</td>
                            <td className="border-r-0 border-black p-0 w-1/6"><textarea className="w-full h-24 p-2 outline-none resize-none text-sm" placeholder="Details..."></textarea></td>
                        </tr>
                        <tr className="border-t border-black">
                            <td className="border-r-2 border-black p-2 font-bold text-xs">PG (Specify):</td>
                            <td className="border-r-2 border-black p-0"><textarea className="w-full h-24 p-2 outline-none resize-none text-sm" placeholder="Details..."></textarea></td>

                            <td className="border-r-2 border-black p-2 font-bold text-xs">Ph.D (Specify):</td>
                            <td className="border-r-2 border-black p-0"><textarea className="w-full h-24 p-2 outline-none resize-none text-sm" placeholder="Details..."></textarea></td>

                            <td className="border-r-2 border-black p-2 font-bold text-xs">Others (Specify):</td>
                            <td className="border-r-0 border-black p-0"><textarea className="w-full h-24 p-2 outline-none resize-none text-sm" placeholder="Details..."></textarea></td>
                        </tr>
                    </tbody>
                </table>
                {/* Experience Row attached to table */}
                <div className="border-x-2 border-b-2 border-black flex">
                    <div className="w-3/4 border-r-2 border-black"></div>
                    <div className="w-1/4">
                        <div className="border-b border-black text-center font-bold text-sm bg-gray-50">Experience</div>
                        <div className="flex h-12">
                            <div className="w-1/2 border-r border-black p-1 text-xs">At GNI:<br /><input className="w-full outline-none font-bold" /></div>
                            <div className="w-1/2 p-1 text-xs">Total:<br /><input className="w-full outline-none font-bold" /></div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Table 3: Leaves */}
            <div className="overflow-x-auto mb-8 shadow-sm">
                <table className="w-full border-collapse border-b-2 border-x-2 border-t-2 border-black min-w-[1000px]">
                    <thead>
                        <tr>
                            <th className="border-r-2 border-b border-black p-2 text-xs w-1/4 bg-gray-50">Leaves availed during appraisal period<br /><span className="italic font-normal">(To be filled by Dealing Clerk)</span></th>
                            <th className="border-r-2 border-b border-black p-2 text-xs w-2/4 bg-gray-50">List of certificates submitted</th>
                            <th className="border-b border-black p-2 text-xs w-1/4 bg-gray-50">Verified By<br />(HR)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="border-r-2 border-black p-2 align-top">
                                <div className="flex gap-2 mb-2"><span className="font-bold text-xs w-8">CL:</span><input className="border-b border-black w-full outline-none" /></div>
                                <div className="flex gap-2 mb-2"><span className="font-bold text-xs w-8">EL:</span><input className="border-b border-black w-full outline-none" /></div>
                                <div className="flex gap-2"><span className="font-bold text-xs w-8">LOP:</span><input className="border-b border-black w-full outline-none" placeholder="(With Reason)" /></div>
                            </td>
                            <td className="border-r-2 border-black p-0 align-top">
                                <textarea className="w-full h-32 p-2 outline-none resize-none" placeholder="List certificates..."></textarea>
                            </td>
                            <td className="p-2 align-bottom">
                                <div className="flex items-end gap-1 text-sm font-bold">
                                    Overall Score: <input className="border-b border-black w-12 text-center outline-none" /> /10
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            {/* Footer Content */}
            <div className="space-y-6 text-sm">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="flex gap-2 items-end"><span className="font-bold">1. Results:</span><input className={borderBClass} /></div>
                    <div className="flex gap-2 items-end"><span className="font-bold">2. Research:</span><input className={borderBClass} /></div>
                    <div className="flex gap-2 items-end"><span className="font-bold">3. Funding:</span><input className={borderBClass} /></div>
                </div>

                <div className="flex flex-col gap-2">
                    <label className="font-bold">Statement on strengths and significant achievements to claim good increment:</label>
                    <textarea className="w-full border-b border-black outline-none resize-none focus:border-blue-600 focus:bg-blue-50 transition-colors" rows={3}></textarea>
                </div>

                <p className="text-justify my-6 italic text-gray-700 border-l-4 border-blue-200 pl-4 py-2 bg-blue-50/30">
                    I hereby declare that the information given above is true and correct to the best of my knowledge. If the information / figures provided is incorrect, increment will be denied.
                </p>

                <div className="flex justify-end mt-12 mb-16">
                    <div className="w-64 border-t-2 border-dashed border-black pt-2 text-center font-bold text-sm">Signature of the individual</div>
                </div>

                <div className="flex justify-between items-end mt-16 mb-24">
                    <div className="w-2/3 border-t-2 border-black pt-2 font-bold text-xs">Recommendations of Associate Director (GNITC) / Joint Director(GNITC) / Principal (GNIT) / Section Head:</div>
                </div>

                <div className="flex justify-between items-end mt-16 mb-24">
                    <div className="w-2/3 border-t-2 border-black pt-2 font-bold text-xs">Recommendations of Director / Principal (GNHMCH) / GM (Admin):</div>
                </div>

                <div className="flex justify-between items-end mt-16 pb-8">
                    <div className="font-bold text-sm">Approval of Managing Director</div>
                    <div className="font-bold text-sm">Approval of Vice-Chairman</div>
                </div>
            </div>
        </div>
    );
};
