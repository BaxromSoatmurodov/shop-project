import { useContext } from "react";
import { ShopContext } from "../Context";
import "../App.css";
export default function Cart() {
  const { order, BasketShop = Function.prototype } = useContext(ShopContext);
  const quantity = order.length;
  return (
    <div className="Cart blue darken-4 white-text" onClick={() => BasketShop()}>
      <i class="size material-icons">add_shopping_cart</i>
      {quantity ? <span className="cart-quantity">{quantity}</span> : null}
    </div>
  );
}
