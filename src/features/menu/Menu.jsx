import { useLoaderData } from "react-router-dom";
import { getMenu } from "../../services/apiRestaurant";

import Menuitem from "./MenuItem";

function Menu() {
  const menu = useLoaderData();

  return (
    <ul>
      <li>menu</li>
      {menu?.map((pizza) => (
        <Menuitem pizza={pizza} key={pizza.id} />
      ))}
    </ul>
  );
}

export async function loader() {
  const menu = await getMenu();
  return menu;
}

export default Menu;
