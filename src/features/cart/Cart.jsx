import LinkButton from "../../ui/LinkButton";
import CartItem from "../cart/CartItem";
import Button from "../../ui/Button";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "./cartSlice";
import EmptyCart from "./EmptyCart";

function Cart() {
  const userName = useSelector((state) => state.user.userName);
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);

  function handleClearCart() {
    if (window.confirm("Do you want to clear cart?")) dispatch(clearCart());
  }

  if (!cart.length) return <EmptyCart />;

  return (
    <div className="p-3">
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>

      <h2 className="mt-7 text-xl font-semibold">Your cart, {userName}</h2>

      <ul className="border-200 mt-3 divide-y-2 divide-stone-200 border-b-2">
        {cart.map((item) => (
          <CartItem item={item} key={item.pizzaId} />
        ))}
      </ul>

      <div className="mt-6 space-x-4">
        <Button type="primary" to="/order/new">
          Order pizzas
        </Button>

        <Button type="secondary" onClick={handleClearCart}>
          Clear cart
        </Button>
      </div>
    </div>
  );
}

export default Cart;
