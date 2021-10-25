import React, { useState } from "react";
import { Helmet } from "react-helmet";
import useSiteMetadata from "../../hooks/useSiteMetadata";

import Button from "../../components/Button";
import Typography from "../../components/Typography";

import {
  AnimationsWrapper,
  AnimationsFigure,
  AnimationsButtonsContainer,
} from "./styled";
import { animations } from "./utils";

function Animations() {
  const { title, description } = useSiteMetadata();
  const [animation, setAnimation] = useState("");

  return (
    <>
      <Helmet>
        <title>{title} - animations examples</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={`${title} - animations examples`} />
        <meta property="og:description" content={description} />
      </Helmet>

      <AnimationsWrapper>
        <AnimationsButtonsContainer>
          {animations.map(({ label, classes }) => (
            <>
              <Typography as="h3" variant="h3" paragraph>
                {label}
              </Typography>

              {classes.map((currentClass) => (
                <Button
                  onClick={() => setAnimation(currentClass)}
                  label={currentClass}
                />
              ))}
            </>
          ))}
        </AnimationsButtonsContainer>
        <AnimationsFigure>
          <div className="a-perspective">
            <img
              className={animation}
              src="https://i.ibb.co/23ZSKd0/all-animation-1.png"
              alt="animation"
            />
          </div>
        </AnimationsFigure>
      </AnimationsWrapper>
    </>
  );
}

export default Animations;
