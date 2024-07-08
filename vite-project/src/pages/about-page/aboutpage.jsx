import React from "react";
import Header from "../../component/header/header";
import Image from "../../images/heading-bg.webp";
import Image2 from "../../images/about-img.jpg";
import Author from "../../component/shared-components/author/author";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <Header />
      <div
        className="relative h-80 bg-cover w-full text-center"
        style={{ backgroundImage: `url(${Image})` }}
      >
        <div className="text-black flex flex-col pt-28">
          <h1 className="text-5xl font-bold">ABOUT US</h1>
          <p>
            <Link to="/homepage" className="text-purple-500 hover:underline">
              home
            </Link>{" "}
            / about
          </p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center mt-12 px-4">
        <div
          className="h-96 w-full md:w-1/2 bg-contain bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${Image2})` }}
        ></div>
        <div className="flex flex-col h-96 w-full md:w-1/2 bg-gray-200 p-8 justify-center">
          <h2 className="text-4xl font-bold mb-4">WHY CHOOSE US</h2>
          <p className="mb-2">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus
            ipsam, quasi non placeat a laborum et doloremque. Repellat eveniet
            excepturi qui quia magni quibusdam fugiat accusantium minima, aut
            commodi vel.
          </p>
          <p className="mb-4">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut,
            voluptatem temporibus vel quos eum minus soluta assumenda.
          </p>
          <button className="bg-violet-500 text-white rounded-md hover:bg-violet-600 h-11 w-32">
            <Link to="/contact">Contact us</Link>
          </button>
        </div>
      </div>

      <Author />
    </>
  );
};

export default About;
