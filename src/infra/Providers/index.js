import React from "react";
import { MDXProvider } from "@mdx-js/react";
import { ThemeProvider } from "styled-components";

import theme from "../../theme";
import Typography from "../../components/Typography";
import Topic from "../../components/Topic";
import CodeBlock from "../../components/CodeBlock";

const components = { Typography, Topic, pre: CodeBlock };

const Providers = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <MDXProvider components={components}>{children}</MDXProvider>
    </ThemeProvider>
  );
};

export default Providers;
