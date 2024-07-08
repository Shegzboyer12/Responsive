import React from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full bg-white p-8 border border-gray-300 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center mb-6">Sign Up</h2>
        <form>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Firstname"
              className="w-full p-3 border border-gray-300 rounded-lg" required
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Lastname"
              className="w-full p-3 border border-gray-300 rounded-lg" required
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 border border-gray-300 rounded-lg" required
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Username"
              className="w-full p-3 border border-gray-300 rounded-lg" required
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              placeholder="Password"
              className="w-full p-3 border border-gray-300 rounded-lg" required
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full p-3 border border-gray-300 rounded-lg" required
            />
          </div>
          <div>
            <select className="mb-4 w-full p-3 border border-gray-300 rounded-lg" required >
            <option value=""></option>
            <option value="">User</option>
            <option value="">Admin</option>
          </select>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="w-20 p-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300"><Link to="/">Sign Up</Link></button>
          </div>
          <div className="mt-6 text-center">
            <p>
              Already have an account?{" "}
              <Link to="/" className="text-blue-500 hover:underline">
                Login.
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
