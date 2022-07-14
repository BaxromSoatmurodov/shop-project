import { useContext } from "react";
import { ShopContext } from "../Context";
import ShopItem from "./ShopItem";
export default function ShopList() {
  const { order = [], BasketShop = Function.prototype } =
    useContext(ShopContext);
  const TotalPrice = order.reduce((sum, el) => {
    return (sum += el.price * el.quantity);
  }, 0);
  return (
    <div className="parent-basket">
      <ul className="collection collection-list">
        <li className="collection-item active">Backet</li>
        {order.length ? (
          order.map((item) => {
            return <ShopItem key={item.id} {...item} />;
          })
        ) : (
          <li className="collection-item">Shoplist is empty</li>
        )}
        <li className="collection-item active">
          Total price: {TotalPrice} <b>$</b>
        </li>
        <i className="material-icons basket-close" onClick={BasketShop}>
          close
        </i>
      </ul>
    </div>
  );
}
