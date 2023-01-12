/*
Design of the Login Form
 */

import Link from "next/link";
import React from "react";

function LoginComp({setFormDetails, formDetails, handleLogin }) {
  return (
      <div className="flex h-5/6 items-center rounded-3xl md:w-full sm:w-full lg:w-2/3 xl:w-1/2 bg-opacity-60 bg-white p-6 sm:p-10 md:p-20 lg:p-30">
        <div className="w-full">
        <form onSubmit={handleLogin}>
          <div className="mb-8">
            <h1 className="block text-6xl font-medium mb-4 text-black">
              Log In
            </h1>
            <h2 className="text-black text-md">
              Book a Robogals session for your school
            </h2>
          </div>
          <div className="mb-4 pb-2">
            <label className="block text-grey-darker text-md font-medium mb-2">
              Email
            </label>
            <input
              className="shadow appearance-none border border-black rounded w-full py-2 px-3 text-black bg-transparent placeholder-gray"
              id="email"
              type="text"
              placeholder="Enter your email"
              onChange={(event) => {
                setFormDetails({ ...formDetails, email: event.target.value });
              }}
            />
          </div>
          <div className="=">
            <label className="block text-black text-md font-medium mb-2">
              Password
            </label>
            <input
              className="shadow appearance-none border border-black rounded w-full py-2 px-3 text-black mb-3 bg-transparent
                    placeholder-gray"
              id="password"
              type="password"
              placeholder="Enter your password"
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
            <button className="blueButton drop-shadow-xl" type="submit">
              Log In
            </button>
          </div>
        </form>
        {/* Sign in with Google Button */}
        <div className="mt-3 flex">
          <button className="blueButton drop-shadow-xl bg-white hover:bg-gray-200 text-black font-medium rounded-lg px-5 py-2.5 text-center inline-flex justify-center items-center dark:focus:ring-[#4285F4]/55 mb-2 w-full">
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
            Log in with Google
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
      </div>
  );
}

export default LoginComp;
