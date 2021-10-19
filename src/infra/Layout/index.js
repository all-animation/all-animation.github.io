import React from "react";
import Navigation from "../../components/Navigation";
import Typography from "../../components/Typography";

import GlobalStyles from "../../theme/globals";
import ForkImage from "../../assets/svg/fork-github.svg";

import { LayoutHeader, LayoutFork } from "./styled";

function Layout({ children }) {
  return (
    <>
      <GlobalStyles />

      <LayoutHeader>
        <Typography weight={500} color="primary" variant="h5" as="h1">
          All Animation <span>CSS3</span>
        </Typography>

        <Navigation />

        <LayoutFork
          target="blank"
          href="https://github.com/all-animation/all-animation"
        >
          <ForkImage />
        </LayoutFork>
      </LayoutHeader>

      {children}
    </>
  );
}

export default Layout;
