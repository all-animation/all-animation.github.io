import styled from "styled-components";
import Typography from "../../components/Typography";

export const HighlightWrapper = styled.section`
  background-color: #03b85d;
  padding: 74px 0;
`;

export const HighlightContainer = styled.article`
  ${({ theme }) => theme.utils.container}
`;

export const HighlightTitle = styled(Typography)`
  max-width: 644px;
`;

export const HighlightDescription = styled(Typography)`
  max-width: 1244px;
  margin-top: 3.2rem;

  strong {
    font-weight: 600;
  }

  a {
    color: #fff;
    font-weight: 500;
  }
`;
