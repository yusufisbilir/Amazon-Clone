import CartContext from '../Context/cart/CartContext';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Cart() {
  const { cartItems, deleteCart, addOrder, emptyCart } =
    useContext(CartContext);
  let navigate = useNavigate();

  const handleOrder = async () => {
    await addOrder(cartItems);
    await emptyCart();
    navigate('/order');
  };

  return (
    <div className="container mx-auto bg-white">
      <div className="p-5 border-b ">
        <p className="font-bold text-2xl">Your Shopping Cart</p>
        <p className="text-xl my-2">
          Total: $
          {cartItems.length > 0
            ? Number(
                cartItems.reduce((amount, item) => item.price + amount, 0)
              ).toFixed(2)
            : '0'}
        </p>
        <button
          className="bg-yellow-400 px-36 py-2 rounded"
          onClick={handleOrder}
          disabled={!cartItems.length > 0}
        >
          Order
        </button>
      </div>

      <div className="p-12 flex flex-col">
        {/* Product List */}
        {cartItems.map((cart, key) => (
          <div key={key} className="flex items-center">
            <img src={cart.image} alt="product" className="w-24 my-4" />
            <div className="mx-20">
              <h1 className="font-semibold">{cart.name}</h1>
              <p className="my-2">${cart.price}</p>
              <button
                className="bg-yellow-400 px-12 rounded"
                onClick={() => deleteCart(cart._id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
