import React from "react";
import { useLocation } from "react-router-dom";
import Header from "../../component/header/header";
import { Link } from "react-router-dom";
import Footer from "../../component/footer/footer";
import Image from "../../images/heading-bg.webp";

const Order = () => {
  const location = useLocation();
  const orderDetails = location.state?.orderDetails || {};

  return (
    <>
      <Header />
      <div
        className="relative h-80 bg-cover w-full text-center"
        style={{ backgroundImage: `url(${Image})` }}
      >
        <div className="text-black flex flex-col pt-28 font-semibold">
          <h1 className="text-4xl md:text-5xl font-bold">YOUR ORDERS</h1>
          <p className="text-lg md:text-2xl mt-2">
            <Link to="/homepage" className="text-purple-500 hover:underline">
              home
            </Link>{" "}
            / order
          </p>
        </div>
      </div>
      <div className="w-full md:w-[80%] mx-auto mt-6 mb-8 p-6 bg-gray-200 border border-black shadow-md rounded-md">
        <h2 className="font-bold text-center text-2xl md:text-3xl mb-4">PLACED ORDER</h2>
        <div className="flex flex-col space-y-4">
          <div className="flex flex-row space-x-3">
            <div className="font-bold">Placed on:</div>
            <div className="text-violet-400">04-Jul-2024</div>
          </div>
          <div className="flex flex-row space-x-3">
            <div className="font-bold">Name:</div>
            <div className="text-violet-400">{orderDetails.name}</div>
          </div>
          <div className="flex flex-row space-x-3">
            <div className="font-bold">Number:</div>
            <div className="text-violet-400">{orderDetails.number}</div>
          </div>
          <div className="flex flex-row space-x-3">
            <div className="font-bold">Email:</div>
            <div className="text-violet-400">{orderDetails.email}</div>
          </div>
          <div className="flex flex-row space-x-3">
            <div className="font-bold">Address:</div>
            <div className="text-violet-400">{`${orderDetails.address1}, ${orderDetails.address2}, ${orderDetails.city}, ${orderDetails.state}, ${orderDetails.country} - ${orderDetails.pinCode}`}</div>
          </div>
          <div className="flex flex-row space-x-3">
            <div className="font-bold">Payment Method:</div>
            <div className="text-violet-400">{orderDetails.paymentMethod}</div>
          </div>
          <div className="flex flex-row space-x-3">
            <div className="font-bold">Your Orders:</div>
            <div className="text-violet-400">Happy Lemons (1), Nightshade (1)</div>
          </div>
          <div className="flex flex-row space-x-3">
            <div className="font-bold">Total Price:</div>
            <div className="text-violet-400">$198</div>
          </div>
          <div className="flex flex-row space-x-3">
            <div className="font-bold">Payment Status:</div>
            <div className="text-red-400">Pending</div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Order;
