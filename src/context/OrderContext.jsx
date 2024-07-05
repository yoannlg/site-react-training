import { createContext } from "react";

export const OrderContext = createContext({
  isAdmin: false,
  setIsAdmin: () => {},
});
