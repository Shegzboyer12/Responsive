import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { FaUser } from "react-icons/fa6";
import { FaCartShopping } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="bg-slate-300 flex flex-row items-center justify-center space-x-[63%] h-11 w-[100%]">
        <div className="flex flex-row mt-3 space-x-1">
          <div>
            <Link to="https://www.facebook.com/">
              <FaFacebookF className="size-6" />
            </Link>
          </div>
          <div>
            <Link to="https://x.com/?lang=en">
              <FaXTwitter className=" size-6" />
            </Link>
          </div>
          <div>
            <Link to="https://www.instagram.com/">
              <FaInstagram className=" size-6" />
            </Link>
          </div>
          <div>
            <Link to="https://www.google.com/search?q=www.linkedin+sign+up&oq=www.lin&gs_lcrp=EgZjaHJvbWUqBwgIEAAYgAQyBggAEEUYOTIHCAEQABiABDIHCAIQABiABDIHCAMQABiABDIHCAQQABiABDIHCAUQABiABDIHCAYQABiABDIHCAcQABiABDIHCAgQABiABDIHCAkQABiABNIBCTEwNDcyajBqN6gCALACAA&sourceid=chrome&ie=UTF-8">
              <FaLinkedin className=" size-6" />
            </Link>
          </div>
        </div>

        <div className="flex space-x-1">
          <div>
            <p className="flex font-semibold text-base/9 gap-2">
              new
              <span className="text-purple-700">
                <Link to="/">login |</Link>
              </span>
            </p>
          </div>
          <div>
            <p className=" text-base/9 text-purple-700 font-semibold">
              <Link to="/signup">signup</Link>
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-row justify-center bg-white h-11 w-[100%] shadow-md">
        <div className=" flex flex-row items-center space-x-96">
          <div>
            <h2>
              <Link to="" className="text-purple-600 text-xl font-semibold">
                Bookly.
              </Link>
            </h2>
          </div>
          <div>
            <nav>
              <ul className="flex flex-row space-x-3 font-bold">
                <div className="hover:underline">
                  <li>
                    <Link to="/homepage">home</Link>
                  </li>
                </div>
                <div className="hover:underline">
                  <li>
                    <Link to="/about">about</Link>
                  </li>
                </div>
                <div className="hover:underline">
                  <li>
                    <Link to="/shop">shop</Link>
                  </li>
                </div>
                <div className="hover:underline">
                  <li>
                    <Link to="/contact">contact</Link>
                  </li>
                </div>
                <div className="hover:underline">
                  <li>
                    <Link to="">orders</Link>
                  </li>
                </div>
              </ul>
            </nav>
          </div>
          <div className="flex flex-row space-x-3">
            <div className="hover:text-purple-500">
              <Link to="/search">
                <FaSearch className=" size-6" />
              </Link>
            </div>
            <div className="hover:text-purple-500">
                <Link to="">
                  <FaUser className=" size-6" />
                </Link>
            </div>
            <div className="flex flex-row hover:text-purple-500">
                <Link to="/cart"><FaCartShopping className=" size-6 flex" /></Link><h1>(0)</h1>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
