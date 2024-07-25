import React from "react";
import { Link } from "react-router-dom";
import Header from "../../component/header/header";
import Footer from "../../component/footer/footer";
import Author from "../../component/shared-components/author/author";
import Image from "../../images/heading-bg.webp";
import Image2 from "../../images/about-img.jpg";
import author_1_bg from "../../images/author-1.jpg";
import author_2_bg from "../../images/author-2.jpg";
import author_3_bg from "../../images/author-3.jpg";
import author_4_bg from "../../images/author-4.jpg";
import author_5_bg from "../../images/author-5.jpg";
import author_6_bg from "../../images/author-6.jpg";
import { FaFacebookF, FaLinkedin } from "react-icons/fa";
import { FaTwitter, FaSquareInstagram } from "react-icons/fa6";
import "./style.css";

const About = () => {
  const authors = [
    { image: author_1_bg, name: "john deo" },
    { image: author_2_bg, name: "john deo" },
    { image: author_3_bg, name: "john deo" },
    { image: author_4_bg, name: "john deo" },
    { image: author_5_bg, name: "john deo" },
    { image: author_6_bg, name: "john deo" },
  ];

  const renderAuthors = () => {
    return authors.map((author, index) => (
      <div key={index} className="relative overflow-hidden author">
        <div
          className="bg-no-repeat bg-cover h-80 w-full md:w-72 border border-black"
          style={{ backgroundImage: `url(${author.image})` }}
        >
          <div className="ml-2 text-2xl show-icons absolute left-[-36px]">
            <div className="bg-white h-7 w-7 flex items-center justify-center border border-black mb-2 mt-3">
              <Link to="">
                <FaFacebookF />
              </Link>
            </div>
            <div className="bg-white h-7 w-7 flex items-center justify-center border border-black mb-2">
              <Link to="">
                <FaTwitter />
              </Link>
            </div>
            <div className="bg-white h-7 w-7 flex items-center justify-center border border-black mb-2">
              <Link to="">
                <FaSquareInstagram />
              </Link>
            </div>
            <div className="bg-white h-7 w-7 flex items-center justify-center border border-black mb-2">
              <Link to="">
                <FaLinkedin />
              </Link>
            </div>
          </div>
        </div>
        <div className="bg-white w-full md:w-72 h-9 shadow-md border border-black text-center text-xl font-extrabold">
          <h2>{author.name}</h2>
        </div>
      </div>
    ));
  };

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

      <div className="flex flex-col md:flex-row px-4 md:px-60 items-center pt-9 space-y-8 md:space-y-0">
        <div
          className="h-80 w-full md:w-[96%] bg-contain bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${Image2})` }}
        ></div>
        <div className="flex flex-col h-80 w-full md:w-[96%] bg-gray-200 p-8 justify-center">
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

      <div className="flex items-center px-4 md:px-52">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full gap-6 mt-6 m-[auto] items-center mb-6">
          {renderAuthors()}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default About;
