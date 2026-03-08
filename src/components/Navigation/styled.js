import styled from "styled-components";
import Typography from "../Typography";

export const NavigationWrapper = styled.nav`
  list-style: none;
  display: flex;
  align-items: center;
  gap: 2.5rem;

  ${({ theme }) => theme.utils.media.phone`
    gap: 1.5rem;
    flex-wrap: wrap;
    justify-content: center;
  `}
`;

export const NavigationLink = styled(Typography)`
  position: relative;
  color: ${({ theme }) => theme.colors.muted};
  transition: color 0.3s ease;

  &:hover,
  && {
    box-shadow: none;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.white};
  }

  &::after {
    content: "";
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 0;
    height: 2px;
    background: linear-gradient(90deg, #00ff6a, #00d4ff);
    transition: width 0.3s ease;
    border-radius: 1px;
  }

  &:hover::after {
    width: 100%;
  }

  ${({ theme, active }) =>
    active &&
    `
    color: ${theme.colors.white};

    &::after {
      width: 100%;
    }
  `}
`;
