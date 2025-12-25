import { useState, useCallback } from 'react';
import type { Responsibility } from '../../types/index';

const INITIAL_CATEGORIES = [
    { id: '1', category: 'Research Publication SCI', limitCount: null, marksPerUnit: 4 },
    { id: '2', category: 'Research Publication SCI-Extended', limitCount: null, marksPerUnit: 3 },
    { id: '3', category: 'Research Publication Scopus', limitCount: null, marksPerUnit: 2 },
    { id: '4', category: 'Research Publication Scopus Indexed / WOS', limitCount: null, marksPerUnit: 1.5 },
    { id: '5', category: 'Research Publication (Other)', limitCount: null, marksPerUnit: 1 },
    { id: '6', category: 'Patent', limitCount: 2, marksPerUnit: 5 },
    { id: '7', category: 'Funded Project', limitCount: null, marksPerUnit: 2 }, // Range 2-8 handled as manual input override or simple avg? Using base 2 for now.
    { id: '8', category: 'MOOCs Certification', limitCount: 1, marksPerUnit: 5 },
    { id: '9', category: 'Participation in FDP/Workshop/Conference', limitCount: 2, marksPerUnit: 1 }, // Range 1-2
    { id: '10', category: 'Book', limitCount: 1, marksPerUnit: 5 }, // Range 5-8
    { id: '11', category: 'Books Chapter / Editing', limitCount: 1, marksPerUnit: 2 }, // Range 2-5
];

export const useResearchSummary = () => {
    // Initialize with fixed rows
    const [data, setData] = useState<Responsibility[]>(INITIAL_CATEGORIES.map(c => ({
        ...c,
        count: 0,
        creditPointsFaculty: 0,
        // unused required fields
        year: '', semester: '', activity: '', criteria: '', documentIndex: ''
    } as any)));

    const updateCount = useCallback((id: string, count: number) => {
        setData(prev => prev.map(item => {
            if (item.id !== id) return item;

            let validCount = count;
            // Apply limit if exists (Though rubric says Limit Count (Max), usually means points are capped or count is capped. 
            // Assuming Count is capped for calculation)
            if (item.limitCount && count > item.limitCount) {
                // We allow user to enter actual count, but maybe cap points? 
                // Let's just calculate points purely on count * marks for now, or assume limit is for count.
                // "Limit Count (Max.)" column in image implies max occurrences counted.
            }

            // Simple calculation: Count * Marks
            // For range items (e.g. 2-8), we might need an extra input for "Marks Per Unit" or just default.
            // For simplicity, we multiply count * base marks. 
            // User can manually override points if needed? 
            // Let's make "Credit Points" editable/calculated.

            const calculatedPoints = count * (item.marksPerUnit || 0);

            return { ...item, count, creditPointsFaculty: calculatedPoints };
        }));
    }, []);

    const getTotalPoints = useCallback(() => {
        return data.reduce((sum, item) => sum + (Number(item.creditPointsFaculty) || 0), 0);
    }, [data]);

    return { data, updateCount, getTotalPoints };
};
