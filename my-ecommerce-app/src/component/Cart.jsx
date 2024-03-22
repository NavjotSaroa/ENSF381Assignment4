import React from 'react';
import CartItem from './CartItem';

function Cart({ cartItems, onRemove }) {
  const totalPrice = cartItems.reduce((acc, item) => acc + item.quantity * item.price, 0);

  return (
    <div>
      {cartItems.map(item => (
        <CartItem key={item.id} item={item} onRemove={onRemove} />
      ))}
      <div>Total Price: ${totalPrice}</div>
    </div>
  );
}
export default Cart;