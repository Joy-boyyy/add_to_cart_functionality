import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="w-[100%] p-4 bg-black text-white">
      <header className="flex justify-between">
        <div>
          <h1>My Company</h1>
        </div>

        <ul className="flex gap-5">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Products">Products</Link>
          </li>
          <li>
            <Link to="/Cart">Cart</Link>
          </li>
        </ul>
      </header>
    </div>
  );
};

export default Nav;
