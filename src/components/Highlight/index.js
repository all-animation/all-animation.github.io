import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import {
  HighlightWrapper,
  HighlightTitle,
  HighlightDescription,
  HighlightContainer,
  AdSection,
  AdLabel,
  AdContainer,
} from "./styled";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const Highlight = ({ title, children }) => {
  const wrapperRef = useRef(null);
  const titleRef = useRef(null);
  const descRef = useRef(null);
  const adRef = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Initialize the ad
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      // Ad blocker or network issue — fail silently
    }

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
        .from(
          adRef.current,
          {
            y: 30,
            opacity: 0,
            duration: 0.3,
            ease: "power2.out",
          },
          "-=0.15"
        )
        .to({}, { duration: 0.3 })
        .to([titleRef.current, descRef.current, adRef.current], {
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

        <AdSection ref={adRef}>
          <AdLabel>
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
            This helps us keep improving all-animation
          </AdLabel>
          <AdContainer>
            <ins
              className="adsbygoogle"
              style={{
                display: "block",
                width: "100%",
                maxWidth: "728px",
              }}
              data-ad-client="ca-pub-1694357110489226"
              data-ad-slot="9767889082"
              data-ad-format="auto"
              data-full-width-responsive="true"
            />
          </AdContainer>
        </AdSection>
      </HighlightContainer>
    </HighlightWrapper>
  );
};

export default Highlight;
