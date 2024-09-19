import React, { useState } from 'react';
import {
  CardStyled,
  PopoverStyled,
  PopoverContainerStyled,
  CardContainerStyled,
  DonatedContainerStyled,
} from './Card.styled';
import { ButtonStyled, CloseIconButtonStyled } from '../Button/Button.styled';
import { ImageStyled } from '../Image/Image.styled';
import { CharitiesType } from '../../utils/type';
import { RadioInput } from '../Radio';
import { Icon } from '@iconify/react';
import Typography from '../Typography';
import { LoadingStyled } from '../Loading/Loading.styled';

interface Props {
  data: CharitiesType;
  handlePay: (id: number, amount: number, currency: string) => Promise<void>;
  active: boolean;
  handleClose: () => void;
  handleOpen: (id: number) => void;
}

const Card = ({ data, handlePay, active, handleClose, handleOpen }: Props) => {
  const [selectedAmount, setSelectedAmount] = useState(0);
  const [loading, setLoading] = useState(false);

  const payments = [10, 20, 50, 100, 500];

  const handleDonateButton = (id: number, amount: number, currency: string) => {
    setLoading(true);
    setTimeout(() => {
      handleClose();
      handlePay(id, amount, currency);
      setLoading(false);
    }, 500);
  };

  const handleChange = (e: React.MouseEvent<HTMLElement>) => {
    const { value } = e.target as HTMLInputElement;
    setSelectedAmount(Number(value));
  };
  return (
    <CardStyled>
      {active && (
        <PopoverStyled>
          <PopoverContainerStyled>
            <CloseIconButtonStyled onClick={handleClose}>
              <Icon icon="ic:baseline-close" width="24" height="24" />
            </CloseIconButtonStyled>

            <Typography tag="h4" fontWeight={400} color="#657084">
              Select the amount to donate ({data.currency})
            </Typography>
            <DonatedContainerStyled>
              {payments.map((amount, index) => (
                <RadioInput
                  key={index}
                  amount={amount}
                  handleChange={handleChange}
                />
              ))}
            </DonatedContainerStyled>
            <ButtonStyled
              onClick={() =>
                handleDonateButton(data.id, selectedAmount, data.currency)
              }
            >
              {loading ? <LoadingStyled /> : 'Pay'}
            </ButtonStyled>
          </PopoverContainerStyled>
        </PopoverStyled>
      )}
      <>
        <ImageStyled src={`/images/${data.image}`} />
        <CardContainerStyled>
          <Typography tag="h4" fontWeight={400}>
            {data.name}
          </Typography>

          <ButtonStyled onClick={() => handleOpen(data.id)}>
            Donate
          </ButtonStyled>
        </CardContainerStyled>
      </>
    </CardStyled>
  );
};

export default Card;
