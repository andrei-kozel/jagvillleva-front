import React from "react";
import Image from "next/image";

export const AboutCard = ({ title, text, src }) => {
  return (
    <div className="w-11/12 m-4">
      <div className="w-full h-[300px] relative overflow-hidden rounded-xl flex flex-col items-center">
        <div className="absolute backdrop-opacity-20 bg-gray-700/40 w-full h-full z-20 flex justify-center items-center">
          <p className="text-white font-bold text-2xl">{title}</p>
        </div>
        <Image
          alt="dog"
          src={src}
          layout="fill"
          objectFit="cover"
          quality={100}
          priority
        />
      </div>
      <p className="z-30 text-center mt-4 w-11/12 m-auto">{text}</p>
    </div>
  );
};
