import styled from "styled-components";

export const LayoutHeader = styled.header`
  ${({ theme }) => theme.utils.container}

  display: grid;
  padding-top: 1.5rem;
  grid-template-columns: 35% auto;
  grid-template-rows: auto;

  h1 {
    margin: 0;
  }
`;

export const LayoutFork = styled.a`
  position: fixed;
  top: 0;
  right: 0;
  border: 0;
  z-index: 10;
`;
