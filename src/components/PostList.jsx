import PostItem from "./PostItem";
import "../App.css";
export default function PostList(props) {
  const { Goods = [], addtoBacket } = props;
  if (!Goods.length) {
    return <h2>Nothing found</h2>;
  }
  return (
    <div className="Goods">
      {Goods.map((item) => (
        <PostItem key={item.id} {...item} addtoBacket={addtoBacket} />
      ))}
    </div>
  );
}
