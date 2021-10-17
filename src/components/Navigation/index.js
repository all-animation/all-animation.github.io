import React from "react";
import Typography from "../Typography";
import { NavigationWrapper } from "./styled";

function Navigation() {
  return (
    <NavigationWrapper>
      <li>
        <Typography as="a" weight={500} variant="h5" href="#">
          Get Started
        </Typography>
      </li>
      <li>
        <Typography as="a" weight={500} variant="h5" href="#">
          Docs
        </Typography>
      </li>
      <li>
        <Typography as="a" weight={500} variant="h5" href="#">
          Contribute
        </Typography>
      </li>
    </NavigationWrapper>
  );
}

export default Navigation;
