import React, { ReactNode, CSSProperties } from 'react';

import { DynamicTypography } from './Typography.styled';

// Type/Interface to avoid unwanted tags such as 'divs' e.g.
type TagVariants = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';

type TypographyProps = {
  tag?: TagVariants;
  children: ReactNode;
};

/**
 * @tag will have default 'p' since it'll probably be our most used tag
 */
const Typography = ({
  tag = 'p',
  children,
  ...props
}: TypographyProps & CSSProperties) => (
  <DynamicTypography tag={tag} style={{ ...props }}>{children}</DynamicTypography>
);

export default Typography;
