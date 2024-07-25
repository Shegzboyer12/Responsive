import React from "react";
import { IoStarHalfSharp, IoStar } from "react-icons/io5";

const reviews = [
  {
    img: "https://niksessentialoils.com/wp-content/uploads/2021/06/av4-430x323.jpg",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat blanditiis accusamus aliquam sint dolorum ducimus, quia quos neque voluptatum atque nobis obcaecati quae numquam ut voluptatem ipsam praesentium eveniet pariatur.",
  },
  {
    img: "https://icossa.com/images/portrait.jpg",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat blanditiis accusamus aliquam sint dolorum ducimus, quia quos neque voluptatum atque nobis obcaecati quae numquam ut voluptatem ipsam praesentium eveniet pariatur.",
  },
  {
    img: "https://scontent-los2-1.xx.fbcdn.net/v/t39.30808-1/318957317_531177275692110_8367955799292344248_n.jpg?stp=dst-jpg_s200x200&_nc_cat=102&ccb=1-7&_nc_sid=f4b9fd&_nc_ohc=IfhRObWZexEQ7kNvgF2tMXY&_nc_ht=scontent-los2-1.xx&oh=00_AYA-AedVVtGiKkYZIw-TKXGbyVFLIdH8gkgcjiXmQ-J3ng&oe=668CBD41",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat blanditiis accusamus aliquam sint dolorum ducimus, quia quos neque voluptatum atque nobis obcaecati quae numquam ut voluptatem ipsam praesentium eveniet pariatur.",
  },
  {
    img: "https://assets.skool.com/f/65e59b79f6734c0882214d54f1ef2f9c/3c137c7912e741f089b10266cdce277f93023dcae71747ccb090fe51f164461b",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat blanditiis accusamus aliquam sint dolorum ducimus, quia quos neque voluptatum atque nobis obcaecati quae numquam ut voluptatem ipsam praesentium eveniet pariatur.",
  },
  {
    img: "https://www.motife.org/uploads/7/4/4/2/7442086/published/motife-home-truth-3.jpg?1563053311",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat blanditiis accusamus aliquam sint dolorum ducimus, quia quos neque voluptatum atque nobis obcaecati quae numquam ut voluptatem ipsam praesentium eveniet pariatur.",
  },
  {
    img: "https://c.superprof.com/i/m/28796959/160/20231130091355/28796959.webp",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat blanditiis accusamus aliquam sint dolorum ducimus, quia quos neque voluptatum atque nobis obcaecati quae numquam ut voluptatem ipsam praesentium eveniet pariatur.",
  },
];

const Author = () => {
  return (
    <>
      <div className="text-center font-bold text-4xl mt-6">
        <h1>CLIENTS REVIEWS</h1>
      </div>
      <div className="flex justify-center mt-11">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-5">
          {reviews.map((review, index) => (
            <div key={index} className="flex flex-col border border-black w-80 h-72 rounded-lg shadow-2xl items-center justify-center p-4">
              <img
                className="rounded-full w-[57px] h-[55px]"
                src={review.img}
                alt=""
              />
              <div className="flex flex-col items-center gap-2 justify-center mt-4">
                <p className="text-center">{review.text}</p>
                <div className="flex text-yellow-500 space-x-1 w-32 h-6 items-center justify-center rounded-md bg-slate-100">
                  <IoStar />
                  <IoStar />
                  <IoStar />
                  <IoStar />
                  <IoStarHalfSharp />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="text-center font-bold text-4xl mt-6">
        <h1>GREAT AUTHORS</h1>
      </div>
      <div>
        <div>
          {/* Your content for GREAT AUTHORS can go here */}
        </div>
      </div>
    </>
  );
};

export default Author;
