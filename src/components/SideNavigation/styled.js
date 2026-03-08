import styled from "styled-components";

export const SideNavigationWrapper = styled.aside`
  > ul {
    padding: 2rem 1.5rem 2rem 2rem;
    background: ${({ theme }) => theme.colors.bgCard};
    border: 1px solid rgba(255, 255, 255, 0.06);
    border-radius: 12px;
    position: sticky;
    top: 2rem;
  }

  ul {
    margin: 0;
    list-style: none;
  }

  li {
    margin-top: 0.75rem;
  }

  a {
    color: ${({ theme }) => theme.colors.muted};
    transition: color 0.2s ease;
    font-size: 16px;

    &:hover {
      color: ${({ theme }) => theme.colors.white};
    }
  }

  > ul > li:first-child {
    margin: 0;
  }

  > ul > li > ul {
    padding-left: 1rem;
    border-left: 1px solid ${({ theme }) => theme.colors.stone};
    margin-top: 0.5rem;

    a {
      font-size: 14px;
    }
  }
`;
