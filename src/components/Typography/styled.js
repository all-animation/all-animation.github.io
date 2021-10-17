import styled from "styled-components";
import { getSpanColorVariant, getTypographyVariants } from "./variants";

export const TypographText = styled.p`
  font-family: ${({ theme }) => theme.fonts.roboto};
  color: ${({ color, theme }) => theme.colors[color] || "#000"};
  text-decoration: none;
  margin: 0;

  ${getTypographyVariants}

  ${({ paragraph }) => paragraph && `margin-bottom: 1rem;`}
  ${({ weight }) => weight && `font-weight: ${weight};`}
  ${({ transform }) => transform && `text-transform: ${transform};`}
  ${({ italic }) => italic && `font-style: italic;`}

  span {
    ${getSpanColorVariant}
  }
`;
