function CartItem({ item, onRemove }) {
  return (
    <div>
      <img src={item.image} alt={item.name} style={{ width: '100px', height: '100px' }} />
      <div>{item.name}</div>
      <div>${item.price}</div>
      <div>Quantity: {item.quantity}</div>
      <div>Total: ${item.quantity * item.price}</div>
      <button onClick={() => onRemove(item.id)}>Remove</button>
    </div>
  );
}
export default CartItem;
