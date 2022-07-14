import { toast } from "react-toastify";
export function reducer(state, { type, payload }) {
  switch (type) {
    case "Increment":
      return {
        ...state,
        order: state.order.map((item) => {
          if (item.id === payload.id) {
            const newQuantity = item.quantity + 1;
            return {
              ...item,
              quantity: newQuantity,
            };
          } else {
            return item;
          }
        }),
      };
    case "Decrement":
      return {
        ...state,
        order: state.order.map((item) => {
          if (item.id === payload.id) {
            const newQuantity = item.quantity - 1;
            return {
              ...item,
              quantity: newQuantity >= 0 ? newQuantity : 0,
            };
          } else {
            return item;
          }
        }),
      };
    case "BasketShop":
      return {
        ...state,
        isBasketShop: !state.isBasketShop,
      };
    case "RemoveOrderFromBasket":
      toast.error("Order remove from Basket successfully", {
        position: toast.POSITION.TOP_LEFT,
        autoClose: 700,
      });
      return {
        ...state,
        order: state.order.filter((item) => item.id !== payload.id),
      };
    case "SetGoods":
      return {
        ...state,
        goods: payload,
        loading: false,
      };
    case "AddToBacket": {
      const ItemIndex = state.order.findIndex(
        (orderItem) => orderItem.id === payload.id
      );
      let newOrder = null;
      if (ItemIndex < 0) {
        const newItem = {
          ...payload,
          quantity: 1,
        };
        newOrder = [...state.order, newItem];
      } else {
        newOrder = state.order.map((orderItem, index) => {
          if (index === ItemIndex) {
            return {
              ...orderItem,
              quantity: orderItem.quantity + 1,
            };
          } else {
            return orderItem;
          }
        });
      }
      console.log("hello world");
      toast.success("Order added into Basket successfully", {
        position: toast.POSITION.TOP_LEFT,
        autoClose: 700,
      });
      return {
        ...state,
        order: newOrder,
      };
    }

    default:
      return state;
  }
}
