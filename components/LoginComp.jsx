/*
Design of the Login Form
 */

import Link from "next/link";
import React from "react";

function LoginComp({ setFormDetails, formDetails, handleLogin }) {
  return (
    <div className="border rounded-3xl md:w-6/12 sm:w-2/3 lg:w-1/3 bg-opacity-30 bg-slate-200 p-6 sm:p-10 md:p-20 lg:p-10">
      <form onSubmit={handleLogin}>
        <div className="mb-8">
          <h1 className="block text-6xl font-bold mb-4 text-black">Sign in</h1>
          <h2 className="text-black font-bold text-md">
            Book a Robogals session for your school
          </h2>
        </div>
        <div className="mb-4">
          <label className="block text-grey-darker text-sm font-bold mb-2">
            Email
          </label>
          <input
            className="shadow appearance-none border border-black rounded w-full py-2 px-3 text-black bg-transparent placeholder-black"
            id="email"
            type="text"
            placeholder="Enter your email"
            onChange={(event) => {
              setFormDetails({ ...formDetails, email: event.target.value });
            }}
          />
        </div>
        <div className="">
          <label className="block text-grey-darker text-sm font-bold mb-2">
            Password
          </label>
          <input
            className="shadow appearance-none border border-black rounded w-full py-2 px-3 text-grey-darker mb-3 bg-transparent
                  placeholder-black"
            id="password"
            type="password"
            placeholder="Enter your Password Password"
            onChange={(event) => {
              setFormDetails({ ...formDetails, password: event.target.value });
            }}
          />
        </div>
        <div className="flex flex-col justify-between">
          <a
            className="inline-block align-baseline font-bold text-sm text-black underline text-right mb-6"
            href="#"
          >
            Forgot Password?
          </a>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg w-full"
            type="submit"
          >
            Sign In
          </button>
        </div>
      </form>
      {/* Sign in with Google Button */}
      <div className="mt-2 flex">
        <button
          type="button"
          className="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex justify-center items-center dark:focus:ring-[#4285F4]/55 mb-2 w-full"
        >
          <svg
            className="mr-2 -ml-1 w-4 h-4"
            aria-hidden="true"
            focusable="false"
            data-prefix="fab"
            data-icon="google"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 488 512"
          >
            <path
              fill="currentColor"
              d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
            ></path>
          </svg>
          Sign in with Google
        </button>
      </div>
      {/* Sign up */}
      <div className="mt-8 w-full text-center">
        <label>
          Don&apos;t have an account?{" "}
          <Link className="font-bold underline" href="/register">
            Register
          </Link>
        </label>
      </div>
    </div>
  );
}

export default LoginComp;
