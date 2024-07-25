import React from "react";
import Header from "../../component/header/header";
import { Link } from "react-router-dom";
import Footer from "../../component/footer/footer";
import Image from "../../images/heading-bg.webp";
import Image6 from "../../images/nightshade.jpg";
import Image2 from "../../images/the_happy_lemon.jpg";

const Cart = () => {
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
            / Cart
          </p>
        </div>
      </div>

      <div className="flex flex-col items-center mt-5 justify-center">
        <h1 className="text-5xl font-bold">YOUR CART</h1>
        <p>No items in your cart.</p>
        <Link to="/shop" className="text-purple-500 hover:underline">
          Start Shopping
        </Link>
      </div>

      <div className="flex gap-9 items-center justify-center">
        <div className="flex flex-col  items-center justify-center border border-emerald-800 w-72 h-96 rounded-md gap-2 shadow-xl">
          <div
            className="h-60 w-full bg-contain bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${Image2})` }}
          >
            <span className="ml-48 bg-red-600 w-10 h-6.5 rounded-sm flex items-center justify-center text-white font-semibold">
              X
            </span>
          </div>
          <p className="text-xl font-semibold">Happy Lemon</p>
          <div className="flex gap-1">
            <input type="number" className="border border-black rounded w-20" />
            <button className="bg-red-500 h-11 w-20 rounded-md font-bold flex items-center justify-center hover:bg-red-600 text-white">
              update
            </button>
          </div>
        </div>

        <div className="flex flex-col  items-center justify-center border border-emerald-800 w-72 h-96 rounded-md gap-2 shadow-xl">
          <div
            className="h-60 w-full bg-contain bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${Image6})` }}
          >
            <span className="ml-48 bg-red-600 w-10 h-6.5 rounded-sm flex items-center justify-center text-white font-semibold">
              X
            </span>
          </div>
          <p className="text-xl font-semibold">nightshade</p>
          <div className="flex gap-1">
            <input type="number" className="border border-black rounded w-20" />
            <button className="bg-red-500 h-11 w-20 rounded-md font-bold flex items-center justify-center hover:bg-red-600 text-white">
              update
            </button>
          </div>
        </div>
      </div>

      <div className="p-8">
        <div className="w-full mx-auto p-6 flex flex-col items-center">
          <h1 className="text-3xl font-bold mb-4">PRODUCTS ADDED</h1>
          <div className="flex mb-4 bg-red-300 text-gray-200 h-8 w-28 rounded-md items-center justify-center hover:bg-red-500">
            <button>Delete All</button>
          </div>
          <div className="text-lg font-bold flex flex-col space-x-4 border border-orange-400 h-32 w-[80%] gap-6 items-center justify-center">
            <p>
              Grand total: <span className="text-orange-500">$0/-</span>
            </p>
            <div className="Flex space-x-4">
              <Link to="/shop"><button className="bg-amber-400 text-white rounded hover:bg-amber-500 w-64 h-12">
                Continue Shopping
              </button></Link>
              <Link to="/checkout"><button className="bg-purple-300 text-white rounded hover:bg-purple-400 w-64 h-12">
                Proceed To Checkout
              </button></Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Cart;
