import { Link } from "react-router-dom";

function Button({ children, disabled = false, to, type }) {
  const base =
    "inline-block rounded-full bg-yellow-500  font-semibold uppercase tracking-wide text-stone-800 transition-colors duration-200 hover:bg-yellow-400  focus:outline-none focus:ring-1 focus:ring-yellow-300 focus:ring-offset-1 disabled:cursor-not-allowed ";

  const style = {
    small: base + " px-3 py-1 text-xs md:px-5 md:py-2.5",
    primary: base + " px-4 py-3 md:px-6 md:py-2",
  };

  if (to)
    return (
      <Link to={to} className={style[type]}>
        {children}
      </Link>
    );

  return (
    <button disabled={disabled} className={style[type]}>
      {children}
    </button>
  );
}

export default Button;
