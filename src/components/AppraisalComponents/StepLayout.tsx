import React from 'react';
import { Stepper } from './Stepper';
import { ArrowRight, Save } from 'lucide-react';

interface StepLayoutProps {
    currentStep: number;
    totalSteps: number;
    steps: string[];
    title: string;
    onNext: () => void;
    onPrevious: () => void;
    children: React.ReactNode;
}

export const StepLayout: React.FC<StepLayoutProps> = ({
    currentStep,
    totalSteps,
    steps,
    title,
    onNext,
    onPrevious,
    children
}) => {
    const isLastStep = currentStep === totalSteps - 1;
    const isFirstStep = currentStep === 0;

    return (
        <div className="bg-white rounded-xl shadow-xl border border-blue-100 overflow-hidden flex flex-col min-h-[600px]">
            <div className="bg-white p-6 border-b border-gray-100 sticky top-0 z-10 shadow-sm">
                <Stepper currentStep={currentStep} steps={steps} />
            </div>

            <div className="flex-grow p-6 md:p-8 bg-gray-50/50">
                {children}
            </div>

            <div className="p-6 border-t border-gray-100 bg-white flex justify-between items-center sticky bottom-0 z-10 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)]">
                <button
                    onClick={onPrevious}
                    disabled={isFirstStep}
                    className={`px-6 py-2.5 rounded-lg font-bold text-gray-600 transition-colors
            ${isFirstStep ? 'opacity-0 cursor-default' : 'hover:bg-gray-100 hover:text-blue-900'}
          `}
                >
                    Back
                </button>

                <button
                    onClick={onNext}
                    className={`flex items-center gap-2 px-8 py-3 rounded-lg font-bold text-white shadow-lg transition-all transform active:scale-95
            ${isLastStep
                            ? 'bg-green-600 hover:bg-green-700 shadow-green-200'
                            : 'bg-blue-600 hover:bg-blue-700 shadow-blue-200'
                        }
          `}
                >
                    {isLastStep ? (
                        <>
                            <Save size={18} />
                            Submit Application
                        </>
                    ) : (
                        <>
                            Save & Next
                            <ArrowRight size={18} />
                        </>
                    )}
                </button>
            </div>
        </div>
    );
};
