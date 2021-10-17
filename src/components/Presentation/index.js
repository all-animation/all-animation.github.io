import React from "react";
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
    </PresentationWrapper>
  );
}

export default Presentation;
