import React from "react";
import styled from "styled-components";
import type {StepData} from "../interface/StepData.ts";


interface StepProps {
    step: StepData;
    index: number;
    isPast: boolean;
    onClick?: (step: StepData) => void;
}

const StageCard = styled.div<{ $isPast?: boolean }>`
  background-color: ${({ $isPast }) => ($isPast ? "#e5e7eb" : "#e0f2fe")};
  border-radius: 8px;
  padding: 1rem 1.5rem;
  margin-bottom: 1rem;
  transition: background-color 0.3s ease, transform 0.2s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-2px);
  }
`;

const StageTitle = styled.h3`
  margin: 0;
  color: #1e3a8a;
`;

const StageInfo = styled.p`
  margin: 0.25rem 0 0;
  color: #374151;
`;

const Step: React.FC<StepProps> = ({ step, index, isPast, onClick }) => {
    const dateObj = new Date(step.date);
    const formattedDate = dateObj.toLocaleDateString("fr-FR", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });

    return (
        <StageCard $isPast={isPast} onClick={() => onClick?.(step)}>
            <StageTitle>
                Étape n°{index + 1} : {step.departure}
            </StageTitle>
            <StageInfo>
                {formattedDate}
            </StageInfo>
        </StageCard>
    );
};

export default Step;
