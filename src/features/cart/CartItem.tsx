import SubmitButton from "../../ui/SubmitButton";
import { formatCurrency } from "../../utils/helpers";
import { useDispatch } from "react-redux";
import { deleteItem } from "./cartSlice.tsx";
import { Dispatch } from "react";
import { UnknownAction } from "@reduxjs/toolkit";

function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item;
  const dispatch: Dispatch<UnknownAction> = useDispatch();
  return (
    <li className="py-2 sm:flex sm:justify-between">
      <p className="sm:bm-0 mb-1">
        {quantity}&times; {name}
      </p>
      <div className="flex items-center justify-between sm:gap-6">
        <p className="font-semibold">{formatCurrency(totalPrice)}</p>
        <SubmitButton type="small" onClick={() => dispatch(deleteItem(pizzaId))}>Remove</SubmitButton>
      </div>
    </li>
  );
}

export default CartItem;
