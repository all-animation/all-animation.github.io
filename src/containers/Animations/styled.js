import styled from "styled-components";

export const AnimationsWrapper = styled.section`
  ${({ theme }) => theme.utils.container};

  display: grid;
  grid-template-columns: 70% auto;
  grid-template-rows: auto;
  padding-top: 5rem;
  padding-bottom: 5rem;
`;

export const AnimationsFigure = styled.div`
  .a-perspective {
    position: fixed;
    top: 200px;
  }
`;

export const AnimationsButtonsContainer = styled.div`
  h3 {
    margin-top: 1rem;
  }
`;
