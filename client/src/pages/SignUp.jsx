import React, { useState } from "react";

function SignUp({ setActive }) {
  const [state, setState] = useState({
    email: "",
    fullName: "",
    password: "",
  });
  const { email, fullName, password } = state;

  const handleChange = (e) => {
    setState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <form className="p-4 flex flex-col gap-6">
      <hr />
      <input
        type="text"
        className="w-[100%] py-2 px-3 text-sm placeholder:text-gray-300 outline-none border border-gray-200 rounded-md"
        placeholder="Full Name"
        name="fullName"
        value={fullName}
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
        onClick={() => setActive(false)}
      >
        Sign Up
      </button>
    </form>
  );
}

export default SignUp;
