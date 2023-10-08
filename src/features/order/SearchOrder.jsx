import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchOrder() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  function handlesubmit(e) {
    e.preventDefault();
    if (!query) return;
    navigate(`/order/${query}`);
    setQuery("");
  }

  return (
    <form onSubmit={handlesubmit}>
      <input
        placeholder="Search order"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-40 rounded-full bg-yellow-100 px-4 py-1 text-sm text-stone-800 outline-none placeholder:text-stone-400  sm:w-52 "
      />
    </form>
  );
}

export default SearchOrder;
