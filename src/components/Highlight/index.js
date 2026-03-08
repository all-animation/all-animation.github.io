import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import {
  HighlightWrapper,
  HighlightTitle,
  HighlightDescription,
  HighlightContainer,
} from "./styled";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const Highlight = ({ title, children }) => {
  const wrapperRef = useRef(null);
  const titleRef = useRef(null);
  const descRef = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: wrapperRef.current,
          start: "top top",
          end: "+=80%",
          pin: true,
          pinSpacing: true,
          scrub: 0.8,
        },
      });

      // Content starts hidden, scrubs in, holds, then fades out
      tl.from(titleRef.current, {
        x: -80,
        opacity: 0,
        duration: 0.4,
        ease: "power2.out",
      })
        .from(
          descRef.current,
          {
            x: -50,
            opacity: 0,
            duration: 0.4,
            ease: "power2.out",
          },
          "-=0.2"
        )
        // Hold in place
        .to({}, { duration: 0.3 })
        // Fade out as user continues scrolling
        .to([titleRef.current, descRef.current], {
          opacity: 0,
          y: -40,
          duration: 0.3,
          stagger: 0.05,
        });
    }, wrapperRef);

    return () => ctx.revert();
  }, []);

  return (
    <HighlightWrapper ref={wrapperRef}>
      <HighlightContainer>
        <div ref={titleRef}>
          <HighlightTitle color="white" weight="bold" variant="h2">
            {title}
          </HighlightTitle>
        </div>
        <div ref={descRef}>
          <HighlightDescription
            color="white"
            paragraph
            variant="h3"
            weight="400"
          >
            {children}
          </HighlightDescription>
        </div>
      </HighlightContainer>
    </HighlightWrapper>
  );
};

export default Highlight;
