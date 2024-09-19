import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { summaryDonations } from './helpers';
import { StoreStateType, PaymentType } from './utils/type';
import Card from './components/Card';
import { GridStyled } from './components/Grid/Grid.styled';
import {
  ContainerStyled,
  HeaderContainerStyled,
} from './components/Container/Container.styled';
import Typography from './components/Typography';
import { useSnackbar } from 'notistack';
const App = () => {
  const dispatch = useDispatch();
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const donate = useSelector<StoreStateType>((state) => state.donate);
  const [charitiesList, setCharitiesList] = useState([]);
  const [active, setActive] = useState(-1);

  const handleOpen = (id: number) => {
    setActive(id);
  };

  const handleClose = () => {
    setActive(-1);
  };

  const fetchCharityData = async () => {
    const response = await axios.get('http://localhost:3001/charities');
    setCharitiesList(response.data);
  };

  const fetchDonationAmount = async () => {
    const paymentResponse = await axios.get('http://localhost:3001/payments');

    dispatch({
      type: 'UPDATE_TOTAL_DONATE',
      amount:
        summaryDonations(
          paymentResponse.data.map((item: PaymentType) => item.amount)
        ) - ((donate as number) || 0),
    });
  };

  const handlePay = async (id: number, amount: number, currency: string) => {
    const { name } = charitiesList.find((item) => {
      return item.id === id;
    });
    const response = await axios.post('http://localhost:3001/payments', {
      charitiesId: id,
      amount: amount,
      currency: currency,
    });

    enqueueSnackbar(`You have donated ${name} for ${amount} ${currency}!`, {
      variant: 'success',
      autoHideDuration: 3000,
      anchorOrigin: { horizontal: 'right', vertical: 'top' },
    });
    fetchDonationAmount();
  };

  useEffect(() => {
    fetchCharityData();
    fetchDonationAmount();
  }, []);

  console.log('🚀 ~ App ~ charitiesList:', charitiesList);

  return (
    <ContainerStyled>
      <HeaderContainerStyled>
        <Typography tag="h1" color="#657084" margin={0}>
          Omise Tamboon React
        </Typography>
        <Typography tag="h2" margin={0}>
          All donations: {donate as string}
        </Typography>
      </HeaderContainerStyled>

      <GridStyled>
        {charitiesList?.map((e, i) => {
          return (
            <Card
              key={i}
              data={e}
              handlePay={handlePay}
              active={active === e.id}
              handleClose={handleClose}
              handleOpen={handleOpen}
            />
          );
        })}
      </GridStyled>
    </ContainerStyled>
  );
};

export default App;
