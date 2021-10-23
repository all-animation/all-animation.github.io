import styled from "styled-components";

export const ContributeWrapper = styled.a`
  border: solid 1px ${({ theme }) => theme.colors.stone};
  padding: 26px 33px;
  display: flex;
  margin: 4rem 0;
  border-radius: 4px;
  text-decoration: none;

  svg {
    max-width: 78px;
    margin-right: 1.4rem;
  }
`;

export const ContributeContainer = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;

  h3 {
    margin-bottom: 0.4rem;
  }
`;
