import React, { useState } from 'react'
import { FaPlus, FaMinus } from 'react-icons/fa'

export const AccordionItem = ({ title, text }) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleClick = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="w-full md:w-3/4  m-auto px-1">
      <div
        onClick={handleClick}
        className="cursor-pointer p-4 border-b-2 border-b-gray-200 flex flex-row items-center gap-2 hover:border-yellow-400">
        {isOpen ? <FaMinus width={15} height={15} /> : <FaPlus width={16} height={16} />}
        <p className="text-sm md:text-xl font-bold text-gray-700">{title}</p>
      </div>
      {isOpen && <div className="p-4 bg-gray-100">{text}</div>}
    </div>
  )
}
