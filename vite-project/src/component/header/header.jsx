import React, { useState } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaSearch,
  FaUser,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { FaXTwitter, FaCartShopping } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header>
      <div className="bg-slate-300 flex flex-row items-center justify-between px-4 h-11 w-full">
        <div className="flex space-x-2">
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookF className="text-lg" />
          </a>
          <a
            href="https://x.com/?lang=en"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaXTwitter className="text-lg" />
          </a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="text-lg" />
          </a>
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="text-lg" />
          </a>
        </div>
        <div className="flex space-x-2">
          <p className="font-semibold text-base">
            <span className="text-purple-700">
              <Link to="/">login |</Link>
            </span>
          </p>
          <p className="text-base text-purple-700 font-semibold">
            <Link to="/signup">signup</Link>
          </p>
        </div>
      </div>

      <div className="flex flex-row justify-between bg-white h-14 w-full shadow-md px-4 items-center">
        <div className="flex items-center justify-between w-full lg:w-auto">
          <h2>
            <Link
              to="/homepage"
              className="text-purple-600 text-xl font-semibold"
            >
              Bookly.
            </Link>
          </h2>
          <div className="lg:hidden">
            <button onClick={toggleMenu} className="text-xl">
              {menuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
        <nav
          className={`${
            menuOpen ? "block" : "hidden"
          } lg:flex lg:items-center lg:space-x-6 w-full lg:w-auto mt-4 lg:mt-0`}
        >
          <ul className="flex flex-col lg:flex-row lg:space-x-6 font-bold">
            <li className="hover:underline">
              <Link to="/homepage">Home</Link>
            </li>
            <li className="hover:underline">
              <Link to="/about">About</Link>
            </li>
            <li className="hover:underline">
              <Link to="/shop">Shop</Link>
            </li>
            <li className="hover:underline">
              <Link to="/contact">Contact</Link>
            </li>
            <li className="hover:underline">
              <Link to="/order">Orders</Link>
            </li>
          </ul>
        </nav>
        <div className="hidden lg:flex items-center space-x-4">
          <Link to="/search" className="hover:text-purple-500">
            <FaSearch className="text-lg" />
          </Link>
          <Link to="" className="hover:text-purple-500">
            <FaUser className="text-lg" />
          </Link>
          <div className="flex items-center space-x-1 hover:text-purple-500">
            <Link to="/cart">
              <FaCartShopping className="text-lg" />
            </Link>
            <span>(0)</span>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`${
          menuOpen ? "block" : "hidden"
        } lg:hidden bg-white shadow-md px-4 py-2`}
      >
        <nav>
          <ul className="flex flex-col items-start space-y-2">
            <li className="hover:underline">
              <Link to="/homepage" onClick={toggleMenu}>
                Home
              </Link>
            </li>
            <li className="hover:underline">
              <Link to="/about" onClick={toggleMenu}>
                About
              </Link>
            </li>
            <li className="hover:underline">
              <Link to="/shop" onClick={toggleMenu}>
                Shop
              </Link>
            </li>
            <li className="hover:underline">
              <Link to="/contact" onClick={toggleMenu}>
                Contact
              </Link>
            </li>
            <li className="hover:underline">
              <Link to="/order" onClick={toggleMenu}>
                Orders
              </Link>
            </li>
          </ul>
        </nav>
        <div className="flex space-x-2">
          <div className="">
            <Link to="/search">
              <FaSearch className="text-lg flex items-center hover:text-purple-500" />
            </Link>
          </div>
          <div className="">
            <Link to="">
              <FaUser className="text-lg flex items-center hover:text-purple-500" />
            </Link>
          </div>
          <div className="flex">
            <Link to="/cart">
              <FaCartShopping className="text-lg flex items-center hover:text-purple-500" />
            <p>(0)</p>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
