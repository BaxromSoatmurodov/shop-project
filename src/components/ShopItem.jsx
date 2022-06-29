export default function ShopItem(props) {
  const { id, name, price, quantity, Increment, Decrement } = props;
  return (
    <li className="collection-item">
      {name} X {quantity} = {price * quantity} <b>$</b>
      <span
        className="secondary-content"
        onClick={(e) => {
          e.preventDefault();
        }}
      >
        <i
          class="material-icons"
          onClick={() => Increment(id)}
          style={{ cursor: "pointer" }}
        >
          add
        </i>
        <i
          class="material-icons"
          onClick={() => Decrement(id)}
          style={{ cursor: "pointer" }}
        >
          remove
        </i>
        <i
          className="material-icons close-btn"
          onClick={() => props.RemoveOrderFromBasket(id)}
        >
          close
        </i>
      </span>
    </li>
  );
}
