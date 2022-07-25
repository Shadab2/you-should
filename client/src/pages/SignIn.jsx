import React from "react";

function SignIn({ setActive }) {
  return (
    <form className="p-4 flex flex-col gap-6">
      <hr />
      <div>
        <h1 className="text-xl ">To Continue</h1>
        <span className="text-sm font-light text-gray-300">
          We need your Name and Email{" "}
        </span>
      </div>
      <input
        type="email"
        className="w-[100%] py-2 px-3 text-sm placeholder:text-gray-300 outline-none border border-gray-200 rounded-md"
        placeholder="Email"
      />
      <input
        type="password"
        className="w-[100%] py-2 px-3 text-sm placeholder:text-gray-300 outline-none border border-gray-200 rounded-md"
        placeholder="password"
      />
      <button
        className="py-2 px-3 font-semibold text-white rounded-md bg-[#329C89]"
        onClick={() => setActive(true)}
      >
        Log In
      </button>
    </form>
  );
}

export default SignIn;
