import React from "react";
import { TypographText } from "./styled";

function Typography({
  as,
  className,
  href,
  children,
  id,
  weight,
  color,
  variant,
  italic,
  paragraph,
}) {
  return (
    <TypographText
      id={id}
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
