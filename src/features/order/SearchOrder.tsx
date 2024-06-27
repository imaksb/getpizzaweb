import { useState } from "react";
import { useNavigate } from "react-router";
import Username from "../user/Username";

function SearchOrder() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!query) return;

    navigate(`/order/${query}`);
  }

  return (
    <div className="flex items-center gap-4">
      <Username />
      <form onSubmit={(e) => handleSubmit(e)} className="text-center">
        <input
          placeholder="# Find the order"
          value={query}
          className="rounded-lg border-slate-100 bg-green-100 px-4 py-2 text-sm transition-all duration-300 focus:outline-none focus:ring-1 focus:ring-green-300 lg:w-60 lg:focus:w-64"
          onChange={(e) => setQuery(e.target.value)}
        ></input>
      </form>
    </div>
  );
}
export default SearchOrder;
