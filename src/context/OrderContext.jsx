import { createContext } from "react";

export const OrderContext = createContext({
  isAdmin: false,
  setIsAdmin: () => {},
  isCollapsed: false,
  setIsCollapsed: () => {},
  isAddTabActive: false,
  setIsAddTabActive: () => {},
  isEditTabActive: false,
  setIsEditTabActive: () => {},
});
