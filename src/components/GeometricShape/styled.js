import styled, { keyframes } from "styled-components";

const shimmer = keyframes`
  0%, 100% { opacity: 0.6; }
  50% { opacity: 1; }
`;

export const ShapeCanvas = styled.div`
  position: relative;
  width: 260px;
  height: 260px;
  display: flex;
  align-items: center;
  justify-content: center;

  ${({ theme }) => theme.utils.media.phone`
    width: 180px;
    height: 180px;
  `}
`;

export const ShapeLayer = styled.div`
  position: absolute;
  width: ${({ size }) => size};
  height: ${({ size }) => size};
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 100%;
    height: 100%;
  }
`;

export const InnerShape = styled.div`
  position: absolute;
  width: 18%;
  height: 18%;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(0, 255, 106, 0.6) 0%, rgba(0, 212, 255, 0.2) 60%, transparent 100%);
  box-shadow:
    0 0 30px rgba(0, 255, 106, 0.3),
    0 0 60px rgba(0, 255, 106, 0.1);
  animation: ${shimmer} 3s ease-in-out infinite;
`;
