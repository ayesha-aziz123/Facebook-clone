"use client";
import Image from "next/image";

export default function Home() {
  function clickLogIn() {
    alert("LogIn added successfully");
  }

  return (
    <div className="bg-gray-100 h-screen flex flex-col md:flex-row items-center justify-center md:flex-wrap">
      {/* left */}
      <div className="text-3xl w-1/2 px-10 md:w-1/2 md:px-10 text-center md:text-left mb-8 md:mb-0">
        <Image
          src={"/pictures/pic.svg"}
          alt="facebook logo"
          width={300}
          height={100}
        />
        <p className="sm:text-2xl mt-4 md:ml-2 md:mt-2 md:text-3xl ">
          Facebook helps you connect and share with the people in your life.
        </p>
      </div>

      {/* right */}

      <div className="bg-white flex flex-col p-5 rounded-xl w-full md:w-1/3">
        <input
          className="my-2 border-2 border-gray-200 p-3 rounded-md focus:outline-1 outline-blue-600 w-full"
          type="text"
          placeholder="Email addresss or phone number"
        />
        <input
          className="my-2 border-2 border-gray-200 p-3 rounded-md focus:outline-1 outline-blue-600 w-full"
          type="password"
          placeholder="Password"
        />
        <button
          onClick={() => alert("Login added successfully✅")}
          className="bg-blue-600 my-2 py-2 text-white text-lg font-bold rounded-md hover:bg-blue-500"
        >
          Log in
        </button>
        <p className=" cursor-pointer text-blue-600 text-sm text-center hover:underline">
          Forgotten passsword?
        </p>
        <span className="my-2">
          <hr />
        </span>
        <button className="bg-green-600 my-2 py-3 text-white text-lg font-bold rounded-md w-fit p-3 mx-auto hover:bg-green-500">
          Create new account
        </button>
      </div>
    </div>
  );
}
