import React from "react";

import Providers from "./src/infra/Providers";
import Layout from "./src/infra/Layout";

const ADSENSE_CLIENT = "ca-pub-1694357110489226";

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <script
      key="google-adsense"
      async
      src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_CLIENT}`}
      crossOrigin="anonymous"
    />,
  ]);
};

export const wrapRootElement = ({ element }) => {
  return <Providers>{element}</Providers>;
};

export const wrapPageElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>;
};
