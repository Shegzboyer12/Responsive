import React from "react";
import { Link } from "react-router-dom";

import Image from "../../../images/the_world.jpg";
import Image2 from "../../../images/the_happy_lemon.jpg";
import Image3 from "../../../images/darknet.jpg";
import Image4 from "../../../images/be_well_bee.jpg";
import Image5 from "../../../images/red_queen.jpg";
import Image6 from "../../../images/nightshade.jpg";

const Product = () => {
  return (
    <>
      <h1 className="font-bold mb-3 text-3xl">LATEST PRODUCTS</h1>
      <div className="">
        <div className="grid grid-cols-3 gap-11">
          <div className="flex flex-col  items-center justify-center border border-emerald-800 w-72 h-[110%] rounded-md gap-2 shadow-xl">
            <div
              className="h-64 w-full bg-contain bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${Image})` }}
            >
              <div className="ml-[20px] mt-[-10] bg-red-600 w-14 h-8 rounded-sm flex items-center justify-center text-white font-semibold">
                <span>$50/-</span>
              </div>
            </div>
            <p>the world of art</p>
            <input type="number" className="border border-black rounded" />
            <button className="bg-violet-500 h-11 w-40 rounded-md font-bold flex items-center justify-center hover:bg-violet-600">
              Add to cart
            </button>
          </div>
          <div className="flex flex-col  items-center justify-center border border-emerald-800 w-72 h-[110%] rounded-md gap-2 shadow-xl">
            <div
              className="h-64 w-full bg-contain bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${Image2})` }}
            >
              <div className="ml-8 mb-8 bg-red-600 w-14 h-8 rounded-sm flex items-center justify-center text-white font-semibold">
                <span>$20/-</span>
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
              style={{ backgroundImage: `url(${Image3})` }}
            >
              <div className="ml-8 mb-8 bg-red-600 w-14 h-8 rounded-sm flex items-center justify-center text-white font-semibold">
                <span>$16/-</span>
              </div>
            </div>
            <p>darknet</p>
            <input type="number" className="border border-black rounded" />
            <button className="bg-violet-500 h-11 w-40 rounded-md font-bold flex items-center justify-center hover:bg-violet-600 transition">
              Add to cart
            </button>
          </div>
          <div className="flex flex-col  items-center justify-center border border-emerald-800 w-72 h-[110%] rounded-md gap-2 shadow-xl">
            <div
              className="h-64 w-full bg-contain bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${Image4})` }}
            >
              <div className="ml-8 mb-8 bg-red-600 w-14 h-8 rounded-sm flex items-center justify-center text-white font-semibold">
                <span>$12/-</span>
              </div>
            </div>
            <p>be well bee</p>
            <input type="number" className="border border-black rounded" />
            <button className="bg-violet-500 h-11 w-40 rounded-md font-bold flex items-center justify-center hover:bg-violet-600 transition">
              Add to cart
            </button>
          </div>
          <div className="flex flex-col  items-center justify-center border border-emerald-800 w-72 h-[110%] rounded-md gap-2 shadow-xl">
            <div
              className="h-64 w-full bg-contain bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${Image5})` }}
            >
              <div className="ml-8 mb-8 bg-red-600 w-14 h-8 rounded-sm flex items-center justify-center text-white font-semibold">
                <span>$22/-</span>
              </div>
            </div>
            <p>red queen</p>
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
              <div className="ml-8 mb-8 bg-red-600 w-14 h-8 rounded-sm flex items-center justify-center text-white font-semibold">
                <span>$12/-</span>
              </div>
            </div>
            <p>nightshade</p>
            <input type="number" className="border border-black rounded" />
            <button className="bg-violet-500 h-11 w-40 rounded-md font-bold flex items-center justify-center hover:bg-violet-600 transition">
              Add to cart
            </button>
          </div>
        </div>
      </div>
      <button className="flex bg-orange-400 mt-16 mb-10 h-11 w-40 rounded-md font-bold items-center justify-center hover:bg-orange-500">
        <Link to="/">Load More</Link>
      </button>
    </>
  );
};

export default Product;
