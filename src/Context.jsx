import { createContext, useReducer } from "react";
import { reducer } from "./reducer";
export const ShopContext = createContext();

const initialState = {
  goods: [],
  loading: true,
  order: [],
  isBasketShop: false,
};

export const ContextProvider = ({ children }) => {
  const [value, dispatch] = useReducer(reducer, initialState);
  value.AddToBacket = (item) => {
    dispatch({ type: "AddToBacket", payload: item });
  };
  value.Increment = (itemID) => {
    dispatch({ type: "Increment", payload: { id: itemID } });
  };
  value.Decrement = (itemID) => {
    dispatch({ type: "Decrement", payload: { id: itemID } });
  };
  value.BasketShop = () => {
    dispatch({ type: "BasketShop" });
  };
  value.RemoveOrderFromBasket = (itemID) => {
    dispatch({ type: "RemoveOrderFromBasket", payload: { id: itemID } });
  };
  value.SetGoods = (data) => {
    dispatch({ type: "SetGoods", payload: data });
  };
  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};
