import { createElement } from 'react';

import styled from 'styled-components';

export const DynamicTypography = styled(({ tag, children, ...props }) =>
  createElement(tag, props, children)
)`
  font-family: prompt;
  margin: 0;

  @media (min-width: 600px) {
    h1 {
        font-size: 200px;
    }
  }
`;
