import SubmitButton from "../../ui/SubmitButton";
import { formatCurrency } from "../../utils/helpers";

function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item;

  return (
    <li className="py-2 sm:flex sm:justify-between">
      <p className="sm:bm-0 mb-1">
        {quantity}&times; {name}
      </p>
      <div className="flex items-center justify-between sm:gap-6">
        <p>{formatCurrency(totalPrice)}</p>
        <SubmitButton type="small">Remove</SubmitButton>
      </div>
    </li>
  );
}

export default CartItem;
