import React from 'react';
import { Check } from 'lucide-react';

interface StepperProps {
    currentStep: number;
    steps: string[];
}

const EMOJIS = ["🏛️", "🏢", "🏫", "💬", "📝", "📊", "🔬", "🤝", "🏆", "📋"];

export const Stepper: React.FC<StepperProps> = ({ currentStep, steps }) => {
    return (
        <div className="w-full mb-8 px-4">
            <div className="relative flex items-center justify-between w-full">
                <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-full h-1 bg-gray-200 -z-10 rounded"></div>
                <div
                    className="absolute left-0 top-1/2 transform -translate-y-1/2 h-1 bg-blue-600 -z-10 rounded transition-all duration-700 ease-in-out"
                    style={{ width: `${(currentStep / (steps.length - 1)) * 100}%` }}
                ></div>

                {steps.map((step, index) => {
                    const isCompleted = index < currentStep;
                    const isCurrent = index === currentStep;
                    const emoji = EMOJIS[index] || "📍";

                    return (
                        <div key={index} className="flex flex-col items-center group relative">
                            <div
                                className={`flex items-center justify-center w-10 h-10 rounded-full border-2 transition-all duration-500 ease-spring
                                    ${isCompleted ? 'bg-green-500 border-green-500 text-white scale-110 shadow-lg shadow-green-200' : ''}
                                    ${isCurrent ? 'bg-white border-blue-600 scale-125 shadow-xl shadow-blue-200 z-10 animate-pulse-ring' : ''}
                                    ${!isCompleted && !isCurrent ? 'bg-white border-gray-300 grayscale opacity-70 hover:grayscale-0 hover:scale-110' : ''}
                                `}
                            >
                                {isCompleted ? (
                                    <Check size={20} strokeWidth={4} className="animate-scale-in" />
                                ) : (
                                    <span className={`text-lg leading-none select-none transition-transform duration-300 ${isCurrent ? 'animate-bounce-slight' : ''}`} role="img" aria-label={step}>
                                        {emoji}
                                    </span>
                                )}
                            </div>

                            {/* Label */}
                            <div className={`absolute top-12 w-24 text-center hidden md:block transition-all duration-500 ${isCurrent ? 'translate-y-1' : ''}`}>
                                <span
                                    className={`text-[10px] uppercase tracking-wider font-bold transition-colors duration-300 block 
                                    ${isCurrent ? 'text-blue-700 scale-110' : 'text-gray-400'}
                                    ${isCompleted ? 'text-green-600' : ''}
                                `}
                                >
                                    {step}
                                </span>
                            </div>
                        </div>
                    );
                })}
            </div>
            {/* Mobile-friendly step title */}
            <div className="text-center mt-8 md:hidden transition-all duration-300 animate-fade-in">
                <div className="text-3xl mb-2 animate-bounce">{EMOJIS[currentStep]}</div>
                <span className="font-extrabold text-blue-900 uppercase text-sm tracking-widest">{steps[currentStep]}</span>
                <span className="text-xs text-blue-400 block mt-1 font-medium">Step {currentStep + 1} of {steps.length}</span>
            </div>
        </div>
    );
};
