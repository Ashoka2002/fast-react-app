import { Link } from "react-router-dom";

function Button({ children, disabled, to, type, onClick }) {
  const base =
    "inline-block text-sm rounded-full bg-yellow-500  font-semibold uppercase tracking-wide text-stone-800 transition-colors duration-200 hover:bg-yellow-400  focus:outline-none focus:ring-1 focus:ring-yellow-300 focus:ring-offset-1 disabled:cursor-not-allowed ";

  const style = {
    small: base + " px-3 py-1 text-xs md:px-5 md:py-2.5",
    round: base + " px-2.5 py-1 md:px-3.5 md:py-2 rounded-full ",
    primary: base + " px-4 py-3 md:px-6 md:py-2",
    secondary:
      "inline-block text-sm rounded-full border-2 border-stone-400/50 px-4 py-3  md:px-6 md:py-2 font-semibold uppercase tracking-wide text-stone-600 transition-colors duration-200 hover:bg-stone-200  focus:ring-stone-400 focus:outline-none focus:ring-1 focus:ring-offset-1 disabled:cursor-not-allowed ",
  };

  if (to)
    return (
      <Link to={to} className={style[type]}>
        {children}
      </Link>
    );

  if (onClick)
    return (
      <button disabled={disabled} onClick={onClick} className={style[type]}>
        {children}
      </button>
    );

  return (
    <button disabled={disabled} className={style[type]}>
      {children}
    </button>
  );
}

export default Button;
