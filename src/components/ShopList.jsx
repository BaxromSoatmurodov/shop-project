import ShopItem from "./ShopItem";
export default function ShopList(props) {
  const { order, Increment, Decrement } = props;
  const TotalPrice = order.reduce((sum, el) => {
    return (sum += el.price * el.quantity);
  }, 0);
  return (
    <div className="parent-basket">
      <ul className="collection collection-list">
        <li className="collection-item active">Backet</li>
        {order.length ? (
          order.map((item) => {
            return (
              <ShopItem
                key={item.id}
                {...item}
                Increment={Increment}
                Decrement={Decrement}
                RemoveOrderFromBasket={props.RemoveOrderFromBasket}
              />
            );
          })
        ) : (
          <li className="collection-item">Shoplist is empty</li>
        )}
        <li className="collection-item active">
          Total price: {TotalPrice} <b>$</b>
        </li>
        <i className="material-icons basket-close" onClick={props.BasketShop}>
          close
        </i>
      </ul>
    </div>
  );
}
