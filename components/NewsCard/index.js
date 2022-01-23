import Image from "next/image";
import React, { useState } from "react";
import { FaUser, FaClock } from "react-icons/fa";
import Button from "../Button";

export const NewsCard = ({}) => {
  return (
    <div className="flex flex-col md:flex-row rounded-lg overflow-hidden border border-gray-100 my-10">
      <div className="w-full md:w-1/4 min-h-[300px] relative">
        <Image
          src="/corgi-big.jpg"
          layout="fill"
          alt="corgi dog"
          objectFit="cover"
        />
      </div>
      <div className="py-6 px-4 w-full md:w-3/4">
        <p className="text-xl font-bold text-gray-800"> Title example</p>
        <div className=" flex flex-row py-1">
          <div className="flex flex-row items-center mr-4 text-xs">
            <FaUser size={16} color="rgb(209 213 219)" />
            <p className="ml-1 text-gray-400">John Doe</p>
          </div>
          <div className="flex flex-row items-center text-xs">
            <FaClock size={16} color="rgb(209 213 219)" />
            <p className="ml-1 text-gray-400">12.12.2021</p>
          </div>
        </div>
        <p className="mt-4 mb-6 line-clamp-5">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry&apos;s standard dummy text
          ever since the 1500s, when an unknown printer took a galley of type
          and scrambled it to make a type specimen book. It has survived not
          only five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of
          the printing and typesetting industry. Lorem Ipsum has been the
          industry&apos;s standard dummy text ever since the 1500s, when an
          unknown printer took a galley of type and scrambled it to make a type
          specimen book. It has survived not only five centuries, but also the
          leap into electronic typesetting, remaining essentially unchanged. It
          was popularised in the 1960s with the release of Letraset sheets
          containing Lorem Ipsum passages, and more recently with desktop
          publishing software like Aldus PageMaker including versions of Lorem
          Ipsum.
        </p>
        <Button path="/" color="">
          Läsa mer
        </Button>
      </div>
    </div>
  );
};
