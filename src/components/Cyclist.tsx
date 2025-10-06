import type {CyclistData} from "../interface/CyclistData.ts";
import styled from "styled-components";
import React from "react";
import {useNavigate} from "react-router-dom";

interface CyclistProps {
    cyclist: CyclistData;
}

const CyclistCard = styled.div<{ $ranking: number }>`
    border-color: #e0f2fe;
    border-radius: 8px;
    background-color: ${({ $ranking }) => {
        switch ($ranking) {
            case 1:
                return "#ffd700"; // Gold
            case 2:
                return "#c0c0c0"; // Silver
            case 3:
                return "#cd7f32"; // Bronze
            default:
                return "#e0f2fe"; // Default color
        }
    }};
    width: 280px;
    padding: 1rem 1.5rem;
    transition: border-color 0.3s ease, transform 0.2s ease;
    cursor: pointer;

    &:hover {
        transform: translateY(-2px);
    }
`;

const Cyclist: React.FC<CyclistProps> = ({cyclist}) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/cyclists/${cyclist.id}`);
    };

    return (
        <CyclistCard $ranking={cyclist.ranking} onClick={handleClick}>
            <h3>{cyclist.name} - {cyclist.ranking}</h3>
        </CyclistCard>
    );
}

export default Cyclist;