import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './App';
import { ActionStoreType, ActionType, StoreStateType } from './utils/type';
import { SnackbarProvider } from 'notistack';
import { StyledMaterialDesignContent } from './components/Snackbars/Snackbar.styled';

const store = createStore(function (
  state: StoreStateType,
  action: ActionStoreType
) {
  const _state: StoreStateType =
    state == null
      ? {
          donate: 0,
          message: '',
        }
      : state;

  switch (action.type) {
    case ActionType.UPDATE_TOTAL_DONATE:
      return Object.assign({}, _state, {
        donate: _state.donate + action.amount,
      });
    case ActionType.UPDATE_MESSAGE:
      return Object.assign({}, _state, {
        message: action.message,
      });

    default:
      return _state;
  }
});

render(
  <Provider store={store}>
    <SnackbarProvider
      Components={{
        success: StyledMaterialDesignContent,
        error: StyledMaterialDesignContent,
      }}
    >
      <App />
    </SnackbarProvider>
  </Provider>,
  document.getElementById('root')
);
