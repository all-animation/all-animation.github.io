import React from "react";
import { Helmet } from "react-helmet";
import Highlight from "../../components/Highlight";
import Presentation from "../../components/Presentation";
import useSiteMetadata from "../../hooks/useSiteMetadata";

function Home() {
  const { title, description } = useSiteMetadata();

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
      </Helmet>

      <Presentation />

      <Highlight title="All Animation styled is comming soon">
        We are very welcome to suggestions, and use <b>github</b> as version
        control so if you want to suggest something, please create an issue in
        there or in case of contribution, please check the{" "}
        <a href="#">all-animation/styled</a> repository on{" "}
        <a href="#">github</a>.
      </Highlight>
    </>
  );
}

export default Home;
