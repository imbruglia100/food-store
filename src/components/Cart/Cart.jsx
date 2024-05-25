import CartItem from './CartItem';
import './Cart.css';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart, selectCartArray } from '../../store/cart';

function Cart() {
  const cart = useSelector(selectCartArray);
  const produce = {};
  const dispatch = useDispatch()

  const cartItems = Object.values(cart)
    .map(item => {
      return {
        ...item,
        ...produce[item.id]
      };
    })
    .sort((a, b) => a.addedAt - b.addedAt);

  if (!cartItems || !cartItems.length) return (
    <div className="cart">
      No items in the cart. Start selecting items to purchase.
    </div>
  );

  const onSubmit = (e) => {
    e.preventDefault();
    window.alert(
      "Purchased the following:\n" +
      `${cartItems.map(item => `${item.count} of ${item.name}`).join('\n')}`
    );

    dispatch(clearCart())
  }

  return (
    <div className="cart">
      <ul>
        {cartItems.map(item => <CartItem key={item.id} item={item}/>)}
      </ul>
      <hr />
      <form onSubmit={onSubmit}>
        <button type="submit">Purchase</button>
      </form>
    </div>
  )
}

export default Cart;
