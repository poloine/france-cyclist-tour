import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { cyclists } from "../assets/datas";
import type { CyclistData } from "../interface/CyclistData";

const PageContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const BackButton = styled.button`
  background-color: #2563eb;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  border: none;
  cursor: pointer;
  font-weight: 500;
  &:hover {
    background-color: #1d4ed8;
  }
`;

const Title = styled.h1`
  font-size: 2rem;
  color: #1a1a1a;
`;

const Info = styled.div`
  background-color: #f9fafb;
  padding: 1rem 1.5rem;
  border-radius: 8px;
`;

const ResultsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const ResultCard = styled.div`
    background-color: #e0f2fe;
    padding: 0.75rem 1rem;
    border-radius: 6px;
`;

const CyclistDetails: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();

    const cyclist: CyclistData | undefined = cyclists.find(
        (c) => c.id === Number(id)
    );

    if (!cyclist) {
        return <p>Cycliste introuvable.</p>;
    }

    return (
        <PageContainer>
            <Header>
                <Title>{cyclist.name}</Title>
                <BackButton onClick={() => navigate(-1)}>← Retour</BackButton>
            </Header>

            <Info>
                <p><strong>Nationalité :</strong> {cyclist.nationality}</p>
                <p><strong>Âge :</strong> {cyclist.age} ans</p>
                <p><strong>Classement :</strong> #{cyclist.ranking}</p>
                <p><strong>Meilleur temps :</strong> {cyclist.bestTime}</p>
            </Info>

            <h2>Résultats récents</h2>
            <ResultsList>
                {cyclist.results.map((res, i) => (
                    <ResultCard key={i}>
                        <strong>
                            {res.departure} → {res.arrival}
                        </strong>{" "}
                        ({res.date}) — {res.distanceKm} km en {res.time}
                    </ResultCard>
                ))}
            </ResultsList>
        </PageContainer>
    );
};

export default CyclistDetails;
