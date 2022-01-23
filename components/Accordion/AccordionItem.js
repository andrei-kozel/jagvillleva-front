import React, { useState } from "react";

export const AccordionItem = ({ title, text }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-full md:w-3/4 m-auto">
      <div
        onClick={handleClick}
        className="cursor-pointer p-4 bg-gray-200 text-xl font-bold"
      >
        {title}
      </div>
      {isOpen && <div className="p-4 bg-gray-100">{text}</div>}
    </div>
  );
};
