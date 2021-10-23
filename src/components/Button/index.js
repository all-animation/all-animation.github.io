import React from "react";

import { ButtonStyled } from "./styled";

const Button = ({ label, onClick }) => {
  return <ButtonStyled onClick={onClick}>{label}</ButtonStyled>;
};

export default Button;
