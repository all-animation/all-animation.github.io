import React from "react";
import Arrow from "./icon/arrow";

import { ButtonStyled, OutlineButton, OutlineWrapper } from "./styled";

const Button = ({ label, outline, onSet }) => {
  return outline ? (
    <OutlineWrapper>
      <OutlineButton onClick={onSet}>{label}</OutlineButton>
      <Arrow />
    </OutlineWrapper>
  ) : (
    <ButtonStyled onClick={onSet}>{label}</ButtonStyled>
  );
};

export default Button;
