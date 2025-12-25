import React, { useState, useRef } from 'react';
import { ResponsibilitiesTable } from './AppraisalComponents/ResponsibilitiesTable/ResponsibilitiesTable';
import { DepartmentResponsibilities } from './AppraisalComponents/SectionB/DepartmentResponsibilities';
import { TeachingProcess } from './AppraisalComponents/SectionC/TeachingProcess';
import { StudentFeedback } from './AppraisalComponents/SectionD/StudentFeedback';
import { AnnualConfidentialReport } from './AppraisalComponents/SectionE/AnnualConfidentialReport';
import { ResultsAnalysis } from './AppraisalComponents/SectionF/ResultsAnalysis';
import { ResearchSummary } from './AppraisalComponents/SectionG/ResearchSummary';
import { ContributionSociety } from './AppraisalComponents/SectionH/ContributionSociety';
import { OverallPerformance } from './AppraisalComponents/SectionI/OverallPerformance';
import { ProformaAppraisal } from './AppraisalComponents/SectionJ/ProformaAppraisal';
import { ProfileHeader, type ProfileHeaderRef } from './AppraisalComponents/ProfileHeader';
import { StepLayout } from './AppraisalComponents/StepLayout';
import { Check, Sparkles, Star } from 'lucide-react';

const STEPS = [
    "Institute Level",
    "Dept. Level",
    "Teaching Process",
    "Student Feedback",
    "ACR",
    "Results",
    "R&D Summary",
    "Society Contrib.",
    "Overall Perf.",
    "Proforma Appraisal"
];

const H1 = ({ className, children }: { className?: string, children: React.ReactNode }) => <h1 className={className}>{children}</h1>;

const AppraisalForm = ({ teachingProcessData }: { teachingProcessData?: any[] }) => {
    const [currentStep, setCurrentStep] = useState(0);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const currentSectionRef = useRef<{ validate: () => boolean } | null>(null);
    const profileHeaderRef = useRef<ProfileHeaderRef>(null);

    const handleNext = () => {
        // 1. Validate Profile Header first (Must be valid to proceed anywhere)
        if (profileHeaderRef.current) {
            const isHeaderValid = profileHeaderRef.current.validate();
            if (!isHeaderValid) {
                alert("Please fill in all required fields in the Profile Header (top section).");
                window.scrollTo(0, 0);
                return;
            }
        }

        // 2. Validate current step section
        if (currentSectionRef.current && currentSectionRef.current.validate) {
            const isValid = currentSectionRef.current.validate();
            if (!isValid) {
                // Validation error is now shown within the component, so general alert or optional specific alert
                alert("Please correct the errors in the table below (at least one activity required).");
                return;
            }
        }

        if (currentStep < STEPS.length - 1) {
            setCurrentStep(prev => prev + 1);
            window.scrollTo(0, 0);
        } else {
            setIsSubmitted(true);
            window.scrollTo(0, 0);
        }
    };

    const handlePrevious = () => {
        if (currentStep > 0) {
            setCurrentStep(prev => prev - 1);
            window.scrollTo(0, 0);
        }
    };

    if (isSubmitted) {
        return (
            <div className="flex items-center justify-center p-4 relative overflow-hidden h-full">

                <div className="bg-white/80 backdrop-blur-lg p-12 md:p-16 rounded-3xl shadow-2xl text-center max-w-2xl w-full border border-white/50 relative z-10 transform transition-all duration-500 ease-out animate-fade-in-up">
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <div className="w-24 h-24 bg-gradient-to-tr from-green-400 to-green-600 rounded-full flex items-center justify-center shadow-lg ring-4 ring-white">
                            <Check size={48} className="text-white stroke-[3]" />
                        </div>
                    </div>

                    <div className="mt-8 space-y-4">
                        <div className="flex items-center justify-center gap-2 mb-2">
                            <H1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                                Submitted Successfully!
                            </H1>
                        </div>

                        <p className="text-gray-600 text-lg md:text-xl font-light leading-relaxed">
                            Your <span className="font-semibold text-blue-800">Annual Appraisal Form</span> has been recorded.
                        </p>
                    </div>

                    <div className="mt-10 flex flex-col md:flex-row gap-4 justify-center">
                        <button
                            onClick={() => { setIsSubmitted(false); setCurrentStep(0); }}
                            className="group relative px-8 py-3 bg-blue-600 text-white font-bold rounded-xl shadow-lg hover:bg-blue-700 transition-all hover:scale-105 overflow-hidden"
                        >
                            Start New Application
                        </button>
                    </div>
                </div>
            </div>
        )
    }

    const renderCurrentStep = () => {
        switch (currentStep) {
            case 0: return <ResponsibilitiesTable ref={currentSectionRef} />;
            case 1: return <DepartmentResponsibilities ref={currentSectionRef} />;
            case 2: return <TeachingProcess importedData={teachingProcessData} />;
            case 3: return <StudentFeedback />;
            case 4: return <AnnualConfidentialReport />;
            case 5: return <ResultsAnalysis />;
            case 6: return <ResearchSummary />;
            case 7: return <ContributionSociety ref={currentSectionRef} />;
            case 8: return <OverallPerformance />;
            case 9: return <ProformaAppraisal />;
            default: return null;
        }
    };

    return (
        <div className="bg-gray-50 py-8 px-4 sm:px-6 lg:px-8 font-sans rounded-xl">
            <div className="max-w-7xl mx-auto">
                <ProfileHeader ref={profileHeaderRef} />

                <StepLayout
                    currentStep={currentStep}
                    totalSteps={STEPS.length}
                    steps={STEPS}
                    title={STEPS[currentStep]}
                    onNext={handleNext}
                    onPrevious={handlePrevious}
                >
                    <div className="transition-all duration-300 ease-in-out">
                        {renderCurrentStep()}
                    </div>
                </StepLayout>

                <div className="mt-8 text-center text-gray-400 text-sm">
                    Guru Nanak Institutions • HR Portal • 2024-25
                </div>
            </div >
        </div >
    );
}

export default AppraisalForm;
