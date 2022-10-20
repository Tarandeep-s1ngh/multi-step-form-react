import { createContext, useContext, useState } from "react";

const DataContext = createContext(null);

const DataProvider = ({ children }) => {
  const [dataState, setDataState] = useState({
    step1: {
      active: true,
      email: "",
      emailError: false,
      password: "",
      passwordError: false,
      confirmPassword: "",
      confirmPasswordError: false,
      rememberMe: false,
    },
    step2: {
      active: false,
      name: "",
      gender: "",
      DOB: "",
      phone: 0,
    },
    step3: {
      active: false,
      address: "",
      flightInfo: "",
    },
  });

  return (
    <DataContext.Provider value={{ dataState, setDataState }}>
      {children}
    </DataContext.Provider>
  );
};

const useData = () => useContext(DataContext);

export { DataProvider, useData };
