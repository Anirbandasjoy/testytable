import { ScrollRestoration } from "react-router-dom";
import { resturenMenu } from "../data/menu";
import Navber from "./Navber";
import Footer from "./Footer";
import { useState } from "react";

const Menu = () => {
  const [menuData, setMenuData] = useState(resturenMenu);

  const handleChange = (e) => {
    const value = e.target.value;
    if (value === "default") {
      setMenuData([...resturenMenu]);
    } else if (value === "lowtohigh") {
      setMenuData([
        ...menuData.sort((a, b) => {
          return a.price - b.price;
        }),
      ]);
    } else if (value === "hightolow") {
      setMenuData([
        ...menuData.sort((a, b) => {
          return b.price - a.price;
        }),
      ]);
    }
  };

  return (
    <div>
      <ScrollRestoration />
      <Navber />
      <div className="max-w-6xl mx-auto my-10 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-center mb-6">Our Menu</h1>
        <p className="text-lg mb-6 text-center">
          Our menu is a reflection of our passion for culinary excellence. From
          classic dishes to modern creations, each item is crafted with the
          finest ingredients and utmost care.
        </p>
        <div className="flex justify-center mb-4">
          <select
            className="select select-primary w-full max-w-xs"
            onChange={handleChange}
          >
            <option value="default">Default</option>
            <option value="lowtohigh">Low to High</option>
            <option value="hightolow">High to Low</option>
          </select>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {menuData.map((menu) => (
            <div className="card bg-base-100 shadow-xl" key={menu.id}>
              <figure>
                <img
                  className="h-64 w-full object-cover"
                  src={menu.menuImage}
                  alt={menu.menuName}
                />
              </figure>
              <div className="card-body relative">
                <h2 className="card-title text-lg">
                  {menu.menuName}
                  <div className="badge badge-secondary absolute right-2 top-2">
                    {menu?.price} BDT
                  </div>
                </h2>
                <p>{menu.menuDescription}</p>
                <div className="card-actions justify-end">
                  <button className="bg-green-600 text-white p-3 w-full sm:w-24">
                    Order
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Menu;
