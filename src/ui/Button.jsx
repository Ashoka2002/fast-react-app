function Button({ children, disabled = false, classes }) {
  return (
    <button
      disabled={disabled}
      className="inline-block rounded-full bg-yellow-500 px-4 py-3 font-semibold uppercase tracking-wide text-stone-800 transition-colors duration-200 hover:bg-yellow-400  focus:outline-none focus:ring-1 focus:ring-yellow-300 focus:ring-offset-1 disabled:cursor-not-allowed sm:px-6 sm:py-3"
    >
      {children}
    </button>
  );
}

export default Button;
