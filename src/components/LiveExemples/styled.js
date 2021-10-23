import styled from "styled-components";
import Typography from "../Typography";

export const LiveWrapper = styled.section`
  min-height: calc(100vh - 20rem);
  display: flex;
  align-items: center;
  margin: 2.8rem 0;
`;

export const LiveContainer = styled.article`
  ${({ theme }) => theme.utils.container}
  text-align: center;
  text-align: -webkit-center;
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
