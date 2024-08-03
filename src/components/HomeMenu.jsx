import { Link } from "react-router-dom";
import { resturenMenu } from "../data/menu";

const HomeMenu = () => {
  return (
    <div className="max-w-6xl mx-auto my-10">
      <h1 className="font-bold text-xl mb-3">Menu</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4  ">
        {resturenMenu?.slice(0, 8).map((menu) => (
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
      <div className="w-full  text-center">
        <Link to="/menu" className="btn bg-blue-400 mt-7 mx-auto">
          See All
        </Link>
      </div>
    </div>
  );
};

export default HomeMenu;
