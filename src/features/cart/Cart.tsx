import { Link } from "react-router-dom";
import LinkButton from "../../ui/LinkButton";
import SubmitButton from "../../ui/SubmitButton";
import CartItem from "./CartItem";
import { useDispatch, useSelector } from "react-redux";
import { IRootState } from "../../store";
import { clearCart, getCart } from "./cartSlice.tsx";
import { UnknownAction } from "@reduxjs/toolkit";
import { Dispatch } from "react";
import EmptyCart from "./EmptyCart.tsx";

const fakeCart = [
  {
    pizzaId: 12,
    name: "Mediterranean",
    quantity: 2,
    unitPrice: 16,
    totalPrice: 32,
  },
  {
    pizzaId: 6,
    name: "Vegetale",
    quantity: 1,
    unitPrice: 13,
    totalPrice: 13,
  },
  {
    pizzaId: 11,
    name: "Spinach and Mushroom",
    quantity: 1,
    unitPrice: 15,
    totalPrice: 15,
  },
];

function Cart() {
  const cart: CartItemProps[] = useSelector(getCart);
  const dispatch: Dispatch<UnknownAction> = useDispatch();
  const username: string = useSelector((state: IRootState) => state.user.username);

  if (!cart.length) return <EmptyCart />;
  return (
    <div className="px-4 py-3">
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>

      <h2 className="mt-7 py-2 text-xl font-semibold">Your cart, {username}</h2>

      <ul className="mb-3 divide-y divide-stone-200 border-b">
        {cart.map((item) => (
          <CartItem key={item.pizzaId} item={item} />
        ))}
      </ul>
      <div className="py-3">
        <SubmitButton to="/order/new" type="primary">
          Make an order
        </SubmitButton>
        {/* <Link to="/order/new">Order pizzas</Link> */}
        <button className="pl-2" onClick={() => dispatch(clearCart())}>Clear cart</button>
      </div>
    </div>
  );
}

export default Cart;
