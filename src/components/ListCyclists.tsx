import type {CyclistData} from "../interface/CyclistData.ts";
import Cyclist from "./Cyclist.tsx";
import React from "react";
import styled from "styled-components";

interface ListCyclistsProps {
    cyclists: CyclistData[];
    onSelectCyclist?: (cyclist: CyclistData) => void;
}

const ListContainer = styled.div`
    flex: 1;
    max-width: 1100px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 2em;
`;

const ListCyclists: React.FC<ListCyclistsProps> = ({cyclists, onSelectCyclist}) => {
    return (
        <ListContainer>
            {cyclists.map((cyclist, index) => (
                <Cyclist key={index} cyclist={cyclist} onClick={onSelectCyclist}/>
            ))}
        </ListContainer>
    );
}

export default ListCyclists;