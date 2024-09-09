"use client";
import React, { useState } from "react";

export const GetEarlyAccess = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Add functionality to handle email submission, e.g., send to backend or API
    console.log("Email submitted:", email);
  };

  return (
    <div className="lowercase group p-1 rounded-full border z-50 bg-white bg-opacity-65">
      <div className="rounded-full  flex justify-center items-center  h-16 pl-7 p-2 border  space-x-2   group-hover:cursor-pointer">
        <input
          type="email"
          placeholder="your email address"
          className=" outline-none font-extralight text-lg text-[#373636] h-auto  "
          style={{
            minWidth: "400px",
          }}
        />

        <button className="px-4 py-2.5  opacity-95 rounded-full   bg-[#2C2B2B] text-white ">
          start now
        </button>
      </div>
    </div>
  );
};
