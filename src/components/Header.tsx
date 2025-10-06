import React from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: white;
  padding: 1rem 2rem;
  border-bottom: 1px solid #ddd;
`;

const Title = styled.h1`
  font-size: 1.2rem;
  color: #333;
`;

const Nav = styled.nav`
  display: flex;
  gap: 1.5rem;
`;

const StyledLink = styled(Link)<{ $active?: boolean }>`
  text-decoration: none;
  color: ${({ $active }) => ($active ? "#5a5ad1" : "#555")};
  font-weight: ${({ $active }) => ($active ? "600" : "400")};

  &:hover {
    color: #5a5ad1;
  }
`;

const Header: React.FC = () => {
    const location = useLocation();

    return (
        <HeaderContainer>
            <Title>Tour de France</Title>
            <Nav>
                <StyledLink to="/" $active={location.pathname === "/"}>Courses</StyledLink>
                <StyledLink to="/cyclists" $active={location.pathname === "/cyclists"}>Cyclistes</StyledLink>
            </Nav>
        </HeaderContainer>
    );
};

export default Header;
