import styled from "styled-components";

export const LayoutHeader = styled.header`
  ${({ theme }) => theme.utils.container}

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem 2rem;
  position: relative;
  z-index: 20;

  > a {
    text-decoration: none;

    h1 {
      margin: 0;
      font-family: ${({ theme }) => theme.fonts.display};
      background: linear-gradient(135deg, #00ff6a, #00d4ff);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      font-size: 22px;
      letter-spacing: -0.02em;

      span {
        opacity: 0.6;
        font-weight: 400;
      }
    }
  }

  ${({ theme }) => theme.utils.media.phone`
    flex-direction: column;
    gap: 1.5rem;
    text-align: center;
  `}
`;

export const LayoutFork = styled.a`
  position: fixed;
  top: 0;
  right: 0;
  border: 0;
  z-index: 10;
  opacity: 0.7;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 1;
  }

  svg {
    filter: invert(1);
  }
`;

export const LayoutFooter = styled.footer`
  ${({ theme }) => theme.utils.container};

  border-top: solid 1px ${({ theme }) => theme.colors.stone};
  text-align: center;
  padding: 2.5rem 0;
  margin-top: 4rem;

  p {
    color: ${({ theme }) => theme.colors.muted};
    font-size: 15px;
  }

  a {
    color: ${({ theme }) => theme.colors.primary};
    text-decoration: none;
    transition: opacity 0.2s;

    &:hover {
      opacity: 0.8;
    }
  }

  span {
    color: ${({ theme }) => theme.colors.secondary.light};
  }
`;
