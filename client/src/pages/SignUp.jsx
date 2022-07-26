import axios from "axios";
import React, { useState } from "react";

function SignUp({ setActive }) {
  const [state, setState] = useState({
    email: "",
    username: "",
    password: "",
  });
  const { email, username, password } = state;

  const handleChange = (e) => {
    setState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/auth/register", state);
      setActive(true);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <form className="p-4 flex flex-col gap-6">
      <hr />
      <input
        type="text"
        className="w-[100%] py-2 px-3 text-sm placeholder:text-gray-300 outline-none border border-gray-200 rounded-md"
        placeholder="Full Name"
        name="username"
        value={username}
        onChange={handleChange}
      />
      <input
        type="email"
        className="w-[100%] py-2 px-3 text-sm placeholder:text-gray-300 outline-none border border-gray-200 rounded-md"
        placeholder="Email"
        value={email}
        name="email"
        onChange={handleChange}
      />
      <input
        type="password"
        className="w-[100%] py-2 px-3 text-sm placeholder:text-gray-300 outline-none border border-gray-200 rounded-md"
        placeholder="password"
        name="password"
        onChange={handleChange}
        value={password}
      />
      <button
        className="py-2 px-3 font-semibold text-white rounded-md bg-[#329C89]"
        onClick={handleSubmit}
      >
        Sign Up
      </button>
    </form>
  );
}

export default SignUp;
