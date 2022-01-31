import React from 'react'
import Image from 'next/image'

export const PawItem = ({ title, text }) => {
  return (
    <div className="flex flex-row items-center gap-1 w-full my-1">
      <Image width={20} height={20} src={'/icons/paw.png'} alt="" />
      <p className="text-xs md:text-base">
        <strong>{title}</strong>: {text}
      </p>
    </div>
  )
}
