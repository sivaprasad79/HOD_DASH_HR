import { useState } from 'react';

export const useFormValidation = () => {
    const [errors, setErrors] = useState<Record<string, string>>({});

    const validateStep = (step: number): boolean => {
        const newErrors: Record<string, string> = {};
        let isValid = true;

        // Note: In a real app with global state context, we would access the data here.
        // Since step components hold their own state locally, we might need to verify logic differently 
        // OR lifting state up would be ideal.

        // For this demo refactor, we are mostly adding the "Security" layer as the main request.
        // However, we can simulate validation failures for empty sections if we had the data.

        // Determination Logic Example:
        // if (step === 9) { // Proforma
        //     if (!signature) isValid = false;
        // }

        setErrors(newErrors);
        return isValid;
    };

    return { validateStep, errors };
};
