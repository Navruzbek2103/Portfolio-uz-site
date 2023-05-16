import { createContext, useReducer, useContext, useEffect } from "react";
import { reducers } from "./reducer";
const orderContext = createContext({});

const initialState = {
  profile: false,
};

export const PortfolioProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducers, initialState);

  return (
    <orderContext.Provider value={{ state, dispatch }}>
      {children}
    </orderContext.Provider>
  );
};

export default orderContext;

export const usePortfolio = () => {
  return useContext(orderContext);
};
