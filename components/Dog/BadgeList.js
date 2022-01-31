import React from 'react'

export const BadgeList = ({}) => {
  return (
    <div className="flex flex-wrap gap-1 justify-center items-center my-4">
      <div className="flex flex-row justify-center items-center gap-1 bg-yellow-200 rounded-2xl ">
        <p className="text-xs text-yellow-800 py-1 px-2">2016-09-11</p>
      </div>
      <div className="flex flex-row justify-center items-center gap-1 bg-yellow-200 rounded-2xl ">
        <p className="text-xs text-yellow-800 py-1 px-2">Terrierblandras</p>
      </div>
      <div className="flex flex-row justify-center items-center gap-1 bg-yellow-200 rounded-2xl ">
        <p className="text-xs text-yellow-800 py-1 px-2">Hanhund</p>
      </div>
      <div className="flex flex-row justify-center items-center gap-1 bg-yellow-200 rounded-2xl ">
        <p className="text-xs text-yellow-800 py-1 px-2">Kastrerad</p>
      </div>
      <div className="flex flex-row justify-center items-center gap-1 bg-yellow-200 rounded-2xl ">
        <p className="text-xs text-yellow-800 py-1 px-2">22 cm</p>
      </div>
      <div className="flex flex-row justify-center items-center gap-1 bg-yellow-200 rounded-2xl ">
        <p className="text-xs text-yellow-800 py-1 px-2">55 kg</p>
      </div>
    </div>
  )
}
