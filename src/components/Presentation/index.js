import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  PresentationWrapper,
  PresentationTitle,
  PresentationDescription,
  HeroCTA,
  HeroPrimaryButton,
  HeroSecondaryButton,
  FloatingShape,
  GridOverlay,
  VersionBadge,
  PresentationContent,
} from "./styled";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

function Presentation() {
  const wrapperRef = useRef(null);
  const contentRef = useRef(null);
  const badgeRef = useRef(null);
  const titleRef = useRef(null);
  const descRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const ctx = gsap.context(() => {
      // Entrance timeline — plays immediately on load
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(badgeRef.current, {
        y: 20,
        opacity: 0,
        duration: 0.6,
      })
        .from(
          titleRef.current,
          { y: 40, opacity: 0, duration: 0.8 },
          "-=0.3"
        )
        .from(
          descRef.current,
          { y: 30, opacity: 0, duration: 0.7 },
          "-=0.4"
        )
        .from(
          ctaRef.current,
          { y: 20, opacity: 0, duration: 0.6 },
          "-=0.3"
        );

      // Pin the hero, fade out content as user scrolls away
      ScrollTrigger.create({
        trigger: wrapperRef.current,
        start: "top top",
        end: "+=60%",
        pin: true,
        pinSpacing: true,
        scrub: true,
        onUpdate: (self) => {
          const progress = self.progress;
          gsap.set(contentRef.current, {
            opacity: 1 - progress * 1.5,
            y: -progress * 80,
            scale: 1 - progress * 0.05,
          });
        },
      });
    }, wrapperRef);

    return () => ctx.revert();
  }, []);

  return (
    <PresentationWrapper ref={wrapperRef}>
      <GridOverlay />

      <FloatingShape top="15%" right="20%" size="80px" speed="7s" delay="0s" />
      <FloatingShape top="60%" right="10%" size="40px" round speed="5s" delay="1s" />
      <FloatingShape top="30%" right="35%" size="50px" speed="9s" delay="3s" />
      <FloatingShape bottom="20%" left="5%" size="60px" round speed="8s" delay="2s" />

      <PresentationContent ref={contentRef}>
        <div ref={badgeRef}>
          <VersionBadge>v3.0 Released</VersionBadge>
        </div>

        <div ref={titleRef}>
          <PresentationTitle paragraph variant="h1" weight={800}>
            Bring your UI <span>to life</span>
          </PresentationTitle>
        </div>

        <div ref={descRef}>
          <PresentationDescription variant="body2" weight={400}>
            A curated set of expressive CSS animations crafted to add motion,
            personality, and delight to any web project. Zero dependencies, pure
            CSS.
          </PresentationDescription>
        </div>

        <div ref={ctaRef}>
          <HeroCTA>
            <HeroPrimaryButton href="/docs/get-started">
              Get Started
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M3 8h10M9 4l4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </HeroPrimaryButton>
            <HeroSecondaryButton
              href="https://github.com/all-animation/all-animation"
              target="_blank"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
              GitHub
            </HeroSecondaryButton>
          </HeroCTA>
        </div>
      </PresentationContent>
    </PresentationWrapper>
  );
}

export default Presentation;
