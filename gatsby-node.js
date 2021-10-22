const path = require("path");

exports.createPages = async ({ graphql, actions, reporter }) => {
  // destructure the createPage function from the actions object
  const { createPage } = actions;

  const result = await graphql(`
    query {
      allMdx {
        edges {
          node {
            id
            frontmatter {
              slug
            }
          }
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query');
  }

  const docs = result.data.allMdx.edges;

  // call `createPage` for each result
  docs.forEach(({ node }) => {
    createPage({
      path: `docs/${node.frontmatter.slug}`,
      component: path.resolve(`./src/infra/DocsLayout/index.js`),
      // you can use the values in this context in
      // our page layout component
      context: {
        id: node.id,
        slug: node.frontmatter.slug,
      },
    });
  });
};
