import React from "react";
import { Link } from "react-router-dom";
import { FaPhoneAlt, FaFacebookF, FaInstagram, FaLinkedin } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { MdLocationPin } from "react-icons/md";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
    return (
        <footer className="bg-gray-200">
            <div className="grid grid-cols-1 md:grid-cols-4 items-center w-[75%] m-auto pt-5 py-5 gap-8">
                <div className="items-center">
                    <h2 className="font-bold mb-2">QUICK LINKS</h2>
                    <p className="hover:underline hover:text-purple-600"><Link to="/homepage">home</Link></p>
                    <p className="hover:underline hover:text-purple-600"><Link to="/shop">shop</Link></p>
                    <p className="hover:underline hover:text-purple-600"><Link to="/contact">contact</Link></p>
                    <p className="hover:underline hover:text-purple-600"><Link to="/orders">orders</Link></p>
                </div>
                <div>
                    <h2 className="font-bold mb-2">EXTRA LINKS</h2>
                    <p className="hover:underline hover:text-purple-600"><Link to="/">login</Link></p>
                    <p className="hover:underline hover:text-purple-600"><Link to="/signup">register</Link></p>
                    <p className="hover:underline hover:text-purple-600"><Link to="/cart">cart</Link></p>
                    <p className="hover:underline hover:text-purple-600"><Link to="/order">order</Link></p>
                </div>
                <div>
                    <h2 className="font-bold mb-2">CONTACT INFO</h2>
                    <p className="flex items-center gap-1 hover:underline hover:text-purple-600"><FaPhoneAlt className="text-purple-700" /> +234-81437-20395</p>
                    <p className="flex items-center gap-1 hover:underline hover:text-purple-600"><FaPhoneAlt className="text-purple-700" /> +111-222-3333</p>
                    <p className="flex items-center gap-1 hover:underline hover:text-purple-600"><Link to="https://mail.google.com/mail/?view=cm&fs=1&to=segunjoshua85@gmail.com" className="flex items-center"><IoMail className="text-purple-700" /> segunjoshua85@gmail.com</Link></p>
                    <p className="gap-1 hover:underline hover:text-purple-600"><Link to="https://www.google.com/maps/search/?api=1&query=Nigeria,Lagos,100001" className="flex items-center"><MdLocationPin className="text-purple-700" /> Nigeria, Lagos - 100001</Link></p>
                </div>
                <div>
                    <h2 className="font-bold mb-2">FOLLOW US</h2>
                    <p className="hover:underline hover:text-purple-600">
                        <Link to="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
                            <FaFacebookF className="text-purple-700" /> facebook
                        </Link>
                    </p>
                    <p className="hover:underline hover:text-purple-600">
                        <Link to="https://x.com/?lang=en" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
                            <FaXTwitter className="text-purple-700" /> twitter
                        </Link>
                    </p>
                    <p className="hover:underline hover:text-purple-600">
                        <Link to="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
                            <FaInstagram className="text-purple-700" /> instagram
                        </Link>
                    </p>
                    <p className="hover:underline hover:text-purple-600">
                        <Link to="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
                            <FaLinkedin className="text-purple-700" /> linkedin
                        </Link>
                    </p>
                </div>
            </div>
            <hr className="h-[2px] bg-black" />
            <p className="text-center text-gray-400 mt-8">Copyright © 2022 by <span className="text-purple-700">mr. web designer</span></p>
        </footer>
    )
}
export default Footer;
