import { css } from "styled-components";

const breakpoints = {
  phone: 600,
};

const generateBreakpoint = (width, cssMarkup) => css`
  @media (min-width: ${width}px) {
    ${cssMarkup};
  }
`;

const utils = {
  container: css`
    max-width: 1556px;
    width: 100%;
    padding: 0 2rem;
    margin: 0 auto;
  `,
  breakpoints,
  media: Object.keys(breakpoints).reduce((acc, label) => {
    acc[label] = (...args) => generateBreakpoint(breakpoints[label], args);
    return acc;
  }, {}),
};

export default utils;
