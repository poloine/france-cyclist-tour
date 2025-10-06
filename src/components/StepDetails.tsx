import React from "react";
import styled from "styled-components";
import type {StepData} from "../interface/StepData.ts";

interface StepDetailsProps {
    step: StepData | null;
    onClose: () => void;
}

const Sidebar = styled.aside<{ $visible: boolean }>`
  top: 0;
  right: 0;
  width: 350px;
  background: white;
  box-shadow: -2px 0 8px rgba(0, 0, 0, 0.1);
  transform: translateX(${({ $visible }) => ($visible ? "0" : "100%")});
  transition: transform 0.3s ease;
  padding: 2rem;
  z-index: 1000;
  display: flex;
  flex-direction: column;
`;

const CloseButton = styled.button`
    align-self: flex-start;
    background: rgba(255, 0, 0, 0.08);
    border: none;
    font-size: 1.5rem;
    color: #555;
    cursor: pointer;
    padding: 0.5rem 1rem;
    margin-bottom: 1.5rem;
    border-radius: 3em;
    &:hover {
        color: #000;
    }
`;

const Title = styled.h2`
  font-size: 1.4rem;
  margin-bottom: 1rem;
  color: #1e3a8a;
`;

const Info = styled.p`
  margin: 0.5rem 0;
  color: #374151;
  font-size: 1rem;
`;

const StepDetails: React.FC<StepDetailsProps> = ({ step, onClose }) => {
    if (!step) return null;

    const dateObj = new Date(step.date);
    const formattedDate = dateObj.toLocaleDateString("fr-FR", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
    });

    return (
        <Sidebar $visible={!!step}>
            <CloseButton onClick={onClose}>×</CloseButton>
            <Title>Détails de l’étape</Title>
            <Info>
                <strong>Date :</strong> {formattedDate}
            </Info>
            <Info>
                <strong>Départ :</strong> {step.departure}
            </Info>
            <Info>
                <strong>Arrivée :</strong> {step.arrival}
            </Info>
            <Info>
                <strong>Distance :</strong> {step.distanceKm} km
            </Info>
        </Sidebar>
    );
};

export default StepDetails;
