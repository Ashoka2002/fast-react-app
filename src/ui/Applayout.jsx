import Header from "./Header";
import CartOverview from "../features/cart/CartOverview";
import { Outlet, useNavigation } from "react-router-dom";
import Loader from "./Loader";

function Applayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return isLoading ? (
    <Loader />
  ) : (
    <div className="layout">
      <Header />

      <main>
        <Outlet />
      </main>

      <CartOverview />
    </div>
  );
}

export default Applayout;
