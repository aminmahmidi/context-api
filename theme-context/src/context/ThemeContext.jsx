import React, { createContext, useState } from "react";

const MyContext = createContext(null);

const MyProvider = ({ children }) => {
  const [state, setState] = useState('hello');

  return (
    <MyContext.Provider value={{ state, setState }}>
      {children}
    </MyContext.Provider>
  );
};

export { MyProvider, MyContext };
