import React, { useState } from "react";

import Button from "../Button";

import {
  LiveWrapper,
  LiveContainer,
  LiveTitle,
  ButtonWrapper,
  ImageContainer,
} from "./styled";

const LiveExemples = () => {
  const [animation, setAnimation] = useState("");

  console.log(animation);

  return (
    <LiveWrapper>
      <LiveContainer>
        <LiveTitle variant="h2" weight="normal">
          <span>Live</span> Exemples
        </LiveTitle>

        <ImageContainer >
          <img
            src="https://i.ibb.co/23ZSKd0/all-animation-1.png"
            alt="animation"
            class={animation}
          />
        </ImageContainer>

        <ButtonWrapper>
          <Button label="a-dance" onSet={() => setAnimation("a-dance")} />
          <Button label="a-journal" onSet={() => setAnimation("a-journal")} />
          <Button label="a-pulse" onSet={() => setAnimation("a-pulse")} />
        </ButtonWrapper>
        <ButtonWrapper>
          <Button
            label="a-pulse-slow"
            onSet={() => setAnimation("a-pulse-slow")}
          />
          <Button
            label="a-enter up bounce"
            onSet={() => setAnimation("a-enter-up-bounce")}
          />
          <Button
            label="a-enter down bounce"
            onSet={() => setAnimation("a-enter-down-bounce")}
          />
          <Button
            label="a-enter right bounce"
            onSet={() => setAnimation("a-enter-right-bounce")}
          />
        </ButtonWrapper>
        <ButtonWrapper>
          <Button label="a-jamp" onSet={() => setAnimation("a-jamp")} />
          <Button
            label="a-four rock"
            onSet={() => setAnimation("a-four-rock")}
          />
          <Button
            label="a-jump bounce"
            onSet={() => setAnimation("a-jump-bounce")}
          />
          <Button
            label="a-scale bounce"
            onSet={() => setAnimation("a-scale-bounce")}
          />
        </ButtonWrapper>
        <Button label="more 30+ animations" outline />
      </LiveContainer>
    </LiveWrapper>
  );
};

export default LiveExemples;
