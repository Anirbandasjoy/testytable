import { resturenMenu } from "../data/menu";

const Menu = () => {
  return (
    <div className="max-w-6xl mx-auto my-10">
      <h1 className="font-bold text-xl mb-3">Menu</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4  ">
        {resturenMenu.map((menu) => (
          <div className="card bg-base-100  shadow-xl" key={menu.id}>
            <figure>
              <img className="h-[250px]" src={menu.menuImage} alt="Shoes" />
            </figure>
            <div className="card-body relative">
              <h2 className="card-title text-lg">
                {menu.menuName}
                <div className="badge badge-secondary absolute right-2 top-2">
                  NEW
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
  );
};

export default Menu;
