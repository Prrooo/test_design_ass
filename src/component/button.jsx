import React, { useState } from "react";
import Popup from "./Popup";

const Button = () => {

    const [isOpen,setIsOpen]=useState(false);

    const PopUpHandler=()=>{
        setIsOpen(!isOpen);
        console.log("working" ,isOpen);
    }

  return (
    <div className="flex justify-center items-center h-[100vh]">
      <button onClick={()=>{PopUpHandler()}} className="text-white rounded-md border-white bg-blue-800 px-10 py-4">
        INSTANT QUOTE
      </button>
      <Popup isOpen={isOpen} close={PopUpHandler} />
    </div>
  );
};

export default Button;
