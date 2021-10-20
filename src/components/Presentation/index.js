import React from "react";
import { Sky, SkyMotion } from "../Sky";
import {
  PresentationWrapper,
  PresentationTitle,
  PresentationDescription,
  BigTriangle,
  SmallTriangle,
  TriangleMotion,
} from "./styled";
import { useViewportScroll, useTransform, useSpring } from "framer-motion";

function Presentation() {
  const { scrollYProgress } = useViewportScroll();
  const skyA = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const skyB = useTransform(scrollYProgress, [0, 1], [0, 50]);
  const skyC = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const skyD = useTransform(scrollYProgress, [0, 1], [0, 200]);

  const bigTriangle = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const smallTriangle = useTransform(scrollYProgress, [0, 1], [0, 150]);

  //Transitions
  const skyATransition = useSpring(skyA, { stiffness: 400, damping: 90 });
  const skyBTransition = useSpring(skyB, { stiffness: 400, damping: 90 });
  const skyCTransition = useSpring(skyC, { stiffness: 400, damping: 90 });
  const skyDTransition = useSpring(skyD, { stiffness: 400, damping: 90 });

  return (
    <PresentationWrapper>
      <PresentationTitle paragraph variant="h1" weight={400}>
        V<span>3.0</span> is now live!
      </PresentationTitle>
      <PresentationDescription italic variant="h3" weight={400}>
        All animation css is a set of css animations that will bring life to
        your project.
      </PresentationDescription>

      <TriangleMotion index={2} style={{ translateY: bigTriangle }}>
        <BigTriangle />
      </TriangleMotion>

      <TriangleMotion index={1} style={{ translateY: smallTriangle }}>
        <SmallTriangle />
      </TriangleMotion>

      <SkyMotion top="7rem" right="40%" style={{ translateX: skyATransition }}>
        <Sky delay={0.5} speed={5} />
      </SkyMotion>

      <SkyMotion top="12rem" right="13%" style={{ translateX: skyBTransition }}>
        <Sky delay={1.5} speed={7} />
      </SkyMotion>

      <SkyMotion top="18rem" right="30%" style={{ translateX: skyCTransition }}>
        <Sky delay={5} speed={6} />
      </SkyMotion>

      <SkyMotion top="27rem" left="15%" style={{ translateX: skyDTransition }}>
        <Sky delay={2} speed={10} />
      </SkyMotion>
    </PresentationWrapper>
  );
}

export default Presentation;
