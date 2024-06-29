import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { IRootState } from "../../store.tsx";
import { getTotalCartPrice, getTotalCartQuantity } from "./cartSlice.tsx";
import { formatCurrency } from "../../utils/helpers.tsx";

function CartOverview() {
  const totalCartQuantity: number = useSelector((state: IRootState) => getTotalCartQuantity(state));
  const totalCartPrice: number = useSelector((state: IRootState) => getTotalCartPrice(state));

  if(totalCartQuantity === 0) return null;

  return (
    <div className="flex items-center justify-between bg-slate-800 p-4 text-sm text-slate-200 sm:px-6 md:text-base">
      <p className="space-x-4 font-semibold uppercase tracking-wider text-stone-300 sm:space-x-6">
        <span>{totalCartQuantity} pizzas</span>
        <span>{formatCurrency(totalCartPrice)}</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
