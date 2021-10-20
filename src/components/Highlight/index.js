import React from "react";

import {
  HighlightWrapper,
  HighlightTitle,
  HighlightDescription,
  HighlightContainer,
} from "./styled";

const Highlight = ({ title, children }) => {
  return (
    <HighlightWrapper>
      <HighlightContainer>
        <HighlightTitle color="white" weight="bold" variant="h2">
          {title}
        </HighlightTitle>
        <HighlightDescription
          weight={400}
          color="white"
          paragraph
          variant="h3"
          weight="400"
        >
          {children}
        </HighlightDescription>
      </HighlightContainer>
    </HighlightWrapper>
  );
};

export default Highlight;
