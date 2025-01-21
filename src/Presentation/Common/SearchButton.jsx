import React, { useState } from "react";
import { TbAdjustmentsSearch } from "react-icons/tb";
import { Filters } from "../Features/Filters";

export const SearchButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const onClose = () => {
    setIsOpen(false);
  };
  return (
    <>
      <Filters isOpen={isOpen} onClose={onClose} />
      <div className="fixed bottom-4 right-4">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative bg-blue-500 text-white p-4 rounded-full shadow-lg"
        >
          <TbAdjustmentsSearch size={24} />
          {/* <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs">
            9
          </span> */}
        </button>
      </div>
    </>
  );
};
