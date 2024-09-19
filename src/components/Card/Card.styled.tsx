import styled from 'styled-components';

export const CardStyled = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.25);
  overflow: hidden;
  position: relative;
`;

export const PopoverStyled = styled.div`
  width: 100%;
  height: 100%;
  background-color: white;
  opacity: 0.9;
  position: absolute;
`;

export const PopoverContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  height: 100%;
  row-gap: 16px;
  position: relative;
`;

export const CardContainerStyled = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
`;

export const DonatedContainerStyled = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
`;
