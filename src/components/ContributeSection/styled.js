import styled from "styled-components";

export const ContributeWrapper = styled.a`
  border: 1px solid rgba(255, 255, 255, 0.08);
  padding: 26px 33px;
  display: flex;
  margin: 4rem 0;
  border-radius: 12px;
  text-decoration: none;
  background: rgba(255, 255, 255, 0.02);
  backdrop-filter: blur(4px);
  transition: all 0.3s ease;

  &:hover {
    border-color: rgba(0, 255, 106, 0.2);
    background: rgba(0, 255, 106, 0.03);
    transform: translateY(-2px);
  }

  svg {
    max-width: 78px;
    margin-right: 1.4rem;
    opacity: 0.8;
  }
`;

export const ContributeContainer = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;

  h3 {
    margin-bottom: 0.4rem;
    color: #fff;
  }
`;
