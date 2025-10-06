import React, { useState } from "react";
import styled from "styled-components";
import ListSteps from "../components/ListSteps";
import type {StepData} from "../interface/StepData.ts";
import trips from "../assets/datas.ts";
import StepDetails from "../components/StepDetails.tsx";

const PageContainer = styled.div`
    margin: 0 auto;
    display: flex;
    justify-content: center;
    gap: 2rem;
`;

const ListContainer = styled.div`
    flex: 1;
    max-width: 1100px;
`;

const Title = styled.h1`
    font-size: 2rem;
    color: #1a1a1a;
    margin-bottom: 1.5rem;
`;

const ToggleContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 0.6rem;
    margin-bottom: 1.5rem;
`;

const ToggleLabel = styled.label`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 1rem;
    cursor: pointer;
`;

const ToggleInput = styled.input`
  appearance: none;
  width: 38px;
  height: 20px;
  border-radius: 10px;
  background: #ccc;
  position: relative;
  transition: background 0.3s ease;
  cursor: pointer;

  &::before {
    content: "";
    position: absolute;
    top: 2px;
    left: 2px;
    width: 16px;
    height: 16px;
    background: white;
    border-radius: 50%;
    transition: transform 0.3s ease;
  }

  &:checked {
    background: #22c55e;
  }

  &:checked::before {
    transform: translateX(18px);
  }
`;

const isFutureDate = (dateStr: string): boolean => {
    const today = new Date();
    const date = new Date(dateStr);
    return date >= today;
};

const Courses: React.FC = () => {
    const [showFutureOnly, setShowFutureOnly] = useState(false);
    const [selectedStep, setSelectedStep] = useState<StepData | null>(null);

    const filteredTrips = (showFutureOnly
        ? trips.filter((trip) => isFutureDate(trip.date))
        : trips).sort((a, b) => a.date.localeCompare(b.date));

    const handleSelectStep = (step: StepData) => {
        setSelectedStep(step);
    };

    const handleCloseDetails = () => {
        setSelectedStep(null);
    };

    return (
        <PageContainer>
            <ListContainer>
                <Title>Les étapes</Title>

                <ToggleContainer>
                    <ToggleLabel>
                        <ToggleInput
                            type="checkbox"
                            checked={showFutureOnly}
                            onChange={() => setShowFutureOnly(!showFutureOnly)}
                        />
                        Afficher uniquement les dates à venir
                    </ToggleLabel>
                </ToggleContainer>

                <ListSteps steps={filteredTrips} selectedStep={selectedStep} onSelectStep={handleSelectStep} />
            </ListContainer>

            <StepDetails step={selectedStep} onClose={handleCloseDetails} />
        </PageContainer>
    );
};

export default Courses;