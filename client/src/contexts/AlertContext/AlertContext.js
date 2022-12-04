import { createContext, useState } from 'react';

const ALERT_TIME = 5000;

const initialState = {
  text: '',
  type: '',
};

const AlertContext = createContext({
  ...initialState,
  setAlert: () => {},
});

export default AlertContext