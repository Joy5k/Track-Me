// BalanceContext.js
import  { createContext, useState } from 'react';

const AmountContext = createContext();

const AmountProvider = ({children}) => {
  const [balance, setBalance] = useState(500);

  return (
    <AmountContext.Provider value={{ balance, setBalance }}>
      {children}
    </AmountContext.Provider>
  );
};

export { AmountContext, AmountProvider };
