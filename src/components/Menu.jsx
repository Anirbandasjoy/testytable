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
      <div className="max-w-6xl mx-auto my-10">
        <h1 className="text-3xl font-bold text-center mb-6">Our Menu</h1>
        <p className="text-lg mb-6">
          Our menu is a reflection of our passion for culinary excellence. From
          classic dishes to modern creations, each item is crafted with the
          finest ingredients and utmost care.
        </p>
        <div className="flex items-center gap-3 mb-4">
          <select
            className="select select-primary w-full max-w-[250px]"
            onChange={handleChange}
          >
            <option value="default">Default</option>
            <option value="lowtohigh">Low to High</option>
            <option value="hightolow">High to Low</option>
          </select>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {menuData.map((menu) => (
            <div className="card bg-base-100  shadow-xl" key={menu.id}>
              <figure>
                <img className="h-[250px]" src={menu.menuImage} alt="Shoes" />
              </figure>
              <div className="card-body relative">
                <h2 className="card-title text-lg">
                  {menu.menuName}
                  <div className="badge badge-secondary absolute right-2 top-2">
                    {menu?.price}BDT
                  </div>
                </h2>
                <p>{menu.menuDescription}</p>
                <div className="card-actions justify-end">
                  <button className="bg-green-600 text-white p-3 w-24">
                    order
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
