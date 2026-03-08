import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ShapeCanvas, ShapeLayer, InnerShape } from "./styled";

const GeometricShape = ({ className = "" }) => {
  const containerRef = useRef(null);
  const outerRef = useRef(null);
  const midRef = useRef(null);
  const innerRef = useRef(null);
  const coreRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Perpetual rotation - each layer spins at different speeds
      gsap.to(outerRef.current, {
        rotation: 360,
        duration: 20,
        repeat: -1,
        ease: "none",
      });

      gsap.to(midRef.current, {
        rotation: -360,
        duration: 14,
        repeat: -1,
        ease: "none",
      });

      gsap.to(innerRef.current, {
        rotation: 360,
        duration: 9,
        repeat: -1,
        ease: "none",
      });

      // Core pulsing
      gsap.to(coreRef.current, {
        scale: 1.15,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // Floating motion on the whole container
      gsap.to(containerRef.current, {
        y: -12,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <ShapeCanvas ref={containerRef} className={className}>
      {/* Outer octagon ring */}
      <ShapeLayer ref={outerRef} size="100%">
        <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <polygon
            points="60,10 140,10 190,60 190,140 140,190 60,190 10,140 10,60"
            stroke="rgba(0,255,106,0.3)"
            strokeWidth="1"
            fill="none"
          />
          <polygon
            points="70,20 130,20 180,70 180,130 130,180 70,180 20,130 20,70"
            stroke="rgba(0,212,255,0.15)"
            strokeWidth="0.5"
            fill="none"
          />
        </svg>
      </ShapeLayer>

      {/* Mid diamond ring */}
      <ShapeLayer ref={midRef} size="72%">
        <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect
            x="29"
            y="29"
            width="142"
            height="142"
            rx="4"
            transform="rotate(45 100 100)"
            stroke="rgba(0,255,106,0.25)"
            strokeWidth="1"
            fill="none"
          />
          <rect
            x="40"
            y="40"
            width="120"
            height="120"
            rx="2"
            transform="rotate(45 100 100)"
            stroke="rgba(0,212,255,0.12)"
            strokeWidth="0.5"
            fill="none"
          />
        </svg>
      </ShapeLayer>

      {/* Inner triangle ring */}
      <ShapeLayer ref={innerRef} size="50%">
        <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <polygon
            points="100,20 180,170 20,170"
            stroke="rgba(0,255,106,0.35)"
            strokeWidth="1.5"
            fill="none"
          />
          <polygon
            points="100,45 160,155 40,155"
            stroke="rgba(0,212,255,0.15)"
            strokeWidth="0.5"
            fill="none"
          />
        </svg>
      </ShapeLayer>

      {/* Glowing core */}
      <InnerShape ref={coreRef} />
    </ShapeCanvas>
  );
};

export default GeometricShape;
