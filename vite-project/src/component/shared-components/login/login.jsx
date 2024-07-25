import React, { useState } from "react";
import axios from 'axios';
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const [visiblePassword, setVisiblePassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:3000/auth/login", { email, password })
      .then(result => {
    console.log(result);
        navigate('/homepage'); // Redirect to homepage after successful login
      })
      .catch(err => {
        console.log(err);
        setError("user not found");
      });
  };

  return (
    <form className="min-h-screen flex items-center justify-center bg-gray-100" onSubmit={handleSubmit}>
      <div className="w-full max-w-md bg-white p-8 border border-gray-300 rounded-lg shadow-md mx-4">
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        <div>
          <div className="mb-4">
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="w-full p-3 border border-gray-300 rounded-lg"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-6 flex items-center w-full p-3 border border-gray-300 rounded-lg justify-between">
            <input
              type={visiblePassword ? "text" : "password"}
              placeholder="Password"
              className="w-full"
              minLength={3}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <div onClick={() => setVisiblePassword(!visiblePassword)} className="ml-2 cursor-pointer">
              {visiblePassword ? <FaRegEyeSlash /> : <FaRegEye />}
            </div>
          </div>
          <div className="flex items-center mb-4">
            <input type="checkbox" id="rememberMe" name="rememberMe" />
            <label className="ml-2 text-sm text-gray-600" htmlFor="rememberMe">
              Remember Me
            </label>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300 h-11 w-full"
            >
              Login Now
            </button>
          </div>
        </div>
        <p className="mt-6 text-center">
          Don't have an account?{" "}
          <Link to="/signup" className="text-blue-500 hover:underline">
            Sign Up.
          </Link>
        </p>
      </div>
    </form>
  );
};

export default Login;
