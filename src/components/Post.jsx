import { useState, useEffect } from "react";
import { API_URl, API_KEY } from "./config";
import Preloader from "./Preloader";
import PostList from "./PostList";
import Cart from "./Cart";
import { toast } from "react-toastify";

import ShopList from "./ShopList";

export default function Post() {
  const [Goods, setGoods] = useState([]);
  const [loading, setLoading] = useState(true);
  const [order, setOrder] = useState([]);
  const [isBasketShop, setBasketShop] = useState(false);
  const BasketShop = () => {
    setBasketShop(!isBasketShop);
  };
  const addtoBacket = (item) => {
    const ItemIndex = order.findIndex((orderItem) => orderItem.id === item.id);
    if (ItemIndex < 0) {
      const newItem = {
        ...item,
        quantity: 1,
      };
      setOrder([...order, newItem]);
    } else {
      const newOrder = order.map((orderItem, index) => {
        if (index === ItemIndex) {
          return {
            ...orderItem,
            quantity: orderItem.quantity + 1,
          };
        } else {
          return orderItem;
        }
      });
      setOrder(newOrder);
    }
    toast.success("Order added into Basket!");
  };
  const Increment = (itemID) => {
    const newOrder = order.map((item) => {
      if (item.id === itemID) {
        const newQuantity = item.quantity + 1;
        return {
          ...item,
          quantity: newQuantity,
        };
      } else {
        return item;
      }
    });
    setOrder(newOrder);
  };
  const Decrement = (itemID) => {
    const newOrder = order.map((item) => {
      if (item.id === itemID) {
        const newQuantity = item.quantity - 1;
        return {
          ...item,
          quantity: newQuantity >= 0 ? newQuantity : 0,
        };
      } else {
        return item;
      }
    });
    setOrder(newOrder);
  };
  const RemoveOrderFromBasket = (ItemID) => {
    const newOrder = order.filter((item) => item.id !== ItemID);
    setOrder(newOrder);
    toast.error("Remove Order from Basket!");
  };
  useEffect(() => {
    fetch(API_URl, {
      headers: {
        Authorization: API_KEY,
      },
    })
      .then((Response) => Response.json())
      .then((data) => {
        data.featured && setGoods(data.featured);
        setLoading(false);
      });
  }, []);
  return (
    <div className="container content">
      <Cart quantity={order.length} BasketShop={BasketShop} />
      {loading ? (
        <Preloader />
      ) : (
        <PostList Goods={Goods} addtoBacket={addtoBacket} />
      )}
      {isBasketShop && (
        <ShopList
          order={order}
          BasketShop={BasketShop}
          RemoveOrderFromBasket={RemoveOrderFromBasket}
          Increment={Increment}
          Decrement={Decrement}
        />
      )}
    </div>
  );
}
