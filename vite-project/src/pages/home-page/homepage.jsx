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
        <div className="relative z-10 h-full text-white w-5/12 m-auto flex flex-col items-center min-h-screen text-center justify-center">
          <h1 className="text-5xl font-bold">HAND PICKED BOOK TO YOUR DOOR</h1>
          <p>Discover our diverse collection of handcrafted products</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
            perspiciatis incidunt impedit, qui tempora velit.
          </p>
          <button className="px-4 py-2 rounded-md hover:bg-violet-500 duration-700 bg-violet-600 text-white font-bold text-sm">
            DISCOVER MORE
          </button>
        </div>
        </div>
      
      <div className="flex flex-col items-center mt-5 justify-center">
        <Product/>
      </div>

      <div className="flex flex-row items-center">
      <div className="h-80 w-full bg-contain bg-center bg-no-repeat -ml-80  " style={{backgroundImage: `url(${Image2})`}} >
      </div>
        <div className="flex flex-col h-44 w-[36%] gap-2 bg-gray-200 -ml-[33.1%] pl-8 justify-center">
        <h2 className="text-4xl font-bold">ABOUT US</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia magni excepturi inventore saepe rem assumenda itaque animi exercitationem.</p>
      <button className="bg-violet-500 text-white rounded-md hover:bg-violet-600 h-11 w-32"><Link to="/about">Read More</Link></button>
      </div>
      </div>

      <div className="flex flex-col items-center bg-zinc-700 break-words justify-center w-[100%] h-60 text-center text-white mt-12">
            <h1 className="text-3xl font-bold">HAVE ANY QUESTIONS?
            </h1>
            <p className="text-xl w-6/12">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias iure eveniet perspiciatis tempore eius voluptatem voluptatibus consequatur?
            </p>
            <Link
              to="/"
              className="bg-purple-600 h-11 w-40 rounded-md font-bold flex items-center justify-center hover:bg-purple-700 transition"
            >Contact Us
            </Link>
          </div>
        <Footer />
    </>
  );
};
export default Home;
