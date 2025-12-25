import { useState, useCallback } from 'react';
import type { Responsibility } from '../types/index';

export const useResponsibilities = (sectionMaxPoints: number = 10) => {
    const [data, setData] = useState<Responsibility[]>([]);
    const [errors, setErrors] = useState<Record<string, string[]>>({});

    const addRow = useCallback(() => {
        setData((prev) => [
            ...prev,
            {
                id: self.crypto.randomUUID(),
                year: '',
                semester: '',
                activity: '',
                criteria: '',
                creditPointsFaculty: 0,
                documentIndex: '',
                creditPointsAuthority: undefined,
            },
        ]);
    }, []);

    const updateRow = useCallback((id: string, field: keyof Responsibility, value: any) => {
        // Validation: Prevent negative numbers for credit points
        if (field === 'creditPointsFaculty') {
            const numVal = Number(value);
            if (numVal < 0) return;
        }

        setData((prev) =>
            prev.map((item) => (item.id === id ? { ...item, [field]: value } : item))
        );

        // Clear error for this field if it exists
        setErrors((prev) => {
            if (!prev[id]) return prev;
            const rowErrors = prev[id].filter(e => !e.includes(field as string));
            const newErrors = { ...prev };
            if (rowErrors.length === 0) {
                delete newErrors[id];
            } else {
                newErrors[id] = rowErrors;
            }
            return newErrors;
        });
    }, []);

    const removeRow = useCallback((id: string) => {
        setData((prev) => prev.filter((item) => item.id !== id));
        setErrors((prev) => {
            const newErrors = { ...prev };
            delete newErrors[id];
            return newErrors;
        });
    }, []);

    const validate = useCallback(() => {
        const newErrors: Record<string, string[]> = {};
        let isValid = true;
        const yearRegex = /^\d{4}-\d{2}$/; // e.g., 2023-24

        // 1. Check if table is empty
        if (data.length === 0) {
            setErrors({ 'TABLE_ERROR': ['At least one activity is required.'] });
            return false;
        }

        data.forEach((row) => {
            const rowErrors: string[] = [];

            if (!row.year.trim()) rowErrors.push('Year is required');
            else if (!yearRegex.test(row.year.trim())) rowErrors.push('Year format: YYYY-YY');

            if (!row.semester) rowErrors.push('Semester is required');
            if (!row.activity.trim()) rowErrors.push('Activity is required');
            if (!row.criteria.trim()) rowErrors.push('Criteria is required');

            // Allow 0 points, but it must be a number
            if (row.creditPointsFaculty === undefined || row.creditPointsFaculty === null) {
                rowErrors.push('Points required');
            }

            if (rowErrors.length > 0) {
                newErrors[row.id] = rowErrors;
                isValid = false;
            }
        });

        setErrors(newErrors);
        return isValid;
    }, [data]);

    const getTotalPoints = useCallback(() => {
        return data.reduce((sum, item) => sum + (Number(item.creditPointsFaculty) || 0), 0);
    }, [data]);

    const getAppraisedPoints = useCallback(() => {
        const total = getTotalPoints();
        return Math.min(total, sectionMaxPoints);
    }, [getTotalPoints, sectionMaxPoints]);

    return { data, errors, addRow, updateRow, removeRow, validate, getTotalPoints, getAppraisedPoints };
};
