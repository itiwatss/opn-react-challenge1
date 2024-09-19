import styled from 'styled-components';

export const ButtonStyled = styled.button`
  border: 1px solid rgba(25, 118, 210, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  height: 25px;
  border-radius: 4px;
  background-color: white;
  color: #1976d2;
  padding: 16px 8px;
  font-size: 16px;
  font-family: prompt;
  cursor: pointer;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;

  &:hover {
    background: rgba(25, 118, 210, 0.04);
    border-color: #1976d2;
  }
`;

export const CloseIconButtonStyled = styled.div`
  top: 4%;
  right: 3%;
  position: absolute;
  cursor: pointer;
`;
