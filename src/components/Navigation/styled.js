import styled from "styled-components";

export const NavigationWrapper = styled.nav`
  list-style: none;
  display: flex;

  li:not(li:last-child) {
    margin-right: 6rem;
  }
`;
