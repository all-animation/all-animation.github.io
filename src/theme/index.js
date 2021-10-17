import { css } from "styled-components";

const theme = {
  fonts: {
    roboto: "Roboto",
  },
  utils: {
    container: css`
      max-width: 1656px;
      width: 100%;
      padding: 0 1rem;
      margin: 0 auto;
    `,
  },
  colors: {
    secondary: "#65DAFF",
    primary: "#00D76B",
    dark: "#333",
  },
};

export default theme;
