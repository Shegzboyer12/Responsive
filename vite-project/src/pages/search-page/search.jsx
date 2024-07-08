import React from "react";
import Header from "../../component/header/header";
import Image from "../../images/heading-bg.webp";
import { Link } from "react-router-dom";
import Footer from "../../component/footer/footer";

const Search = () => {
  return (
    <>
      <Header />

      <div
        className="relative h-80 bg-cover w-full text-center"
        style={{ backgroundImage: `url(${Image})` }}
      >
        <div className="text-black flex flex-col pt-28">
          <h1 className="text-5xl font-bold">OUR SHOP</h1>
          <p className="mt-2">
            <Link to="/homepage" className="text-purple-500 hover:underline">
              home
            </Link>{" "}
            / Search
          </p>
        </div>
      </div>

      <div className="flex justify-center py-12 bg-gray-100">
        <div className="w-[70%] bg-white p-8 ">
          <div className="flex items-center space-x-4 mb-6">
            <input
              type="search"
              placeholder="Search product"
              className="flex-grow px-4 py-2 border border-black rounded-md focus:ring-purple-500"
            />
            <button
              type="submit"
              className="px-6 py-2 bg-purple-500 text-white rounded-md hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              Search
            </button>
          </div>
          <div className="flex justify-center">
            <button
              type="button"
              className="px-8 py-2 border border-orange-500 text-orange-500 hover:bg-red-100 focus:outline-none focus:ring-2 focus:ring-red-500"
            >
              Search something!
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Search;
