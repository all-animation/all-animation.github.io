import { css } from "styled-components";

const typographyVariants = {
  h1: () => css`
    font-weight: 500;
    font-size: 106px;
    line-height: 106px;
  `,
  h2: () => css`
    font-weight: 500;
    font-size: 64px;
  `,
  h3: () => css`
    font-weight: 500;
    font-size: 36px;
  `,
  h4: () => css`
    font-weight: 500;
    font-size: 28px;
  `,
  h5: () => css`
    font-weight: 500;
    font-size: 24px;
  `,
  h6: () => css`
    font-weight: 500;
    font-size: 21px;
  `,
  body: () => css`
    font-size: 16px;
  `,
};

const spanColorVariants = {
  primary: ({ theme }) => css`
    color: ${theme.colors.secondary};
  `,
  dark: ({ theme }) => css`
    color: ${theme.colors.primary};
  `,
};

export const getSpanColorVariant = ({ color = "dark", ...props }) =>
  spanColorVariants[color] && spanColorVariants[color](props);

export const getTypographyVariants = ({ variant = "body", ...props }) =>
  typographyVariants[variant] && typographyVariants[variant](props);
