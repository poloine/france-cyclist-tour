import React from "react";
import Step from "./Step";
import type {StepData} from "../interface/StepData.ts";

interface ListStepsProps {
    steps: StepData[];
    selectedStep?: StepData | null;
    onSelectStep?: (step: StepData) => void;
}

const isFutureDate = (dateStr: string): boolean => {
    const today = new Date();
    const date = new Date(dateStr);
    return date >= today;
};

const ListSteps: React.FC<ListStepsProps> = ({ steps, selectedStep, onSelectStep }) => {
    return (
        <>
            {steps.map((step, index) => {
                const future = isFutureDate(step.date);
                const isSelected =
                    selectedStep &&
                    step.date === selectedStep.date &&
                    step.departure === selectedStep.departure &&
                    step.arrival === selectedStep.arrival;
                return (
                    <Step
                        key={index}
                        step={step}
                        index={index}
                        isPast={!future}
                        isSelected={!!isSelected}
                        onClick={onSelectStep}
                    />
                );
            })}
        </>
    );
};

export default ListSteps;
