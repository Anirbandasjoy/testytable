import { Link } from "react-router-dom";

const Navber = () => {
  return (
    <div className="bg-[#B33771]">
      {" "}
      <div className="navbar max-w-6xl mx-auto text-white">
        <div className="flex-1">
          <a className="cursor-pointer text-xl">TestyTable</a>
        </div>
        <div className="flex-none">
          <ul className="flex gap-8">
            <li>Home</li>
            <li>
              <Link to="/menu ">Menu</Link>
            </li>
            <li>About us</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navber;
