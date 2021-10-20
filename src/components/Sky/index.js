import styled, { css, keyframes } from "styled-components";
import { motion } from "framer-motion";

const skyHeigh = keyframes`
  0%, 40% {
    transform: translateY(0px);
    height: 88px;
  }

  60%, 100% {
    transform: translateY(4px);
    height: 80px;
  }
`;

const skyMotion = keyframes`
  0%, 40% {
    transform: translateX(0px);
  }

  60%, 100% {
    transform: translateX(100px);
  }
`;

const commonSkyStyles = css`
  display: block;
  background: ${({ theme }) => theme.colors.secondary};
  border-radius: 100%;
`;

export const SkyMotion = styled(motion.div)`
  position: absolute;
  ${({ top }) => top && `top: ${top};`}
  ${({ right }) => right && `right: ${right};`}
  ${({ left }) => left && `left: ${left};`}
  ${({ bottom }) => bottom && `bottom: ${bottom};`}
`;

export const Sky = styled.figure`
  ${commonSkyStyles}

  position: relative;
  width: 179px;
  height: 53px;
  animation: ${skyMotion}
    ${({ speed }) => `${speed}s ease-in-out infinite alternate`};
  ${({ delay }) => delay && `animation-delay: ${delay}s;`}

  &:before {
    ${commonSkyStyles}

    position: absolute;
    top: -20px;
    left: 50%;
    content: "";
    width: 58px;
    height: 88px;
    margin-left: -31px;
    animation: ${skyHeigh} 2s ease-out infinite alternate;
    ${({ delay }) => delay && `animation-delay: ${delay}s;`}
  }
`;

export default Sky;
