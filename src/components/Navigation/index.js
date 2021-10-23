import React from "react";
import { NavigationWrapper, NavigationLink } from "./styled";

import items from "../SideNavigation/items";

function Navigation({ location }) {
  return (
    <NavigationWrapper>
      {items
        .filter(({ hide }) => !hide)
        .map(({ label, link }) => (
          <li>
            <NavigationLink
              forwardedAs="a"
              weight={500}
              variant="h5"
              active={location.pathname === link}
              href={link}
            >
              {label}
            </NavigationLink>
          </li>
        ))}
    </NavigationWrapper>
  );
}

export default Navigation;
