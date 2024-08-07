import React from "react";

const Box = ({ src, text }) => {
  return (
    <div className="w-[6vw]">
      <img src={src} alt="some" className="border-2"></img>
      <p className="text-center">{text}</p>
    </div>
  );
};

export default Box;
