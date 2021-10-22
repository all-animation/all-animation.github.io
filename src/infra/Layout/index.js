import React from "react";
import Navigation from "../../components/Navigation";
import Typography from "../../components/Typography";
import Helmet from "react-helmet";

import GlobalStyles from "../../theme/globals";
import ForkImage from "../../assets/svg/fork-github.svg";
import Head from "../Head";

import { LayoutHeader, LayoutFork, LayoutFooter } from "./styled";

function Layout({ children, location }) {
  return (
    <>
      <GlobalStyles />

      <Head location={location} />

      <LayoutHeader>
        <a href="/">
          <Typography weight={500} color="primary" variant="h5" as="h1">
            All Animation <span>CSS3</span>
          </Typography>
        </a>

        <Navigation location={location} />

        <LayoutFork
          target="blank"
          href="https://github.com/all-animation/all-animation"
        >
          <ForkImage />
        </LayoutFork>
      </LayoutHeader>

      {children}

      <LayoutFooter>
        <Typography variant="h5">
          Made with ❤️ by{" "}
          <a href="http://clovisdasilvaneto.github.io" target="_blank">
            Clóvis Neto
          </a>{" "}
          & <a href="https://github.com/evertonfxavier">Everton Xavier</a> for{" "}
          <span>developers</span>
        </Typography>
      </LayoutFooter>
    </>
  );
}

export default Layout;
