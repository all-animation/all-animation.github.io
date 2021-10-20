import styled, { css, keyframes } from "styled-components";
import { motion } from "framer-motion";

const skyHeigh = keyframes`
  0%, 40% {
    transform: translateY(0px);
    height: 88px;
  }

  60%, 100% {
    transform: translateY(4px);
    height: 80px
  }
`;

const commonSkyStyles = css`
  display: block;
  background: ${({ theme }) => theme.colors.secondary};
  position: absolute;
  border-radius: 100%;
`;

const Sky = styled(motion.div)`
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
    animation: ${skyHeigh} 2s ease-out infinite alternate;
    ${({ delay }) => delay && `animation-delay: ${delay}s`}
  }
`;

export default Sky;
