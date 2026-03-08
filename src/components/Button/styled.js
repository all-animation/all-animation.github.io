import styled, { css } from "styled-components";

export const commonButtonStyles = css`
  font-family: ${({ theme }) => theme.fonts.roboto};
  font-size: 15px;
  font-weight: 500;
  margin: 6px;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;
`;

export const ButtonStyled = styled.button`
  ${commonButtonStyles};
  color: rgba(200, 204, 212, 0.9);
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  width: fit-content;
  border-radius: 8px;
  padding: 0.5rem 1.2rem;
  backdrop-filter: blur(4px);

  &:hover {
    background: rgba(0, 255, 106, 0.08);
    border-color: rgba(0, 255, 106, 0.25);
    color: #fff;
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
    background: rgba(0, 255, 106, 0.12);
  }
`;
