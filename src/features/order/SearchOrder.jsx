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
        placeholder="Search order by id"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-40 rounded-full bg-yellow-100 px-2 py-1 text-xs tracking-tight text-stone-800 outline-none [word-spacing:-2px] placeholder:text-stone-400 sm:w-52 sm:px-4 sm:text-sm sm:tracking-normal  sm:[word-spacing:0px] "
      />
    </form>
  );
}

export default SearchOrder;
