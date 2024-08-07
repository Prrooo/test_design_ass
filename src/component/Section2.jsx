import React from "react";
import { useState } from "react";

const Section2 = () => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="px-6 pb-8  overflow-y-auto h-[30vw]">
      <p className="font-semibold text-center w-full text-3xl p-4 pb-5">
        General Information
      </p>
      <form className="flex flex-col gap-2">
        <div className="flex flex-col">
          <label className="pb-2">Where did you hear about us?</label>
          <select className="h-[2.5vw] border-2 rounded-md hover:shadow-md  hover:shadow-blue-500">
            <option value="">Please Select *</option>
            <option value="angleList">Angle's List</option>
            <option value="Facebook">Facebook</option>
            <option value="google">Google</option>
            <option value="googleAd">Google AD</option>
            <option value="postcard">PostCard</option>
          </select>
        </div>
        <div>
          <p className="text-center">What type of project is this?</p>
          <div className="flex justify-center items-center mt-4">
            <label
              className={`flex items-center p-4 m-2 rounded-lg cursor-pointer ${
                selectedOption === "residence"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200"
              }`}
            >
              <input
                type="radio"
                name="option"
                value="residence"
                checked={selectedOption === "residence"}
                onChange={handleOptionChange}
                className="hidden"
              />
              <span className="ml-2">Residence</span>
            </label>
            <label
              className={`flex items-center p-4 m-2 rounded-lg cursor-pointer ${
                selectedOption === "commercial"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200"
              }`}
            >
              <input
                type="radio"
                name="option"
                value="commercial"
                checked={selectedOption === "commercial"}
                onChange={handleOptionChange}
                className="hidden"
              />
              <span className="ml-2">Commercial</span>
            </label>
          </div>
          <div className="flex flex-col pt-[1vw]">
            <select className="h-[2.5vw] border-2 rounded-md hover:shadow-md  hover:shadow-blue-500">
              <option value="">Number of Ground (above ground) *</option>
              <option value="angleList">1 story</option>
              <option value="Facebook">2 story</option>
              <option value="google">3 story</option>
              <option value="googleAd">4 story</option>
            </select>
          </div>
          <div className="flex flex-col pt-[1vw]">
            <select className="h-[2.5vw] border-2 rounded-md hover:shadow-md  hover:shadow-blue-500">
              <option value="">Plus a Basement?</option>
              <option value="angleList">Yes</option>
              <option value="Facebook">No</option>
            </select>
          </div>
          <div className="flex w-full justify-evenly gap-[0.5vw]  pt-[2vw]">
            <div className="px-[2vw] flex flex-col justify-between py-[0.5vw] bg-gray-200 rounded-md">
              <p className="text-center">Small Home</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M21 20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V9.48907C3 9.18048 3.14247 8.88917 3.38606 8.69972L11.3861 2.47749C11.7472 2.19663 12.2528 2.19663 12.6139 2.47749L20.6139 8.69972C20.8575 8.88917 21 9.18048 21 9.48907V20Z"></path>
              </svg>
              <button className="px-[1vw] py-[0.3vw] bg-gray-300 rounded-md my-[0.3vw]">Select</button>
            </div>
            <div className="px-[2vw] flex flex-col justify-between py-[0.5vw] bg-gray-200 rounded-md">
              <p className="text-center">Medium Home</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-[2vw]"
              >
                <path d="M21 20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V9.48907C3 9.18048 3.14247 8.88917 3.38606 8.69972L11.3861 2.47749C11.7472 2.19663 12.2528 2.19663 12.6139 2.47749L20.6139 8.69972C20.8575 8.88917 21 9.18048 21 9.48907V20Z"></path>
              </svg>
              <button className="px-[1vw] py-[0.3vw] bg-gray-300 rounded-md my-[0.3vw]">Select</button>
            </div>
            <div className="px-[2vw] flex flex-col justify-between py-[0.5vw] bg-gray-200 rounded-md">
              <p className="text-center">Large Home</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-[2vw]"
              >
                <path d="M21 20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V9.48907C3 9.18048 3.14247 8.88917 3.38606 8.69972L11.3861 2.47749C11.7472 2.19663 12.2528 2.19663 12.6139 2.47749L20.6139 8.69972C20.8575 8.88917 21 9.18048 21 9.48907V20Z"></path>
              </svg>
              <button className="px-[1vw] py-[0.3vw] bg-gray-300 rounded-md my-[0.3vw]">Select</button>
            </div>
            <div className="px-[2vw] flex flex-col justify-between py-[0.5vw] bg-gray-200 rounded-md">
              <p className="text-center" >XL Home</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-[2vw]"
              >
                <path d="M21 20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V9.48907C3 9.18048 3.14247 8.88917 3.38606 8.69972L11.3861 2.47749C11.7472 2.19663 12.2528 2.19663 12.6139 2.47749L20.6139 8.69972C20.8575 8.88917 21 9.18048 21 9.48907V20Z"></path>
              </svg>
              <button className="px-[1vw] py-[0.3vw] bg-gray-300 rounded-md my-[0.3vw]">Select</button>
            </div>
            <div className="px-[2vw] flex flex-col justify-between py-[0.5vw] bg-gray-200 rounded-md">
              <p className="text-center">XXL Home</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-[2vw]"
              >
                <path d="M21 20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V9.48907C3 9.18048 3.14247 8.88917 3.38606 8.69972L11.3861 2.47749C11.7472 2.19663 12.2528 2.19663 12.6139 2.47749L20.6139 8.69972C20.8575 8.88917 21 9.18048 21 9.48907V20Z"></path>
              </svg>
              <button className="px-[1vw] py-[0.3vw] bg-gray-300 rounded-md my-[0.3vw]">Select</button>
            </div>
            
          </div>
        </div>
      </form>
    </div>
  );
};

export default Section2;
