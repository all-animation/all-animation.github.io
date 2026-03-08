import styled from "styled-components";

export const DocsLayoutContainer = styled.section`
  ${({ theme }) => theme.utils.container}
`;

export const DocsLayoutGird = styled.div`
  border-top: solid 1px ${({ theme }) => theme.colors.stone};

  padding-top: 4rem;
  display: grid;
  grid-template-columns: 300px 1fr;
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
    color: ${({ theme }) => theme.colors.dark};

    pre {
      overflow: auto;
      border-radius: 10px;
      border: 1px solid rgba(255, 255, 255, 0.06);
    }

    h2 {
      color: #fff;
      font-family: ${({ theme }) => theme.fonts.display};
    }

    h3 {
      border-bottom: solid 1px ${({ theme }) => theme.colors.stone};
      padding-bottom: 1rem;
      margin-top: 4rem;
      color: #fff;
      font-family: ${({ theme }) => theme.fonts.display};
    }

    h4 {
      margin-bottom: 1rem;
      color: #e0e0e0;
    }

    h2,
    h3,
    h4,
    h5,
    h6 {
      font-weight: 600;
    }

    h1 {
      font-family: ${({ theme }) => theme.fonts.display};
      font-weight: 800;
      font-size: 72px;
      line-height: 1;
      letter-spacing: -0.03em;
      color: #fff;
    }

    h2 {
      font-size: 48px;
    }

    h3 {
      line-height: 1.3;
      font-size: 32px;
    }

    h4 {
      font-size: 24px;
    }

    h5 {
      font-size: 20px;
    }

    h6 {
      font-size: 18px;
    }

    p,
    a,
    li,
    span {
      font-size: 18px;
      line-height: 1.7;
    }

    a,
    span {
      color: ${({ theme }) => theme.colors.primary};
    }

    p > code {
      background: ${({ theme }) => theme.colors.bgElevated};
      border: 1px solid ${({ theme }) => theme.colors.stone};
      padding: 3px 8px;
      border-radius: 6px;
      color: ${({ theme }) => theme.colors.primary};
      font-size: 0.9em;
    }

    li {
      margin-bottom: 0.75rem;
    }
  }
`;
