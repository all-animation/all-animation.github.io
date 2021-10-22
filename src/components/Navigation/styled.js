import styled from "styled-components";
import Typography from "../Typography";

export const NavigationWrapper = styled.nav`
  list-style: none;
  display: flex;

  li:not(li:last-child) {
    margin-right: 10%;
  }
`;

export const NavigationLink = styled(Typography)`
  &:hover,
  && {
    box-shadow: none;
  }

  :hover {
    color: ${({ theme }) => theme.colors.primary};
  }

  ${({ theme, active }) => active && `color: ${theme.colors.primary};`}
`;
