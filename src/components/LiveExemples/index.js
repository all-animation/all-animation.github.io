import React, { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Arrow from "./icon/arrow";

import Button from "../Button";
import GeometricShape from "../GeometricShape";

import {
  LiveWrapper,
  LiveContainer,
  LiveTitle,
  ButtonWrapper,
  ImageContainer,
  OutlineWrapper,
  OutlineButton,
} from "./styled";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const LiveExemples = () => {
  const [animation, setAnimation] = useState("");
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const shapeRef = useRef(null);
  const buttonsRef = useRef(null);
  const outlineRef = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=120%",
          pin: true,
          pinSpacing: true,
          scrub: 1,
        },
      });

      // Title drops in
      tl.from(titleRef.current, {
        y: 80,
        opacity: 0,
        duration: 0.3,
        ease: "power3.out",
      })
        // Shape scales in with rotation
        .from(
          shapeRef.current,
          {
            scale: 0.2,
            opacity: 0,
            rotation: -120,
            duration: 0.4,
            ease: "back.out(1.2)",
          },
          "-=0.1"
        )
        // Buttons stagger in
        .from(
          buttonsRef.current.children,
          {
            y: 40,
            opacity: 0,
            duration: 0.2,
            stagger: 0.08,
            ease: "power2.out",
          },
          "-=0.2"
        )
        // Outline link
        .from(
          outlineRef.current,
          {
            y: 20,
            opacity: 0,
            duration: 0.15,
          },
          "-=0.1"
        )
        // Hold everything visible
        .to({}, { duration: 0.3 });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <LiveWrapper ref={sectionRef}>
      <LiveContainer>
        <div ref={titleRef}>
          <LiveTitle variant="h2" forwardAs="h2" weight={400}>
            <span>Live</span> Exemples
          </LiveTitle>
        </div>

        <ImageContainer ref={shapeRef}>
          <GeometricShape className={animation} />
        </ImageContainer>

        <div ref={buttonsRef}>
          <ButtonWrapper>
            <Button label="a-dance" onClick={() => setAnimation("a-dance")} />
            <Button
              label="a-journal"
              onClick={() => setAnimation("a-journal")}
            />
            <Button label="a-pulse" onClick={() => setAnimation("a-pulse")} />
            <Button
              label="a-jello-vertical"
              onClick={() => setAnimation("a-jello-vertical")}
            />
            <Button
              label="a-jello-horizontal"
              onClick={() => setAnimation("a-jello-horizontal")}
            />
          </ButtonWrapper>
          <ButtonWrapper>
            <Button
              label="a-pulse-slow"
              onClick={() => setAnimation("a-pulse-slow")}
            />
            <Button
              label="a-enter up bounce"
              onClick={() => setAnimation("a-enter-up-bounce")}
            />
            <Button
              label="a-enter down bounce"
              onClick={() => setAnimation("a-enter-down-bounce")}
            />
            <Button
              label="a-enter right bounce"
              onClick={() => setAnimation("a-enter-right-bounce")}
            />
          </ButtonWrapper>
          <ButtonWrapper>
            <Button label="a-jamp" onClick={() => setAnimation("a-jamp")} />
            <Button
              label="a-four rock"
              onClick={() => setAnimation("a-four-rock")}
            />
            <Button
              label="a-jump bounce"
              onClick={() => setAnimation("a-jump-bounce")}
            />
            <Button
              label="a-scale bounce"
              onClick={() => setAnimation("a-scale-bounce")}
            />
          </ButtonWrapper>
        </div>

        <div ref={outlineRef}>
          <OutlineWrapper>
            <OutlineButton href="/animations">
              View all animations
            </OutlineButton>
            <Arrow />
          </OutlineWrapper>
        </div>
      </LiveContainer>
    </LiveWrapper>
  );
};

export default LiveExemples;
