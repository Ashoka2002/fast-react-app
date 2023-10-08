import { Link } from "react-router-dom";

function Button({ children, disabled = false, to }) {
  const className =
    "inline-block rounded-full bg-yellow-500 px-4 py-3 font-semibold uppercase tracking-wide text-stone-800 transition-colors duration-200 hover:bg-yellow-400  focus:outline-none focus:ring-1 focus:ring-yellow-300 focus:ring-offset-1 disabled:cursor-not-allowed sm:px-6 sm:py-3";

  if (to)
    return (
      <Link to={to} className={className}>
        {children}
      </Link>
    );

  return (
    <button disabled={disabled} className={className}>
      {children}
    </button>
  );
}

export default Button;
