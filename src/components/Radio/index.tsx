import React from 'react';
import { RadioLabelStyled, RadioInputStyled } from '../Radio/Radio.styled';
import Typography from '../Typography';

interface Props {
  amount: number;
  handleChange: (e: React.MouseEvent<HTMLElement>) => void;
}

export const RadioInput = ({ amount, handleChange }: Props) => {
  return (
    <RadioLabelStyled>
      <RadioInputStyled
        type="radio"
        name="payment"
        value={amount}
        onClick={handleChange}
        style={{
          margin: 0,
        }}
      />
      <Typography tag="h5" fontWeight={400} margin={0} verticalAlign="middle">
        {amount}
      </Typography>
    </RadioLabelStyled>
  );
};
