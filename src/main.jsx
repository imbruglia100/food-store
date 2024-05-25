import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux'
import './index.css';
import configureStore from './store';
import { populateProduce } from './store/produce'
import { NavLink, Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import { CartProvider, useCartContext } from './context/ShowCart';
import ProductForm from './components/ProductForm/ProductForm';

const store = configureStore()

if (import.meta.env.MODE !== "production") {
  window.store = store;
  window.populateProduce = populateProduce;
}

const LayOut = () => {
  const {setShowCart} = useCartContext()
  return(
    <>
      <nav>
          <NavLink className='logo' to={'/'}>Grocery Store</NavLink>
          <NavLink to={'/product'}>Add Products</NavLink>
          <button className="checkout-button" onClick={() => setShowCart(true)}>
            <i className="fas fa-shopping-bag" />
            Checkout
          </button>
      </nav>
      <Outlet />
    </>
  )
}

const router = createBrowserRouter([
  {
    element: <LayOut />,
    children: [
      {
        element: <App />,
        path: '/'
      },
      {
        element: <ProductForm />,
        path: '/product'
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CartProvider>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </CartProvider>
  </React.StrictMode>
);
