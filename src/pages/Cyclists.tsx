import React from "react";
import styled from "styled-components";
import ListCyclists from "../components/ListCyclists.tsx";
import {cyclists} from "../assets/datas.ts";
import type {CyclistData} from "../interface/CyclistData.ts";

const PageContainer = styled.div`
    margin: 0 auto;
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 2rem;
`;

const Title = styled.h1`
    font-size: 2rem;
    color: #1a1a1a;
    margin-bottom: 1.5rem;
`;

const Cyclists: React.FC = () => {
    const sortedCyclists: CyclistData[] = cyclists.sort((a, b) => a.ranking - b.ranking);
    return (
        <PageContainer>
            <Title>Les cyclistes</Title>

            <ListCyclists cyclists={sortedCyclists} onSelectCyclist={() => "alert('ok')"}/>
        </PageContainer>
    );
};

export default Cyclists;
