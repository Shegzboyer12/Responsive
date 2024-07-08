import React from "react";
import Header from "../../component/header/header";
import Image from "../../images/heading-bg.webp";
import { Link } from "react-router-dom";
import Footer from "../../component/footer/footer";

const Contact = () => {
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
            / Contact
          </p>
        </div>
      </div>

      <div className="flex justify-center py-12 bg-gray-100">
        <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
          <h1 className="text-2xl font-bold mb-6 text-center">SAY SOMETHING</h1>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-3 py-2 border rounded-md focus:ring-purple-500"
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Enter your number"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <div className="mb-4">
            <textarea
              placeholder="Enter your message"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              rows="4"
            ></textarea>
          </div>
          <div className="flex justify-center">
            <button className="w-40 bg-purple-500 text-white py-2 rounded-md hover:bg-purple-600 focus:ring-purple-500">
              Send Message
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Contact;
