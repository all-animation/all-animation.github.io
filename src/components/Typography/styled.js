import styled, { css } from "styled-components";
import {
  getLinkColorVariant,
  getSpanColorVariant,
  getTypographyVariants,
} from "./variants";

const getLinkStyles = css`
  transition: ease-out 0.5s all;
  text-decoration: none;
  box-shadow: 0 2px 0 transparent;
`;

export const TypographText = styled.p`
  font-family: ${({ theme }) => theme.fonts.roboto};
  color: ${({ color, theme }) => theme.colors[color] || theme.colors.dark};
  text-decoration: none;
  margin: 0;

  ${getTypographyVariants}
  ${({ as }) => as === "a" && getLinkStyles}
  
  &:hover {
    ${({ as, theme, color }) =>
      as === "a" &&
      `
      box-shadow: 0 2px 0 ${theme.colors[color] || theme.colors.dark};
  `}
  }

  ${({ paragraph }) => paragraph && `margin-bottom: 1rem;`}
  ${({ weight }) => weight && `font-weight: ${weight};`}
  ${({ transform }) => transform && `text-transform: ${transform};`}
  ${({ italic }) => italic && `font-style: italic;`}

  span {
    ${getSpanColorVariant}
  }

  a {
    ${getLinkColorVariant}
    ${getLinkStyles}
  }
`;
