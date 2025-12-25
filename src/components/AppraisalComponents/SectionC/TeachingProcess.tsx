import React from 'react';
import { Plus } from 'lucide-react';
import { useTeachingProcess } from '../../../hooks/useTeachingProcess';
import { TeachingHeader } from './TeachingHeader';
import { TeachingRow } from './TeachingRow';
import { TableFooter } from '../ResponsibilitiesTable/TableFooter';

export const TeachingProcess: React.FC<{ importedData?: any[] }> = ({ importedData }) => {
    const { data, addRow, updateRow, removeRow, getTotalPoints, importData } = useTeachingProcess();

    React.useEffect(() => {
        if (importedData && importedData.length > 0) {
            // Map imported data to Responsibility objects
            const newData = importedData.map(row => ({
                id: self.crypto.randomUUID(),
                year: row['Year'] || row['year'] || '',
                semester: row['Semester'] || row['semester'] || '',
                activity: 'Teaching Process',
                criteria: '',
                subjectCode: row['Subject Code'] || row['subjectCode'] || '',
                subjectName: row['Subject Name'] || row['subjectName'] || '',
                scheduledClasses: Number(row['Scheduled Classes'] || row['scheduledClasses']) || 0,
                classesHeld: Number(row['Classes Held'] || row['classesHeld']) || 0,
                creditPointsFaculty: Number(row['Credit Points'] || row['creditPoints']) || 0,
                documentIndex: '',
                creditPointsAuthority: undefined
            }));

            importData(newData);
            // Optional: alert or notification that data was loaded
        }
    }, [importedData, importData]);

    return (
        <div className="bg-white rounded-xl shadow-lg border border-blue-100 overflow-hidden mb-8">
            <div className="p-6 border-b border-blue-100 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-blue-50/30">
                <div>
                    <h2 className="text-xl font-bold text-blue-900 uppercase tracking-tight">
                        C. Teaching Process (Points - 16) LMS Google Classroom
                    </h2>
                    <div className="text-sm mt-2 flex flex-col sm:flex-row gap-2 sm:items-center">
                        <span className="italic text-red-600 font-medium border border-red-200 bg-red-50 px-2 py-0.5 rounded">Note: Max. 8 Credit points for each semester</span>
                    </div>
                </div>
                <button onClick={addRow} className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-5 py-2.5 rounded-lg font-bold transition-all shadow-md hover:shadow-lg text-sm border-b-4 border-red-800 active:border-b-0 active:translate-y-1">
                    <Plus size={18} /> Add Subject
                </button>
            </div>
            <div className="overflow-x-auto">
                <table className="w-full border-collapse min-w-[1000px]">
                    <TeachingHeader />
                    <tbody>
                        {data.map((item) => <TeachingRow key={item.id} data={item} onUpdate={updateRow} onRemove={removeRow} />)}
                    </tbody>
                    <TableFooter totalPoints={getTotalPoints()} />
                </table>
            </div>
        </div>
    );
};
