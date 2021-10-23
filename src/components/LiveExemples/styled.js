import styled from "styled-components";
import { commonButtonStyles } from "../Button/styled";
import Typography from "../Typography";

export const LiveWrapper = styled.section`
  min-height: calc(100vh - 20rem);
  display: flex;
  align-items: center;
  margin: 224px 0;
`;

export const LiveContainer = styled.article`
  ${({ theme }) => theme.utils.container}
  text-align: center;
  text-align: -webkit-center;
`;

export const ImageContainer = styled.div`
  margin: 2.8rem 0px;
  width: 100%;
  max-width: 46rem;
`;

export const LiveTitle = styled(Typography)`
  max-width: 763px;
  color: ${({ theme }) => theme.colors.primary};

  span {
    color: ${({ theme }) => theme.colors.secondary.dark};
  }
`;

export const ButtonWrapper = styled.div`
  width: 100%;
  max-width: 1092px;
`;

export const OutlineButton = styled.a`
  ${commonButtonStyles};
  background: none;
  color: ${({ theme }) => theme.colors.secondary.dark};
  border-bottom: 1px solid;
  border-color: ${({ theme }) => theme.colors.secondary.dark};
  text-decoration: none;
`;

export const OutlineWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
`;
