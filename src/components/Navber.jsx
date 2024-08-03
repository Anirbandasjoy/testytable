import { Link } from "react-router-dom";
import { useState } from "react";

const Navber = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-[#B33771]">
      <div className="navbar max-w-6xl mx-auto text-white flex flex-wrap items-center justify-between p-4">
        <div className="flex-1">
          <Link to="/" className="cursor-pointer text-xl font-semibold">
            TestyTable
          </Link>
        </div>
        <div className="block lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
              />
            </svg>
          </button>
        </div>
        <div
          className={`lg:flex flex-none gap-8 ${
            isOpen
              ? "block absolute top-[60px] p-4 text-gray-800 bg-red-200 w-full left-0 "
              : "hidden"
          } lg:block`}
        >
          <ul className="flex flex-col lg:flex-row gap-4 lg:gap-8">
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
