import StyledTools from "styled-tools-core";

import fonts from "./fonts";
import utils from "./utils";
import colors from "./colors";

const {theme, globals} = StyledTools({
  fonts,
  utils,
  colors,
});

export { globals }

export default theme;
