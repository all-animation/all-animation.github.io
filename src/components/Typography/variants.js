import { css } from "styled-components";

const typographyVariants = {
  h1: ({ theme }) => css`
    font-weight: 500;
    font-size: 106px;
    line-height: 106px;

    ${theme.utils.media.tablet`
      font-size: 80px;
      line-height: 74px;
    `}
  `,
  h2: ({ theme }) => css`
    font-weight: 500;
    font-size: 64px;

    ${theme.utils.media.tablet`
      font-size: 44px;
    `}
  `,
  h3: ({ theme }) => css`
    font-weight: 500;
    line-height: 50px;
    font-size: 36px;

    ${theme.utils.media.tablet`
      line-height: 45px;
      font-size: 32px;
    `}
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
  // Based on MUI palette definition
  body2: () => css`
    font-size: 18px;
  `,
};

const spanColorVariants = {
  primary: ({ theme }) => css`
    color: ${theme.colors.secondary.light};
  `,
  dark: ({ theme }) => css`
    color: ${theme.colors.primary};
  `,
};

const linkColorVariants = {
  primary: ({ theme }) => css`
    color: ${theme.colors.secondary.light};

    &:hover {
      box-shadow: 0 2px 0 ${theme.colors.secondary.light};
    }
  `,
  dark: ({ theme }) => css`
    color: ${theme.colors.secondary.light};

    &:hover {
      box-shadow: 0 2px 0 ${theme.colors.secondary.light};
    }
  `,
};

export const getSpanColorVariant = ({ color = "dark", ...props }) =>
  spanColorVariants[color] && spanColorVariants[color](props);

export const getLinkColorVariant = ({ color = "dark", ...props }) =>
  linkColorVariants[color] && linkColorVariants[color](props);

export const getTypographyVariants = ({ variant = "body", ...props }) =>
  typographyVariants[variant] && typographyVariants[variant](props);
