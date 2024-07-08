import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full bg-white p-8 border border-gray-300 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold  text-center mb-6 ">Login</h2>
        <form>
          <div className="mb-4">
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="w-full p-3 border border-gray-300 rounded-lg"
              required
            />
          </div>
          <div className="mb-6">
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              className="w-full p-3 border border-gray-300 rounded-lg"
              required
            />
          </div>
          <div>
            <select
              className="mb-4 w-full p-3 border border-gray-300 rounded-lg"
              required
            >
              <option value=""></option>
              <option value="">User</option>
              <option value="">Admin</option>
            </select>
          </div>
          <div className="flex ">
            <input type="checkbox" id="rememberMe" name="rememberMe" />
            <label className="ml-2 text-sm text-gray-600" htmlFor="rememberMe">
              Remember Me
            </label>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300 h-11 w-32"
            >
              <Link to="/homepage">Login Now</Link>
            </button>
          </div>
        </form>
        <p className="mt-6 text-center">
          Don't have an account?{" "}
          <Link to="/signup" className="text-blue-500 hover:underline">
            Sign Up.
          </Link>
        </p>
      </div>
    </div>
  );
};
export default Login;
