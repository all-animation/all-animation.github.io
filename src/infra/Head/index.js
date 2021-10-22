import React from "react";
import { Helmet } from "react-helmet";

import useSiteMetadata from "../../hooks/useSiteMetadata";

export default function Head({ location }) {
  const { siteURL } = useSiteMetadata();

  return (
    <Helmet>
      <html lang="en-US" />
      <meta property="og:site_name" content="All Animation CSS3" />
      <link rel="canonical" href={`${siteURL}${location.pathname}`} />
      <meta
        property="og:image"
        content="http://all-animation.github.io/assets/images/all-animation.png"
      />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="All Animation CSS3" />
      <meta name="twitter:site" content="@Clovissneto" />
      <meta name="twitter:domain" content="Clóvis Neto" />
      <meta
        name="twitter:image:src"
        content="http://all-animation.github.io/assets/images/all-animation.png"
      />
    </Helmet>
  );
}
