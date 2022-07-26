import React, { useContext, useRef, useState } from "react";
import { DataContext } from "../context/context";
import { tasks } from "../data";
import axios from "axios";

function SignIn() {
  const { dispatch } = useContext(DataContext);
  const password = useRef();
  const email = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const config = {
      email: email.current.value,
      password: password.current.value,
    };
    try {
      const res = await axios.post("/auth/login", config);
      const data = {
        user: res.data,
        isFetching: false,
        error: null,
        tasks,
        modalOpen: false,
        currentTask: {},
      };
      localStorage.setItem("data", JSON.stringify(data));
      dispatch({
        type: "INIT",
        payload: data,
      });
    } catch (e) {
      dispatch({ type: "LOGIN_FAIL", payload: e.message });
    }
  };
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
        ref={email}
      />
      <input
        type="password"
        className="w-[100%] py-2 px-3 text-sm placeholder:text-gray-300 outline-none border border-gray-200 rounded-md"
        placeholder="password"
        ref={password}
      />
      <button
        className="py-2 px-3 font-semibold text-white rounded-md bg-[#329C89]"
        onClick={handleSubmit}
      >
        Log In
      </button>
    </form>
  );
}

export default SignIn;
