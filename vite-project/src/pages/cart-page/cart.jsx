import React from "react";
import Header from "../../component/header/header";
import Image from "../../images/heading-bg.webp";
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
