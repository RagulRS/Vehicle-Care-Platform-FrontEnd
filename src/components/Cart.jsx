import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { decreaseCart, addToCart } from './features/cartSlice';
import Header from './Header';

const Cart = () => {
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const handleIncrease = (product) => {
    dispatch(addToCart(product));
  };

  const handleDecrease = (product) => {
    dispatch(decreaseCart(product));
  };

  const handlePayment = async () => {
    const response = await fetch('http://localhost:3001/createOrder', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ amount: cart.totalAmount * 100 }), 
    });
    const data = await response.json();

    const options = {
      key: 'YOUR_RAZORPAY_KEY_ID', // There is a problem in creating in Razor pay account they asked for a website link and i added but still it takes them tym to approve
      amount: data.amount, 
      currency: data.currency,
      name: 'Your Company Name',
      description: 'Test Transaction',
      order_id: data.id, 
      handler: function (response) {
        alert(`Payment successful: ${response.razorpay_payment_id}`);
      },
      prefill: {
        name: 'Customer Name',
        email: 'customer@example.com',
        contact: '1234567890',
      },
      theme: {
        color: '#3399cc',
      },
    };

    const rzp1 = new window.Razorpay(options);
    rzp1.open();
  };

  return (
    <>
      <Header />
      <div className="container mt-5">
        <h2>Your Cart</h2>
        {cart.cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <>
            <ul className="list-group mb-3">
              {cart.cartItems.map(item => (
                <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
                  {item.name} x {item.quantity}
                  <div>
                    <button className="btn btn-danger btn-sm" onClick={() => handleDecrease(item)}>-</button>
                    <button className="btn btn-success btn-sm" onClick={() => handleIncrease(item)}>+</button>
                  </div>
                  <span>${(item.price * item.quantity).toFixed(2)}</span>
                </li>
              ))}
            </ul>
            <h4>Total: ${cart.totalAmount.toFixed(2)}</h4>
            <button onClick={handlePayment} className="btn btn-success">
              Proceed to Pay ${cart.totalAmount.toFixed(2)}
            </button>
          </>
        )}
      </div>
    </>
  );
};

export default Cart;
