import React from "react";
import Header from "../../component/header/header";
import Image6 from "../../images/nightshade.jpg";
import Image2 from "../../images/the_happy_lemon.jpg";
import { Link } from "react-router-dom";
import Footer from "../../component/footer/footer";

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
          <div className="flex flex-col  items-center justify-center border border-emerald-800 w-72 h-[110%] rounded-md gap-2 shadow-xl">
            <div
              className="h-64 w-full bg-contain bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${Image2})` }}
            >
              <div className="ml-48 bg-red-600 w-10 h-8 rounded-sm flex items-center justify-center text-white font-semibold">
                <span>X</span>
              </div>
            </div>
            <p>the happy lemon</p>
            <input type="number" className="border border-black rounded" />
            <button className="bg-violet-500 h-11 w-40 rounded-md font-bold flex items-center justify-center hover:bg-violet-600 transition">
              Add to cart
            </button>
          </div>

          <div className="flex flex-col  items-center justify-center border border-emerald-800 w-72 h-[110%] rounded-md gap-2 shadow-xl">
            <div
              className="h-64 w-full bg-contain bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${Image6})` }}
            >
              <div className="ml-48 bg-red-600 w-10 h-8 rounded-sm flex items-center justify-center text-white font-semibold">
                <span>X</span>
              </div>
            </div>
            <p>nightshade</p>
            <input type="number" className="border border-black rounded" />
            <button className="bg-violet-500 h-11 w-40 rounded-md font-bold flex items-center justify-center hover:bg-violet-600 transition">
              Add to cart
            </button>
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
            <button className="bg-amber-400 text-white rounded hover:bg-amber-500 w-64 h-12">
              <Link to="/shop">Continue Shopping</Link>
            </button>
            <button className="bg-purple-300 text-white rounded hover:bg-purple-400 w-64 h-12">
              <Link to="/checkout">Proceed To Checkout</Link>
            </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Cart;
