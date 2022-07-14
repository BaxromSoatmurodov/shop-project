import { useContext } from "react";
import { ShopContext } from "../Context";
import "../App.css";
export default function PostItem(props) {
  const { id, image, price, name, description } = props;
  const { AddToBacket } = useContext(ShopContext);
  return (
    <div className="col s12 m6">
      <div className="card" id={id}>
        <div className="card-image">
          <img alt={name} src={image} />
        </div>
        <div className="card-content">
          <span className="card-title">{description}</span>
          <div className="card-action">
            <button
              className="btn"
              onClick={() => AddToBacket({ id, name, price })}
            >
              Buy
            </button>
            <span className="price right">{price}$</span>
          </div>
        </div>
      </div>
    </div>
  );
}
