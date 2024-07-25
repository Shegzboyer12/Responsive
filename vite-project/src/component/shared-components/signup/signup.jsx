import React, { useState } from "react";
import axios from "axios";
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [username, setUsername] = useState("");
  const [role, setRole] = useState("");
  const [error, setError] = useState("");
  const [visiblePassword, setVisiblePassword] = useState(false);
  const [visibleConfirmPassword, setVisibleConfirmPassword] = useState(false);
  const navigate = useNavigate();

  const isValidPassword = (password) => {
    const regex = /^[0-9_a-z]+$/;
    return regex.test(password);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    if (!isValidPassword(password)) {
      setError("Password must contain only numbers and underscores");
      return;
    }
    axios.post("http://localhost:3000/auth/register", {
        name: `${firstName} ${lastName}`,
        email,
        username,
        password,
        role,
      })
      .then((result) => {
        console.log(result);
        navigate("/"); // Redirect to homepage after successful signup
      })
      .catch((error) => {
        console.error(error);
        setError("An err or occurred. Please try again.");
      });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="min-h-screen flex items-center justify-center bg-gray-100"
    >
      <div className="max-w-md w-full bg-white p-8 border border-gray-300 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center mb-6">Sign Up</h2>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        <div>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Firstname"
              className="w-full p-3 border border-gray-300 rounded-lg"
              required
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Lastname"
              className="w-full p-3 border border-gray-300 rounded-lg"
              required
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 border border-gray-300 rounded-lg"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Username"
              className="w-full p-3 border border-gray-300 rounded-lg"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="mb-6 flex items-center w-full p-3 border border-gray-300 rounded-lg justify-between">
            <input
              type={visiblePassword ? "text" : "password"}
              placeholder="Password"
              className="w-80"
              minLength={8}
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div onClick={() => setVisiblePassword(!visiblePassword)}>
              {visiblePassword ? <FaRegEyeSlash /> : <FaRegEye />}
            </div>
          </div>
          <div className="mb-6 flex items-center w-full p-3 border border-gray-300 rounded-lg justify-between">
            <input
              type={visibleConfirmPassword ? "text" : "password"}
              placeholder="Confirm Password"
              className="w-80"
              minLength={8}
              required
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <div
              onClick={() => setVisibleConfirmPassword(!visibleConfirmPassword)}
            >
              {visibleConfirmPassword ? <FaRegEyeSlash /> : <FaRegEye />}
            </div>
          </div>
          <div className="mb-4">
            <select
              className="w-full p-3 border border-gray-300 rounded-lg"
              required
              value={role}
              onChange={(e) => setRole(e.target.value)}
            >
              <option value="">Select Role</option>
              <option value="user">User</option>
              <option value="admin">Admin</option>
            </select>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="w-32 p-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300"
            >
              Sign Up
            </button>
          </div>
          <div className="mt-6 text-center">
            <p>
              Already have an account?{" "}
              <Link to="/" className="text-blue-500 hover:underline">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Signup;
