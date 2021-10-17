import React from "react";
import { TypographText } from "./styled";

function Typography({
  as,
  className,
  href,
  children,
  weight,
  color,
  variant,
  italic,
  paragraph,
}) {
  return (
    <TypographText
      italic={italic}
      className={className}
      weight={weight}
      color={color}
      variant={variant}
      paragraph={paragraph}
      href={href}
      as={as}
    >
      {children}
    </TypographText>
  );
}

export default Typography;
