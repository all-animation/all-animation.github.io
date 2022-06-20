module.exports = {
  siteMetadata: {
    siteUrl: "https://all-animation.github.io",
    title: "All Animation CSS",
    description:
      "All Animation.css is a set of nice and crazy css animations made with the purpose to bring life and interactions to your project.",
  },
  plugins: [
    "gatsby-plugin-styled-components",
    {
      resolve: "gatsby-plugin-google-adsense",
      options: {
        publisherId: "ca-pub-1694357110489226",
      },
    },
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "UA-47249089-1",
      },
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/assets/images/icon.png",
      },
    },
    "gatsby-plugin-mdx",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "docs",
        path: "./src/docs/",
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Roboto\:400,400i,500`],
        display: "swap",
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/,
        },
      },
    },
  ],
};
