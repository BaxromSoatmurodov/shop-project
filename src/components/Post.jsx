import { useEffect, useContext } from "react";
import { ShopContext } from "../Context";
import { API_URl, API_KEY } from "./config";
import Preloader from "./Preloader";
import PostList from "./PostList";
import Cart from "./Cart";
import ShopList from "./ShopList";

export default function Post() {
  const { SetGoods, loading, order, isBasketShop } = useContext(ShopContext);

  useEffect(() => {
    fetch(API_URl, {
      headers: {
        Authorization: API_KEY,
      },
    })
      .then((Response) => Response.json())
      .then((data) => {
        SetGoods(data.featured);
      });
  });
  return (
    <div className="container content">
      <Cart quantity={order.length} />
      {loading ? <Preloader /> : <PostList />}
      {isBasketShop && <ShopList />}
    </div>
  );
}
