import React from "react";
import Image from "next/image";
import { Container } from "../Container";

export const Help = () => {
  return (
    <Container>
      <div className="flex justify-center items-center w-full flex-col-reverse md:flex-row">
        <div className="w-full pt-10 md:px-0 md:w-2/4 justify-center items-center flex">
          <Image src="/dog-help.jpg" alt="corgi dog" width={300} height={400} />
        </div>
        <div className="w-full md:w-1/4 px-16 my-4 md:px-0 justify-center md:justify-start items-center md:items-start flex flex-col text-center md:text-left">
          <p>
            Varje krona som ni kan skänka till hundarna är en chans till att
            förlänga deras liv.
          </p>
          <div className="relative flex flex-row items-center bg-yellow-300 w-fit px-4 py-2 mb-2 mt-5 rounded-xl shadow-md cursor-pointer hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-opacity-75 hover:text-white">
            <Image
              src="/icons/swish.png"
              alt="swish logo"
              width={30}
              height={30}
            />
            <p className="ml-2 font-bold">+46737279717</p>
          </div>
          <p className="text-sm text-gray-500">
            Snälla skriv era namn, namn på hunden när ni skänker med meddelande
            &quot;gåva till hund&quot; org.
          </p>
        </div>
      </div>
    </Container>
  );
};
