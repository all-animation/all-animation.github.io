import styled from "styled-components";

export const AnimationsWrapper = styled.section`
  ${({ theme }) => theme.utils.container};

  display: grid;
  grid-template-columns: 1fr 300px;
  grid-template-rows: auto;
  gap: 4rem;
  padding-top: 4rem;
  padding-bottom: 5rem;

  ${({ theme }) => theme.utils.media.tablet`
    grid-template-columns: 1fr;
  `}
`;

export const AnimationsFigure = styled.div`
  .a-perspective {
    position: fixed;
    top: 200px;
  }
`;

export const AnimationsButtonsContainer = styled.div`
  h3 {
    margin-top: 2.5rem;
    margin-bottom: 1rem;
    color: #fff;
    font-family: ${({ theme }) => theme.fonts.display};
    padding-bottom: 0.75rem;
    border-bottom: 1px solid rgba(255, 255, 255, 0.06);

    &:first-child {
      margin-top: 0;
    }
  }
`;
