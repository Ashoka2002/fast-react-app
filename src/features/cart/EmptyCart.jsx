import LinkButton from "../../ui/LinkButton";

function EmptyCart() {
  return (
    <div>
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>

      <p className="mt-4 text-center text-sm">
        Your cart is still empty. Start adding some pizzas :)
      </p>
    </div>
  );
}

export default EmptyCart;
