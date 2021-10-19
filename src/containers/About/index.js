import React from "react";

import { AboutWrapper, AboutTitle, AboutDescription } from "./styled";

const About = () => {
  return (
    <AboutWrapper>
      <AboutTitle color="white" weight="bold" variant="h2">
        All Animation styled is comming soon
      </AboutTitle>
      <AboutDescription color="white" paragraph variant="h3" weight="400">
        We are very welcome with suggestions, and use <strong>github</strong> as version control
        so if you want to suggest something, please create an issue in there or
        in case of contribution, please check the <a href="#">v4 branch</a> on <a href="#">github</a>.
      </AboutDescription>
    </AboutWrapper>
  );
};

export default About;
