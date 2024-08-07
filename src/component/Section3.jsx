import React from "react";

const Section3 = () => {
  return (
    <div className="px-6 pb-8  overflow-y-auto h-[30vw]">
      <div className="flex flex-col text-center w-full text-3xl p-4 pb-5 bg-blue-100 rounded-md">
        <p>
          Track Cleaning Step #1:
        </p>
        <p>How many tracks do you want us to deep clean?</p>
      </div>
      <div className="flex justify-between pt-[2vw] px-[1vw]">
        <p className=" font-semibold text-xl">Track Cleaning</p>
        <div className="px-[4vw]">
            <input type="number" className="border-2 w-[4vw]"></input>
        </div>
      </div>
    </div>
  );
  
};

export default Section3;
