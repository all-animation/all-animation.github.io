import React from "react";

import Providers from "./src/infra/Providers";
import Layout from "./src/infra/Layout";

export const wrapRootElement = ({ element }) => {
  return <Providers>{element}</Providers>;
};

export const wrapPageElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>;
};
