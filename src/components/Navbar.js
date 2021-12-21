import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <>
      <div className="h-16 bg-primary-gray flex justify-between items-center px-4 text-white">
        {/* Nav Left */}
        <div className="h-full flex items-center" id="nav">
          <Link to="/">
            <img src="/images/amazon_logo.png" alt="amazon" className="h-9" />
          </Link>
          <div className="ml-6 flex">
            <img
              src="/images/location_icon.png"
              alt="location"
              className="h-4 mt-3 mr-1"
            />
            <a href="#nav">
              <p className="leading-none text-gray-300 font-light text-xs">
                Deliver to
              </p>
              <p className="font-semibold text-sm">Turkey</p>
            </a>
          </div>
        </div>

        {/* Nav search */}
        <div className="flex flex-1 mx-12">
          <input
            type="text"
            className="flex flex-1 h-10 rounded-l-md text-black p-3 focus:outline-yellow-500 focus:outline-2 border-none outline-none"
          />
          <button className="bg-yellow-500 px-3 rounded-r-md ">
            <img src="/images/search_icon.png" alt="Search" className="h-6" />
          </button>
        </div>

        {/* Nav Right */}
        <div className="flex">
          <Link to="/">
            <p className="text-xs">Hello, Sign in</p>
            <p className="text-sm font-semibold">Account & Lists</p>
          </Link>

          <Link to="/order" className="mx-6">
            <p className="text-xs">Returns</p>
            <p className="text-sm font-semibold">& Orders</p>
          </Link>
          <Link to="/cart" className="flex">
            <img src="/images/cart_icon.png" alt="cart" className="h-9" />
            <p className="text-sm mt-4">Cart</p>
          </Link>
        </div>
      </div>

      {/* Links */}
      <div className="bg-secondary-gray h-9 text-white flex items-center">
        <div className="text-white text-sm">
          <a href="/" className="ml-4">
            All
          </a>

          <a href="/" className="ml-4">
            Today's Deals
          </a>
          <a href="/" className="ml-4">
            Customer Service
          </a>
          <a href="/" className="ml-4">
            Registry
          </a>
          <a href="/" className="ml-4">
            Gift Cards
          </a>
          <a href="/" className="ml-4">
            Sell
          </a>
        </div>
      </div>
    </>
  );
}
