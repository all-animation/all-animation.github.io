import styled from "styled-components";

export const SideNavigationWrapper = styled.aside`
  > ul {
    padding: 4rem 2.5rem 4rem 4rem;
    box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.15);
    border-radius: 6px;
  }

  ul {
    margin: 0;
  }

  li {
    margin-top: 1rem;
  }

  a {
    color: ${({ theme }) => theme.colors.black};
  }

  > ul > li:first-child {
    margin: 0;
  }
`;
