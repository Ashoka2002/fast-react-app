import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";

function Header() {
  return (
    <header>
      <Link to="/">Fast-React-Pizza Co.</Link>
      <SearchOrder />
      <h3>Ashok.</h3>
    </header>
  );
}

export default Header;
