import styled from 'styled-components';

export const GridStyled = styled.div`
  display: grid;
  grid-gap: 32px;
  grid-template-columns: none;
  @media (min-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;
