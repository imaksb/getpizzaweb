import { Link } from 'react-router-dom';

function EmptyCart() {
  return (
    <div className="my-6 px-6">
      <Link to="/menu" className="text-amber-500">&larr; Back to menu</Link>

      <p className="font-semibold mt-7">Your cart is still empty. BUY SOMETHING!!!</p>
    </div>
  );
}

export default EmptyCart;
