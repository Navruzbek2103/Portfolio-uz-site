import { useContext } from "react";
import { orderContext } from "./../context/context";

export const useCustom = () => {
  return useContext(orderContext);
};
