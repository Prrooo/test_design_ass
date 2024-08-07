import React from "react";
import { useState } from "react";

const Section4 = () => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="px-6 pb-8  overflow-y-auto h-[30vw]">
      <p className="font-semibold text-center w-full text-3xl p-4 pb-5">
        General Information
      </p>
      <div className=" grid grid-cols-2 gap-[0.7vw]">
        <div>
          <input
            type="text"
            required
            placeholder="First Name *"
            className="border-2 w-full rounded-md h-[2.4vw] pl-[0.5vw] hover:border-blue-300 hover:shadow-blue-300"
          ></input>
        </div>
        <div>
          <input
            type="text"
            required
            placeholder="Street Address *"
            className="border-2 w-full rounded-md h-[2.4vw] pl-[0.5vw] hover:border-blue-300 hover:shadow-blue-300"
          ></input>
        </div>
        <div>
          <input
            type="text"
            required
            placeholder="Last Name *"
            className="border-2 w-full rounded-md h-[2.4vw] pl-[0.5vw] hover:border-blue-300 hover:shadow-blue-300"
          ></input>
        </div>
        <div>
          <select className="border-2  hover:shadow-md  hover:border-blue-300 hover:shadow-blue-300 w-full rounded-md h-[2.4vw] pl-[0.5vw]">
            <option value="">Please Select *</option>
            <option value="angleList">Aflon, MN</option>
            <option value="Facebook">Bayport, MN</option>
            <option value="google">Centerville, MN</option>
            <option value="googleAd">Eden Paririe, MN</option>
            <option value="postcard">Hugo, MN</option>
          </select>
        </div>
        <div>
          <input
            type="number"
            required
            placeholder="Primary Phone *"
            className="border-2 w-full rounded-md h-[2.4vw] pl-[0.5vw] hover:border-blue-300 hover:shadow-blue-300"
          ></input>
        </div>
        <div>
          <input
            type="number"
            required
            placeholder="Zipcode *"
            className="border-2 w-full rounded-md h-[2.4vw] pl-[0.5vw] hover:border-blue-300 hover:shadow-blue-300"
          ></input>
        </div>
      </div>
      <div className="my-[1vw] w-1/2 relative">
        <div className="flex items-center absolute ">
          <label
            className={`flex items-center px-[1vw] py-[0.5vw]  rounded-lg cursor-pointer ${
              selectedOption === "YES"
                ? "bg-blue-500 text-white"
                : "bg-gray-200"
            }`}
          >
            <input
              type="radio"
              name="option"
              value="YES"
              checked={selectedOption === "YES"}
              onChange={handleOptionChange}
              className="hidden"
            />
            <span>YES</span>
          </label>
          <label
            className={`flex items-center px-[1vw] py-[0.5vw] rounded-lg cursor-pointer ${
              selectedOption === "NO" ? "bg-blue-500 text-white" : "bg-gray-200"
            }`}
          >
            <input
              type="radio"
              name="option"
              value="NO"
              checked={selectedOption === "NO"}
              onChange={handleOptionChange}
              className="hidden"
            />
            <span>NO</span>
          </label>
        </div>
        <p className="ml-[8vw]">
          I agree to receive messages regarding exterior cleaning for
        </p>
        <p>
          {" "}
          my home or business from A Step Up Window Cleaning LLC. Message and
          data rates may apply. Frequency varies. Text STOP to cancel.
        </p>
      </div>
      <div className="flex gap-[0.7vw] w-1/2 flex-col">
        <div>
          <input
            type="number"
            placeholder="Alternate Phone"
            className="border-2 w-full rounded-md h-[2.4vw] pl-[0.5vw] hover:border-blue-300 hover:shadow-blue-300"
          ></input>
        </div>
        <div>
          <input
            type="text"
            required
            placeholder="Email Address *"
            className="border-2 w-full rounded-md h-[2.4vw] pl-[0.5vw] hover:border-blue-300 hover:shadow-blue-300"
          ></input>
        </div>
      </div>
    </div>
  );
};

export default Section4;
