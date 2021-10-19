import React from "react";
import Sky from "../Sky";
import {
  PresentationWrapper,
  PresentationTitle,
  PresentationDescription,
  BigTriangle,
  SmallTriangle,
} from "./styled";

function Presentation() {
  return (
    <PresentationWrapper>
      <PresentationTitle paragraph variant="h1" weight={400}>
        V<span>3.0</span> is now live!
      </PresentationTitle>
      <PresentationDescription italic variant="h3" weight={400}>
        All animation css is a set of css animations that will bring life to
        your project.
      </PresentationDescription>

      <BigTriangle />
      <SmallTriangle />

      <Sky top="7rem" right="40%" />
      <Sky top="12rem" right="13%" />
      <Sky top="18rem" right="30%" />

      <Sky top="27rem" left="15%" />
    </PresentationWrapper>
  );
}

export default Presentation;
