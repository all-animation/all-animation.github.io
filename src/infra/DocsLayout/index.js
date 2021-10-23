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
import { Helmet } from "react-helmet";

function DocsLayout({ data }) {
  const {
    body,
    frontmatter: { slug, topics, title, description },
  } = data.mdx;

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
      </Helmet>

      <DocsLayoutContainer>
        <DocsLayoutGird>
          <SideNavigation topics={topics} slug={slug} />

          <DocsLayoutArticle>
            <div>
              <MDXRenderer>{body}</MDXRenderer>
            </div>

            <Contribute
              link={`https://github.com/all-animation/all-animation.github.io/blob/develop/src/docs/${slug}.mdx`}
            />
          </DocsLayoutArticle>
        </DocsLayoutGird>
      </DocsLayoutContainer>
    </>
  );
}

export const query = graphql`
  query MyQuery($slug: String) {
    mdx(slug: { eq: $slug }) {
      body
      frontmatter {
        slug
        topics
        title
      }
    }
  }
`;

export default DocsLayout;
