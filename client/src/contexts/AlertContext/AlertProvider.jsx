
import { createContext, useState } from 'react';
import AlertContext from './AlertContext';

const ALERT_TIME = 5000;
export const AlertProvider = (props) => {
    const { children } = props;
    const [text, setText] = useState('');
    const [type, setType] = useState('');
  
    const setAlert = (text, type) => {
      setText(text);
      setType(type);
  
      setTimeout(() => {
        setText('');
        setType('');
      }, ALERT_TIME);
    };
  
    return (
      <AlertContext.Provider
        value={{
          text,
          type,
          setAlert,
        }}
      >
        {children}
      </AlertContext.Provider>
    );
  };
  export default AlertProvider