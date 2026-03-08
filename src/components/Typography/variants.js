import { css } from "styled-components";

const typographyVariants = {
  h1: ({ theme }) => css`
    font-family: ${theme.fonts.display};
    font-weight: 700;
    font-size: 104px;
    line-height: 0.95;
    letter-spacing: -0.04em;

    ${theme.utils.media.tablet`
      font-size: 68px;
    `}

    ${theme.utils.media.phone`
      font-size: 48px;
      letter-spacing: -0.03em;
    `}
  `,
  h2: ({ theme }) => css`
    font-family: ${theme.fonts.display};
    font-weight: 700;
    font-size: 56px;
    line-height: 1.1;
    letter-spacing: -0.02em;

    ${theme.utils.media.tablet`
      font-size: 40px;
    `}
  `,
  h3: ({ theme }) => css`
    font-family: ${theme.fonts.display};
    font-weight: 600;
    font-size: 32px;
    line-height: 1.3;
    letter-spacing: -0.01em;

    ${theme.utils.media.tablet`
      font-size: 26px;
    `}
  `,
  h4: () => css`
    font-weight: 600;
    font-size: 24px;
    line-height: 1.4;
  `,
  h5: () => css`
    font-weight: 500;
    font-size: 18px;
    line-height: 1.5;
  `,
  h6: () => css`
    font-weight: 500;
    font-size: 16px;
    line-height: 1.5;
  `,
  body: () => css`
    font-size: 16px;
    line-height: 1.6;
  `,
  body2: () => css`
    font-size: 18px;
    line-height: 1.6;
  `,
};

const spanColorVariants = {
  primary: ({ theme }) => css`
    color: ${theme.colors.secondary.light};
  `,
  dark: ({ theme }) => css`
    color: ${theme.colors.primary};
  `,
  white: ({ theme }) => css`
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
  white: ({ theme }) => css`
    color: ${theme.colors.primary};

    &:hover {
      box-shadow: 0 2px 0 ${theme.colors.primary};
    }
  `,
};

export const getSpanColorVariant = ({ color = "dark", ...props }) =>
  spanColorVariants[color] && spanColorVariants[color](props);

export const getLinkColorVariant = ({ color = "dark", ...props }) =>
  linkColorVariants[color] && linkColorVariants[color](props);

export const getTypographyVariants = ({ variant = "body", ...props }) =>
  typographyVariants[variant] && typographyVariants[variant](props);
