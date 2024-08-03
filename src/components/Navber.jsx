import { Link } from "react-router-dom";

const Navber = () => {
  return (
    <div className="bg-[#B33771]">
      {" "}
      <div className="navbar max-w-6xl mx-auto text-white">
        <div className="flex-1">
          <Link to="/" className="cursor-pointer text-xl font-semibold">
            TestyTable
          </Link>
        </div>
        <div className="flex-none">
          <ul className="flex gap-8">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/menu">Menu</Link>
            </li>
            <li>
              <Link to="/about">About us</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navber;
