import styled from "styled-components";
import Typography from "../../components/Typography";

export const HighlightWrapper = styled.section`
  position: relative;
  height: 100vh;
  display: flex;
  align-items: center;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, rgba(0, 255, 106, 0.06) 0%, rgba(0, 212, 255, 0.04) 100%);
    border-top: 1px solid rgba(0, 255, 106, 0.1);
    border-bottom: 1px solid rgba(0, 212, 255, 0.1);
  }
`;

export const HighlightContainer = styled.article`
  ${({ theme }) => theme.utils.container}
  position: relative;
  z-index: 1;
`;

export const HighlightTitle = styled(Typography)`
  max-width: 644px;
  color: #fff;
  font-family: ${({ theme }) => theme.fonts.display};

  background: linear-gradient(135deg, #00ff6a, #00d4ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

export const HighlightDescription = styled(Typography)`
  max-width: 1244px;
  margin-top: 2rem;
  color: rgba(200, 204, 212, 0.75);

  strong, b {
    color: #fff;
    font-weight: 600;
  }

  a {
    color: ${({ theme }) => theme.colors.primary};
    font-weight: 500;
    text-decoration: none;
    transition: opacity 0.2s;

    &:hover {
      opacity: 0.8;
    }
  }
`;
