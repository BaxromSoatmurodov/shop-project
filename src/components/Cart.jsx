import "../App.css";
export default function Cart(props) {
  const { quantity = 0, BasketShop = Function.prototype } = props;
  return (
    <div className="Cart blue darken-4 white-text" onClick={() => BasketShop()}>
      <i class="size material-icons">add_shopping_cart</i>
      {quantity ? <span className="cart-quantity">{quantity}</span> : null}
    </div>
  );
}
