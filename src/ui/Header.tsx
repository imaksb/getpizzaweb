import { Link } from "react-router-dom";
import Username from "../features/user/Username";
import SearchOrder from "../features/order/SearchOrder";

function Header() {
  return (
    <header className="item-center flex justify-between border-b border-stone-300 bg-green-700 px-4 py-3 uppercase sm:px-6">
      <Link to="/" className="text-slate text-3xl font-light tracking-wider text-slate-50">
        Get a pizza.
      </Link>
      <SearchOrder />
      {/* <Username /> */}
    </header>
  );
}

export default Header;
