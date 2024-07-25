import React from "react";

import Login from "./component/shared-components/login/login";
import Signup from "./component/shared-components/signup/signup";
import Home from "./pages/home-page/homepage";
import About from "./pages/about-page/aboutpage";
import Shop from "./pages/shop-page/shop";
import Contact from "./pages/contact-page/contact";
import Search from "./pages/search-page/search";
import Cart from "./pages/cart-page/cart";
import Order from "./pages/order-page/order";
import Checkout from "./pages/checkout-page/checkout";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/homepage" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/search" element={<Search />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<Order />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
