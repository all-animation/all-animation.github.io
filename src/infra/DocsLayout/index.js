import React from "react";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";

import SideNavigation from "../../components/SideNavigation";
import {
  DocsLayoutContainer,
  DocsLayoutGird,
  DocsLayoutArticle,
} from "./styled";
import Contribute from "../../components/ContributeSection";

function DocsLayout({ data }) {
  const {
    body,
    frontmatter: { slug, topics },
  } = data.mdx;

  return (
    <DocsLayoutContainer>
      <DocsLayoutGird>
        <SideNavigation topics={topics} slug={slug} />

        <DocsLayoutArticle>
          <div>
            <MDXRenderer>{body}</MDXRenderer>
          </div>

          <Contribute />
        </DocsLayoutArticle>
      </DocsLayoutGird>
    </DocsLayoutContainer>
  );
}

export const query = graphql`
  query MyQuery($slug: String) {
    mdx(slug: { eq: $slug }) {
      body
      frontmatter {
        slug
        topics
      }
    }
  }
`;

export default DocsLayout;
