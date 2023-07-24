import React from "react";
import { Link } from "react-router-dom";
import { Context } from "./context";
function Header() {
  const { cartItems } = React.useContext(Context);
  const cartStatus = cartItems.length > 0 ? "fill" : "line";
  return (
    <header className="text-slate-600">
      <div className="container h-16 p-4 items-center  mx-auto flex justify-between">
        <div className="h-auto">
          <Link to="/">
            <h2 className="text-lg">Printivo</h2>
          </Link>
        </div>
        <div>
          <Link className=" flex items-center" to="/Cart">
            Cart
            <i className={`ri-shopping-cart-${cartStatus} ri-fw ri-1x`}></i>
            <span class="relative flex h-2 w-2">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
              <span class="relative inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
            </span>
          </Link>
        </div>
      </div>

      <div className="banner flex flex-col items-center w-full h-full py-60">
        <h2 className="text-6xl mb-8 antialiased text-center text-slate-50">
          The best mobile photography <br />
          stock images
        </h2>
        <div className="flex mx-auto h-24 bg-white w-4/5 items-center rounded-lg border-y-slate-50">
          {/* <i className={`ri-search ri-fw ri-2x`}></i> */}
          <i class="ml-8 text-slate-400 ri-search-2-line ri-3x"></i>

          <input
            className="focus:outline-none pl-4 h-24 w-4/5 "
            type="text"
            placeholder="search images..."
          />
        </div>
      </div>
    </header>
  );
}

export default Header;
