import React from "react";
import Step from "./Step";
import type {StepData} from "../interface/StepData.ts";

interface ListStepsProps {
    steps: StepData[];
    onSelectStep?: (step: StepData) => void;
}

const isFutureDate = (dateStr: string): boolean => {
    const today = new Date();
    const date = new Date(dateStr);
    return date >= today;
};

const ListSteps: React.FC<ListStepsProps> = ({ steps, onSelectStep }) => {
    return (
        <>
            {steps.map((step, index) => {
                const future = isFutureDate(step.date);
                return (
                    <Step
                        key={index}
                        step={step}
                        index={index}
                        isPast={!future}
                        onClick={onSelectStep}
                    />
                );
            })}
        </>
    );
};

export default ListSteps;
