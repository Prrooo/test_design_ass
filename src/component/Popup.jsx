import React from "react";
import Navbar from "./Navbar";
import Section1 from "./Section1";
import Footer from "./Footer";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";
import FinalPage from "./FinalPage";
import { useState } from "react";

const Popup = (props) => {
  const [currentPage, setCurrentPage] = useState(1);

  const nextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, 5));
  };

  const prevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const renderPage = () => {
    switch (currentPage) {
      case 1:
        return <Section1 />;
      case 2:
        return <Section2 />;
      case 3:
        return <Section3 />;
      case 4:
        return <Section4 />;
      case 5:
        return <FinalPage />;
      default:
        return <Section1 />;
    }
  };

  if (!props.isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 z-50">
      <div className="bg-white rounded-lg shadow-lg w-[50vw]">
        <div className="flex justify-end">
          <button
            onClick={props.close}
            className="text-gray-500 hover:text-gray-700 absolute p-[2vw]"
          >
            &times;
          </button>
        </div>
        <h2 className="mb-4">
          <Navbar />
        </h2>
        <div>
          {/* <Section1/> */}
          {/* <Section2 /> */}
          {/* <Section3/> */}
          {/* <Section4 /> */}
          {renderPage()}
        </div>
        <Footer nextPage={nextPage} prevPage={prevPage} />
      </div>
    </div>
  );
};

export default Popup;
