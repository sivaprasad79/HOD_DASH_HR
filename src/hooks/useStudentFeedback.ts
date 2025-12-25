import { useState, useCallback } from 'react';
import type { Responsibility } from '../types/index';

export const useStudentFeedback = () => {
    const [data, setData] = useState<Responsibility[]>([]);

    const addRow = useCallback(() => {
        setData((prev) => [
            ...prev,
            {
                id: self.crypto.randomUUID(),
                year: '',
                semester: '',
                activity: '',
                criteria: '',
                subjectCode: '',
                subjectName: '',
                avgFeedback: 0,
                creditPointsFaculty: 0,
                documentIndex: '',
                creditPointsAuthority: undefined,
            },
        ]);
    }, []);

    const updateRow = useCallback((id: string, field: keyof Responsibility, value: any) => {
        setData((prev) =>
            prev.map((item) => (item.id === id ? { ...item, [field]: value } : item))
        );
    }, []);

    const removeRow = useCallback((id: string) => {
        setData((prev) => prev.filter((item) => item.id !== id));
    }, []);

    const getTotalPoints = useCallback(() => {
        return data.reduce((sum, item) => sum + (Number(item.creditPointsFaculty) || 0), 0);
    }, [data]);

    return { data, addRow, updateRow, removeRow, getTotalPoints };
};
