// src/components/Product.js
import React, { useState } from "react";
import { Link } from "react-router-dom";

import Image from "../../../images/the_world.jpg";
import Image2 from "../../../images/the_happy_lemon.jpg";
import Image3 from "../../../images/darknet.jpg";
import Image4 from "../../../images/be_well_bee.jpg";
import Image5 from "../../../images/red_queen.jpg";
import Image6 from "../../../images/nightshade.jpg";

const products = [
  { id: 1, image: Image, title: "The World of Art", price: 50 },
  { id: 2, image: Image2, title: "The Happy Lemon", price: 20 },
  { id: 3, image: Image3, title: "Darknet", price: 16 },
  { id: 4, image: Image4, title: "Be Well Bee", price: 12 },
  { id: 5, image: Image5, title: "Red Queen", price: 22 },
  { id: 6, image: Image6, title: "Nightshade", price: 12 },
];

const Product = () => {
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = (product) => {
    addToCart({ ...product, quantity });
  };

  return (
    <div className="flex flex-col items-center">
      <h1 className="font-bold mb-6 text-3xl">LATEST PRODUCTS</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <div key={product.id} className="flex flex-col items-center justify-center border border-emerald-800 w-72 h-auto rounded-md gap-4 p-4 shadow-xl">
            <div
              className="h-64 w-full bg-contain bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${product.image})` }}
            >
              <div className="ml-4 mt-4 bg-red-600 w-14 h-8 rounded-sm flex items-center justify-center text-white font-semibold">
                <span>${product.price}/-</span>
              </div>
            </div>
            <p className="font-medium">{product.title}</p>
            <input
              type="number"
              min="1"
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
              className="border border-black rounded px-2 py-1"
              placeholder="Quantity"
            />
            <button
              onClick={() => handleAddToCart(product)}
              className="bg-violet-500 h-11 w-40 rounded-md font-bold flex items-center justify-center hover:bg-violet-600 transition"
            >
              Add to cart
            </button>
          </div>
        ))}
      </div>
      <button className="flex bg-orange-400 mt-16 mb-10 h-11 w-40 rounded-md font-bold items-center justify-center hover:bg-orange-500">
        <Link to="/shop">Load More</Link>
      </button>
    </div>
  );
};

export default Product;
