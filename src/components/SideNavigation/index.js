import React from "react";

import Typography from "../../components/Typography";
import { SideNavigationWrapper } from "./styled.js";
import items from "./items";

const isActiveLink = (slug, link) => {
  const slugLink = `/docs/${slug}`;

  return slugLink === link;
};

const sanitizeTopicsLabel = (label) => {
  return label.trim().toLowerCase().replaceAll(" ", "-");
};

const SideNavigation = ({ slug, topics }) => {
  const splitedTopics = topics?.split(",");

  return (
    <SideNavigationWrapper>
      <ul>
        {items.map(({ label, link }) => (
          <li key={`${label}-${link}`}>
            <Typography
              as="a"
              weight={isActiveLink(slug, link) ? 500 : 400}
              variant="h5"
              href={link}
            >
              {label}
            </Typography>

            {isActiveLink(slug, link) && Boolean(splitedTopics?.length) && (
              <ul>
                {splitedTopics.map((label) => (
                  <li>
                    <Typography
                      as="a"
                      variant="h5"
                      weight={400}
                      href={`#${sanitizeTopicsLabel(label)}`}
                    >
                      {label}
                    </Typography>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </SideNavigationWrapper>
  );
};

export default SideNavigation;
