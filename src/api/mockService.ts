import type { Responsibility } from '../types/index';

export const getResponsibilities = async (): Promise<Responsibility[]> => {
    // Simulate API delay
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([]);
        }, 500);
    });
};

export const saveResponsibilities = async (data: Responsibility[]): Promise<void> => {
    console.log('Saving data:', data);
    // Simulate API call
    return new Promise((resolve) => resolve());
};
