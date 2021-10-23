import styled from "styled-components";

export const DocsLayoutContainer = styled.section`
  ${({ theme }) => theme.utils.container}
`;

export const DocsLayoutGird = styled.div`
  border-top: solid 1px ${({ theme }) => theme.colors.light};

  padding-top: 6rem;
  display: grid;
  grid-template-columns: 337px 0.9fr;
  grid-column-gap: 5vw;
  grid-template-rows: auto;

  ${({ theme }) => theme.utils.media.tablet`
    grid-template-columns: auto;
  `}
`;

export const DocsLayoutArticle = styled.article`
  overflow: hidden;

  > div {
    font-family: ${({ theme }) => theme.fonts.roboto};
    color: #000;

    pre {
      overflow: auto;
      border-radius: 4px;
    }

    h2 {
      color: ${({ theme }) => theme.colors.dark};
    }

    h3 {
      border-bottom: solid 1px ${({ theme }) => theme.colors.light};
      padding-bottom: 1rem;
      margin-top: 5rem;
    }

    h4 {
      margin-bottom: 1rem;
    }

    h2,
    h3,
    h4,
    h5,
    h6 {
      font-weight: 500;
    }

    h1 {
      font-weight: 500;
      font-size: 106px;
      line-height: 106px;
    }

    h2 {
      font-weight: 500;
      font-size: 64px;
    }

    h3 {
      font-weight: 500;
      line-height: 50px;
      font-size: 36px;
    }

    h4 {
      font-weight: 500;
      font-size: 28px;
    }

    h5 {
      font-weight: 500;
      font-size: 24px;
    }

    h6 {
      font-weight: 500;
      font-size: 21px;
    }

    p,
    a,
    li,
    span {
      font-size: 24px;
      line-height: 36px;
    }

    a,
    span {
      color: ${({ theme }) => theme.colors.primary};
    }

    p > code {
      background: ${({ theme }) => theme.colors.stone};
      padding: 4px 0.5rem;
      border-radius: 4px;
      color: ${({ theme }) => theme.colors.dark};
    }

    li {
      margin-bottom: 1rem;
    }
  }
`;
