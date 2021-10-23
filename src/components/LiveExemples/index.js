import React from "react";

import Button from "../Button";

import { LiveWrapper, LiveContainer, LiveTitle, ButtonWrapper } from "./styled";

const LiveExemples = () => {
  return (
    <LiveWrapper>
      <LiveContainer>
        <LiveTitle variant="h2" weight="normal">
          <span>Live</span> Exemples
        </LiveTitle>

        <div style={{ margin: "2.8rem 0" }}>
          <img
            src="https://i.ibb.co/23ZSKd0/all-animation-1.png"
            alt="animation"
          />
        </div>

        <ButtonWrapper>
          <Button label="a-fade-in" />
          <Button label="a-dance" />
          <Button label="a-journal" />
          <Button label="a-pulse" />
        </ButtonWrapper>
        <ButtonWrapper>
          <Button label="a-pulse-slow" />
          <Button label="a-enter up bounce" />
          <Button label="a-enter down bounce" />
          <Button label="a-enter right bounce" />
        </ButtonWrapper>
        <ButtonWrapper>
          <Button label="a-jamp" />
          <Button label="a-four rock" />
          <Button label="a-jump bounce" />
          <Button label="a-scale bounce" />
        </ButtonWrapper>
        <Button label="more 30+ animations" outline />
      </LiveContainer>
    </LiveWrapper>
  );
};

export default LiveExemples;
