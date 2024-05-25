import { useDispatch } from "react-redux";
import { addToCart } from "../../store/cart";
import { likeAProduce } from "../../store/produce";
function ProduceDetails({ produce }) {
  const cartItem = {};
  const dispatch = useDispatch()
  const handleAddToCart = (e) => {
    e.preventDefault()

    dispatch(addToCart(produce))
  }

  const handleLike = (e) => {
    e.preventDefault()

    dispatch(likeAProduce(produce))
  }
  return (
    <li className="produce-details">
      <span>{produce.name}</span>
      <span>
        <button
          className={"like-button" + (produce.liked ? " selected" : "")}
          onClick={handleLike}
        >
          <i className={"fas fa-heart"} />
        </button>
        <button
          className={"plus-button" + (cartItem ? " selected" : "")}
          onClick={handleAddToCart}
        >
          <i className="fas fa-plus" />
        </button>
      </span>
    </li>
  );
}

export default ProduceDetails;
