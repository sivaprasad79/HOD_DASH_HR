import { useState, useCallback } from 'react';
import type { Responsibility } from '../../types/index';

export const useResultsAnalysis = () => {
    const [data, setData] = useState<Responsibility[]>([]);

    const addRow = useCallback(() => {
        setData((prev) => [
            ...prev,
            {
                id: self.crypto.randomUUID(),
                year: '',
                semester: '',
                subjectCode: '',
                subjectName: '',
                studentsRegistered: 0,
                studentsPassed: 0,
                passPercentage: 0,
                creditPointsFaculty: 0, // Not used directly in this table logic but kept for consistency
                documentIndex: '',
            },
        ]);
    }, []);

    const updateRow = useCallback((id: string, field: keyof Responsibility, value: any) => {
        setData((prev) =>
            prev.map((item) => {
                if (item.id !== id) return item;

                const updatedItem = { ...item, [field]: value };

                // Auto-calculate percentage
                if (field === 'studentsRegistered' || field === 'studentsPassed') {
                    const reg = Number(updatedItem.studentsRegistered) || 0;
                    const passed = Number(updatedItem.studentsPassed) || 0;
                    updatedItem.passPercentage = reg > 0 ? Number(((passed / reg) * 100).toFixed(2)) : 0;
                }

                return updatedItem;
            })
        );
    }, []);

    const removeRow = useCallback((id: string) => {
        setData((prev) => prev.filter((item) => item.id !== id));
    }, []);

    return { data, addRow, updateRow, removeRow };
};
