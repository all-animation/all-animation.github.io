import styled, { css } from "styled-components";

const commonSkyStyles = css`
  display: block;
  background: ${({ theme }) => theme.colors.secondary};
  position: absolute;
  border-radius: 100%;
`;

const Sky = styled.figure`
  ${commonSkyStyles}
  width: 179px;
  height: 53px;
  z-index: 1;

  ${({ top }) => top && `top: ${top};`}
  ${({ right }) => right && `right: ${right};`}
  ${({ left }) => left && `left: ${left};`}
  ${({ bottom }) => bottom && `bottom: ${bottom};`}

  &:before {
    ${commonSkyStyles}

    content: "";
    width: 58px;
    height: 88px;
    left: 50%;
    margin-left: -31px;
    top: -20px;
  }
`;

export default Sky;
