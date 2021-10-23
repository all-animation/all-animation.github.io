import styled, { css } from "styled-components";

export const commonButtonStyles = css`
  font-family: ${({ theme }) => theme.fonts.roboto};
  font-size: 24px;
  margin: 12px;
  border: none;
  cursor: pointer;
  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.95);
  }

  &:active {
    filter: brightness(0.9);
  }
`;

export const ButtonStyled = styled.button`
  ${commonButtonStyles};
  background: ${({ theme }) => theme.colors.secondary.light};
  color: ${({ theme }) => theme.colors.white};
  width: fit-content;
  border-radius: 6px;
  padding: 0.6rem 1.8rem;
`;
