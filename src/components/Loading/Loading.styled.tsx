import styled from 'styled-components';

export const LoadingStyled = styled.span`
  width: 16px;
  height: 16px;
  margin: 0px 16px;
  border: 1px solid #1976d2;
  border-bottom-color: transparent;
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
