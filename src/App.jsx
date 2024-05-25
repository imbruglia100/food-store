import { useEffect } from 'react';
import Cart from './components/Cart';
import ProduceList from './components/ProduceList';
import { useDispatch, useSelector } from 'react-redux'
import { populateProduce } from './store/produce'
import { useCartContext } from './context/ShowCart';

function App() {

  const dispatch = useDispatch()
  const cartItems = useSelector(state=> state.cart)
  const produceItems = Object.values(useSelector(state=> state.produce))
  const {showCart, setShowCart} = useCartContext()

  useEffect(() => {
    dispatch(populateProduce(produceItems));
  }, [dispatch]);

  useEffect(() => {
    setShowCart(Object.keys(cartItems).length > 0)
  }, [cartItems])

  return (
    <>

      <main style={showCart ? { marginRight: '300px' } : {}} >
        <ProduceList />
      </main>
      <div
        className="sidebar"
        style={showCart ? { transform: 'translateX(-100%)' } : {}}
      >
        <div className="sidebar-header">
          <button className="arrow-button" onClick={() => setShowCart(false)}>
            <i className="fas fa-arrow-right"></i>
          </button>
        </div>
        <Cart />
      </div>
    </>
  );
}

export default App;
