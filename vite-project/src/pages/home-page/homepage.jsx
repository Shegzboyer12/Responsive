import React from "react";
import Header from "../../component/header/header";
import Image from "../../images/home-bg.jpg";
import Image2 from "../../images/about-img.jpg";
import Product from "../../component/shared-components/Product/product";
import Footer from "../../component/footer/footer";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Header />

      <div
        className="relative h-[560px] bg-cover bg-center"
        style={{ backgroundImage: `url(${Image})` }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="flex flex-col relative h-full text-white w-full md:w-5/12 min-h-screen items-center text-center justify-center md:ml-[31%] pb-36 px-4">
          <h1 className="text-3xl md:text-5xl font-bold">
            HAND PICKED BOOK TO YOUR DOOR
          </h1>
          <p className="mt-2">
            Discover our diverse collection of handcrafted products
          </p>
          <p className="mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
            perspiciatis incidunt impedit, qui tempora velit.
          </p>
          <Link to="">
            <button className="mt-4 px-4 py-2 rounded-md hover:bg-violet-500 duration-700 bg-violet-600 text-white font-bold text-sm w-full md:w-[100%]">
              DISCOVER MORE
            </button>
          </Link>
        </div>
      </div>

      <div className="flex flex-col items-center mt-5 justify-center px-4">
        <Product />
      </div>

      <div className="flex flex-col md:flex-row items-center md:justify-between mt-12 px-4 md:px-12">
        <div
          className="h-80 w-full bg-contain bg-center bg-no-repeat md:w-1/2"
          style={{ backgroundImage: `url(${Image2})` }}
        ></div>
        <div className="flex flex-col h-44 w-full md:w-[36%] gap-2 bg-gray-200 md:-ml-[33.1%] pl-8 justify-center mt-4 md:mt-0">
          <h2 className="text-3xl md:text-4xl font-bold">ABOUT US</h2>
          <p className="mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
            magni excepturi inventore saepe rem assumenda itaque animi
            exercitationem.
          </p>
          <button className="mt-4 bg-violet-500 text-white rounded-md hover:bg-violet-600 h-11 w-32">
            <Link to="/about">Read More</Link>
          </button>
        </div>
      </div>

      <div className="flex flex-col items-center bg-zinc-700 break-words justify-center w-full h-60 text-center text-white mt-12 px-4">
        <h1 className="text-3xl font-bold">HAVE ANY QUESTIONS?</h1>
        <p className="text-xl mt-4 w-full md:w-6/12">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias
          iure eveniet perspiciatis tempore eius voluptatem voluptatibus
          consequatur?
        </p>
        <Link to="/contact">
          <button className="mt-4 bg-purple-600 h-11 w-40 rounded-md font-bold flex items-center justify-center hover:bg-purple-700 transition">
            Contact Us
          </button>
        </Link>
      </div>

      <Footer />
    </>
  );
};

export default Home;
