import { useDispatch } from "react-redux";
import SubmitButton from "../../ui/SubmitButton.tsx";
import { formatCurrency } from "../../utils/helpers.tsx";
import { addItem } from "../cart/cartSlice.tsx";

function MenuItem({ pizza }: MenuItemProps) {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;
  const dispatch = useDispatch();

  function handleAddToCart() {
    const newPizza = {
      pizzaId: id,
      name: name,
      quantity: 1,
      unitPrice: unitPrice,
      totalPrice: unitPrice,
    };
    dispatch(addItem(newPizza));
  }

  return (
    <li className="flex gap-4 py-2 font-mono">
      <img
        src={imageUrl}
        alt={name}
        className={`h-32 ${soldOut ? "gre opacity-50 grayscale" : ""}`}
      />
      <div className="flex grow flex-col">
        <p className="text-lg font-semibold">{name}</p>
        <p className="capitalize italic">{ingredients.join(", ")}</p>
        <div className="item-center mt-auto flex justify-between">
          {!soldOut ? (
            <p className="font-medium text-red-700">{formatCurrency(unitPrice)}</p>
          ) : (
            <p className="text-m font-medium uppercase text-stone-500">Sold out</p>
          )}
          {!soldOut && (
            <SubmitButton type="small" onClick={handleAddToCart}>
              Add to cart
            </SubmitButton>
          )}
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
