import React from "react";
import Highlight from "../../components/Highlight";
import Presentation from "../../components/Presentation";

function Home() {
  return (
    <>
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
