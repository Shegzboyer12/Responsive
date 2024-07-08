import React from "react";
import Header from "../../component/header/header";
import Image from "../../images/heading-bg.webp";
import { Link } from "react-router-dom";
import Footer from "../../component/footer/footer";
import Product from "../../component/shared-components/Product/product";

const Shop = () => {
  return (
    <>
      <Header />
      <div
        className="relative h-80 bg-cover w-full text-center "
        style={{ backgroundImage: `url(${Image})` }}
      >
        <div className=" text-black flex flex-col pt-28">
          <h1 className="text-5xl font-bold">OUR SHOP</h1>
          <p>
            <Link to="/homepage" className="text-purple-500 hover:underline">
              home{" "}
            </Link>
            / shop
          </p>
        </div>
      </div>

      <div className="flex flex-col items-center mt-5 justify-center">
        <Product />
      </div>
      <Footer />
    </>
  );
};
export default Shop;
