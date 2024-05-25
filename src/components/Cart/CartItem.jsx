import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart, customAmount, removeFromCart, subtractFromCart } from '../../store/cart';

function CartItem({ item }) {
  const [count, setCount] = useState(item.count);
  const dispatch = useDispatch()
  useEffect(() => {
    setCount(item.count);
  }, [item.count]);

  useEffect(() => {
    dispatch(customAmount(item, count))
  }, [dispatch, count])

  const handleRemove = (e) => {
    e.preventDefault()
    dispatch(removeFromCart(item))
  }

  const handleAdd = (e) => {
    e.preventDefault()
    dispatch(addToCart(item))
  }

  const handleSubtract = (e) => {
    e.preventDefault()
    dispatch(subtractFromCart(item))
  }

  return (
    <li className="cart-item">
      <div className="cart-item-header">{item.name}</div>
      <div className="cart-item-menu">
        <input
          type="number"
          value={count}
          onChange={({ target: { value } }) => {
            let temp = value
            if(value < 1) temp = 1
            return setCount(temp)
          }}
        />
        <button
          className="cart-item-button"
          onClick={handleAdd}
        >
          +
        </button>
        <button
          className="cart-item-button"
          disabled={count === 1}
          onClick={handleSubtract}
        >
          -
        </button>
        <button
          className="cart-item-button"
          onClick={handleRemove}
        >
          Remove
        </button>
      </div>
    </li>
  );
}

export default CartItem;
