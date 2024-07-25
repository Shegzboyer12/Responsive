import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../component/header/header";
import { Link } from "react-router-dom";
import Footer from "../../component/footer/footer";
import Image from "../../images/heading-bg.webp";

const Checkout = () => {
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    email: "",
    paymentMethod: "Cash on Delivery",
    address1: "",
    address2: "",
    city: "",
    state: "",
    country: "",
    pinCode: ""
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Navigate to the Order page and pass the form data
    navigate('/order', { state: { orderDetails: formData } });
  };

  return (
    <>
      <Header />

      <div
        className="relative h-80 bg-cover w-full text-center"
        style={{ backgroundImage: `url(${Image})` }}
      >
        <div className="text-black flex flex-col pt-28 font-semibold">
          <h1 className="text-4xl md:text-5xl font-bold">OUR SHOP</h1>
          <p className="text-lg md:text-2xl mt-2">
            <Link to="/homepage" className="text-purple-500 hover:underline">
              home
            </Link>{" "}
            / Checkout
          </p>
        </div>
      </div>

      <div className="w-full md:w-[80%] mx-auto p-6 md:p-8 bg-gray-100 mt-8 rounded-lg shadow-lg mb-8 border border-black">
        <h1 className="text-2xl md:text-3xl font-bold mb-6 text-center">PLACE YOUR ORDER</h1>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={handleSubmit}>
          {Object.keys(formData).map((key) => (
            <div key={key} className="flex flex-col">
              <label className="mb-2 font-semibold text-sm md:text-base" htmlFor={key}>
                {key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}:
              </label>
              {key === "paymentMethod" ? (
                <select
                  id={key}
                  name={key}
                  value={formData[key]}
                  onChange={handleChange}
                  className="p-2 border rounded text-sm md:text-base"
                  aria-label={key}
                >
                  <option>Cash on Delivery</option>
                  <option>Credit Card</option>
                  <option>PayPal</option>
                  <option>Paytm</option>
                </select>
              ) : (
                <input
                  id={key}
                  name={key}
                  type={key === "email" ? "email" : "text"}
                  placeholder={`Enter your ${key.replace(/([A-Z])/g, ' $1').toLowerCase()}`}
                  value={formData[key]}
                  onChange={handleChange}
                  className="p-2 border rounded text-sm md:text-base"
                  aria-label={key}
                />
              )}
            </div>
          ))}
          <div className="mt-6 md:mt-8 text-center">
            <button type="submit" className="bg-violet-500 text-white rounded-md hover:bg-violet-600 h-10 md:h-11 w-full md:w-32">
              Order Now
            </button>
          </div>
        </form>
      </div>

      <Footer />
    </>
  );
};

export default Checkout;
