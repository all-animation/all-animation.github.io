import React, { useState } from "react";
import Arrow from "./icon/arrow";

import Button from "../Button";

import {
  LiveWrapper,
  LiveContainer,
  LiveTitle,
  ButtonWrapper,
  ImageContainer,
  OutlineWrapper,
  OutlineButton,
} from "./styled";

const LiveExemples = () => {
  const [animation, setAnimation] = useState("");

  return (
    <LiveWrapper>
      <LiveContainer>
        <LiveTitle variant="h2" forwardAs="h2" weight={400}>
          <span>Live</span> Exemples
        </LiveTitle>

        <ImageContainer>
          <img
            src="https://i.ibb.co/23ZSKd0/all-animation-1.png"
            alt="animation"
            class={animation}
          />
        </ImageContainer>

        <ButtonWrapper>
          <Button label="a-dance" onClick={() => setAnimation("a-dance")} />
          <Button label="a-journal" onClick={() => setAnimation("a-journal")} />
          <Button label="a-pulse" onClick={() => setAnimation("a-pulse")} />
          <Button
            label="a-jello-vertical"
            onClick={() => setAnimation("a-jello-vertical")}
          />
          <Button
            label="a-jello-horizontal"
            onClick={() => setAnimation("a-jello-horizontal")}
          />
        </ButtonWrapper>
        <ButtonWrapper>
          <Button
            label="a-pulse-slow"
            onClick={() => setAnimation("a-pulse-slow")}
          />
          <Button
            label="a-enter up bounce"
            onClick={() => setAnimation("a-enter-up-bounce")}
          />
          <Button
            label="a-enter down bounce"
            onClick={() => setAnimation("a-enter-down-bounce")}
          />
          <Button
            label="a-enter right bounce"
            onClick={() => setAnimation("a-enter-right-bounce")}
          />
        </ButtonWrapper>
        <ButtonWrapper>
          <Button label="a-jamp" onClick={() => setAnimation("a-jamp")} />
          <Button
            label="a-four rock"
            onClick={() => setAnimation("a-four-rock")}
          />
          <Button
            label="a-jump bounce"
            onClick={() => setAnimation("a-jump-bounce")}
          />
          <Button
            label="a-scale bounce"
            onClick={() => setAnimation("a-scale-bounce")}
          />
        </ButtonWrapper>

        <OutlineWrapper>
          <OutlineButton href="/animations">View all animations</OutlineButton>
          <Arrow />
        </OutlineWrapper>
      </LiveContainer>
    </LiveWrapper>
  );
};

export default LiveExemples;
