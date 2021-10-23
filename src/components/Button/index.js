import React from "react";
import Arrow from "./icon/arrow";

import { ButtonStyled, OutlineButton, OutlineWrapper } from "./styled";

const Button = ({ label, outline }) => {
  return outline ? (
    <OutlineWrapper>
      <OutlineButton>{label}</OutlineButton>
      <Arrow />
    </OutlineWrapper>
  ) : (
    <ButtonStyled>{label}</ButtonStyled>
  );
};

export default Button;
