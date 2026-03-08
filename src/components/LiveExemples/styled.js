import styled from "styled-components";
import { commonButtonStyles } from "../Button/styled";
import Typography from "../Typography";

export const LiveWrapper = styled.section`
  height: 100vh;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
`;

export const LiveContainer = styled.article`
  ${({ theme }) => theme.utils.container}
  text-align: center;
  text-align: -webkit-center;
`;

export const ImageContainer = styled.div`
  margin: 3rem 0;
  max-width: 46rem;
  position: relative;
  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: 20px;
    background: radial-gradient(ellipse at center, rgba(0, 255, 106, 0.04) 0%, transparent 70%);
    pointer-events: none;
  }
`;

export const LiveTitle = styled(Typography)`
  max-width: 763px;
  color: #fff;

  span {
    background: linear-gradient(135deg, #00d4ff, #00ff6a);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
`;

export const ButtonWrapper = styled.div`
  width: 100%;
  max-width: 1092px;
`;

export const OutlineButton = styled.a`
  ${commonButtonStyles};
  background: none;
  color: ${({ theme }) => theme.colors.primary};
  border-bottom: 1px solid;
  border-color: rgba(0, 255, 106, 0.3);
  text-decoration: none;
  font-size: 18px;
  font-weight: 600;
  font-family: ${({ theme }) => theme.fonts.display};
  transition: all 0.3s ease;

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
    text-shadow: 0 0 20px rgba(0, 255, 106, 0.3);
  }
`;

export const OutlineWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2.5rem;
  gap: 0.75rem;

  svg {
    path {
      stroke: ${({ theme }) => theme.colors.primary};
    }
  }
`;
