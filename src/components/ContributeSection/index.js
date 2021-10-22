import React from "react";
import Typography from "../Typography";

import GithubImage from "../../assets/svg/github-cat.svg";

import { ContributeWrapper, ContributeContainer } from "./styled";

export default function Contribute({ link }) {
  return (
    <ContributeWrapper href={link} target="_blank">
      <GithubImage />

      <ContributeContainer>
        <Typography weight={500} as="h3" variant="h5">
          Want to contribute on this documentation?
        </Typography>

        <Typography variant="body2">
          Don’t be shy and open a PR on our github, contributions are always
          welcome
        </Typography>
      </ContributeContainer>
    </ContributeWrapper>
  );
}
