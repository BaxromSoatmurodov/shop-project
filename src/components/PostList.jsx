import { useContext } from "react";
import { ShopContext } from "../Context";
import PostItem from "./PostItem";
import "../App.css";
export default function PostList() {
  const { goods = [] } = useContext(ShopContext);
  if (!goods.length) {
    return <h2>Nothing found</h2>;
  }
  return (
    <div className="Goods">
      {goods.map((item) => (
        <PostItem key={item.id} {...item} />
      ))}
    </div>
  );
}
