import React from "react";
import Navigation from "../../components/Navigation";
import Typography from "../../components/Typography";

import GlobalStyles from "../../theme/globals";

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
          <img
            src="https://s3.amazonaws.com/github/ribbons/forkme_right_darkblue_121621.png"
            alt="Fork me on GitHub"
          />
        </LayoutFork>
      </LayoutHeader>

      {children}
    </>
  );
}

export default Layout;
