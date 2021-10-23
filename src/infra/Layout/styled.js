import styled from "styled-components";

export const LayoutHeader = styled.header`
  ${({ theme }) => theme.utils.container}

  display: grid;
  padding: 1.5rem 2rem;
  grid-template-columns: 35% auto;
  grid-template-rows: auto;

  > a {
    text-decoration: none;
  }

  h1 {
    margin: 0;
    margin-right: 1rem;
  }

  ${({ theme }) => theme.utils.media.phone`
    grid-template-columns: auto;
    grid-row-gap: 2rem;
    text-align: center;
  `}
`;

export const LayoutFork = styled.a`
  position: fixed;
  top: 0;
  right: 0;
  border: 0;
  z-index: 10;
`;

export const LayoutFooter = styled.footer`
  ${({ theme }) => theme.utils.container};

  border-top: solid 1px ${({ theme }) => theme.colors.light};
  text-align: center;
  padding: 2rem 0;
`;
