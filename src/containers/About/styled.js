import styled from "styled-components";
import Typography from "../../components/Typography";

export const AboutWrapper = styled.div`
  background-color: #03b85d;
  padding: 74px 7.6rem;
`;

export const AboutTitle = styled(Typography)`
  max-width: 644px;
`;

export const AboutDescription = styled(Typography)`
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
