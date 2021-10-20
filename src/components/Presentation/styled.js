import styled, { css } from "styled-components";
import { motion } from "framer-motion";
import Typography from "../Typography";

const commonBigTriangleStyles = css`
  width: 0;
  height: 0;
  border: solid 13rem transparent;
  border-top-width: 0;
`;

export const PresentationWrapper = styled.section`
  position: relative;
  height: calc(100vh - 48px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  overflow: hidden;

  ${({ theme }) => theme.utils.container}
`;

export const PresentationTitle = styled(Typography)`
  max-width: 581px;
  position: relative;
  z-index: 2;
`;

export const PresentationDescription = styled(Typography)`
  max-width: 930px;
  position: relative;
  z-index: 2;
`;

export const TriangleMotion = styled(motion.div)`
  position: absolute;
  bottom: 0;
  left: 50%;

  ${({ index }) => index && `z-index: ${index};`}
`;

export const BigTriangle = styled.div`
  ${commonBigTriangleStyles}
  border-bottom-color: #00D76B;
  border-right-width: 0rem;
  border-left-width: 9rem;
  transform: skewX(-9deg);
  margin-left: -10rem;
  position: relative;

  &:before {
    ${commonBigTriangleStyles}

    border-bottom-color: #2dff96;
    border-left-width: 2rem;
    border-right-width: 11rem;
    transform: translateX(-17px) skewX(8.2deg);
    content: "";
    position: absolute;
    top: 0;
  }
`;

export const SmallTriangle = styled.div`
  width: 0;
  height: 0;
  border: solid 8rem transparent;
  border-top-width: 0;
  border-bottom-color: #2dff96;
  border-left-width: 3rem;
  border-right-width: 8rem;
  position: relative;
  margin-left: 173px;

  &:before {
    content: "";
    width: 0;
    height: 0;
    border: solid 119px transparent;
    border-top-width: 0;
    border-bottom-color: #00d76b;
    border-left-width: 28px;
    border-right-width: 67px;
    position: absolute;
    top: -6px;
    transform: rotateZ(50deg);
    left: -80px;
  }
`;
