import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";
import Typography from "../Typography";

const gradientShift = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const float = keyframes`
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(2deg); }
`;

const pulse = keyframes`
  0%, 100% { opacity: 0.4; transform: scale(1); }
  50% { opacity: 0.7; transform: scale(1.05); }
`;

export const PresentationWrapper = styled.section`
  position: relative;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;

  ${({ theme }) => theme.utils.container}

  &::before {
    content: "";
    position: absolute;
    top: -200px;
    right: -200px;
    width: 700px;
    height: 700px;
    background: radial-gradient(circle, rgba(0, 255, 106, 0.08) 0%, transparent 70%);
    pointer-events: none;
    animation: ${pulse} 8s ease-in-out infinite;
  }

  &::after {
    content: "";
    position: absolute;
    bottom: -100px;
    left: -100px;
    width: 500px;
    height: 500px;
    background: radial-gradient(circle, rgba(0, 212, 255, 0.06) 0%, transparent 70%);
    pointer-events: none;
    animation: ${pulse} 10s ease-in-out infinite 2s;
  }
`;

export const PresentationContent = styled.div`
  position: relative;
  z-index: 2;
  will-change: transform, opacity;
`;

export const PresentationTitle = styled(Typography)`
  max-width: 900px;
  position: relative;
  z-index: 2;
  color: #fff;

  span {
    background: linear-gradient(135deg, #00ff6a, #00d4ff, #00ff6a);
    background-size: 200% 200%;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    animation: ${gradientShift} 4s ease infinite;
  }
`;

export const PresentationDescription = styled(Typography)`
  max-width: 620px;
  position: relative;
  z-index: 2;
  color: rgba(200, 204, 212, 0.7);
  margin-top: 2rem;
  font-size: 20px;
  line-height: 1.7;
  letter-spacing: 0.01em;

  ${({ theme }) => theme.utils.media.phone`
    font-size: 17px;
  `}
`;

export const HeroCTA = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 3rem;
  position: relative;
  z-index: 2;

  ${({ theme }) => theme.utils.media.phone`
    flex-direction: column;
    align-items: flex-start;
  `}
`;

export const HeroPrimaryButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 2rem;
  font-family: ${({ theme }) => theme.fonts.display};
  font-weight: 600;
  font-size: 16px;
  letter-spacing: -0.01em;
  color: #090b10;
  background: linear-gradient(135deg, #00ff6a, #00d4ff);
  border: none;
  border-radius: 12px;
  text-decoration: none;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 30px rgba(0, 255, 106, 0.25);
  }

  &:active {
    transform: translateY(0);
  }
`;

export const HeroSecondaryButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 2rem;
  font-family: ${({ theme }) => theme.fonts.display};
  font-weight: 600;
  font-size: 16px;
  letter-spacing: -0.01em;
  color: #fff;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  text-decoration: none;
  cursor: pointer;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    border-color: rgba(255, 255, 255, 0.2);
    transform: translateY(-2px);
  }
`;

export const TriangleMotion = styled(motion.div)`
  position: absolute;
  bottom: 0;
  left: 50%;

  ${({ index }) => index && `z-index: ${index};`}
`;

export const FloatingShape = styled.div`
  position: absolute;
  width: ${({ size }) => size || "60px"};
  height: ${({ size }) => size || "60px"};
  border-radius: ${({ round }) => (round ? "50%" : "12px")};
  border: 1px solid rgba(0, 255, 106, 0.15);
  background: rgba(0, 255, 106, 0.03);
  animation: ${float} ${({ speed }) => speed || "6s"} ease-in-out infinite;
  animation-delay: ${({ delay }) => delay || "0s"};
  z-index: 1;

  ${({ top }) => top && `top: ${top};`}
  ${({ right }) => right && `right: ${right};`}
  ${({ left }) => left && `left: ${left};`}
  ${({ bottom }) => bottom && `bottom: ${bottom};`}

  ${({ theme }) => theme.utils.media.phone`
    display: none;
  `}
`;

export const GridOverlay = styled.div`
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px);
  background-size: 80px 80px;
  pointer-events: none;
  mask-image: radial-gradient(ellipse at 30% 50%, black 20%, transparent 70%);
  -webkit-mask-image: radial-gradient(ellipse at 30% 50%, black 20%, transparent 70%);
`;

export const VersionBadge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.4rem 1rem;
  border: 1px solid rgba(0, 255, 106, 0.2);
  border-radius: 100px;
  font-family: ${({ theme }) => theme.fonts.roboto};
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.primary};
  background: rgba(0, 255, 106, 0.05);
  margin-bottom: 2rem;
  position: relative;
  z-index: 2;
  backdrop-filter: blur(4px);

  &::before {
    content: "";
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 8px ${({ theme }) => theme.colors.primary};
  }
`;
