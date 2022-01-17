import { useState, useEffect } from "react";
import Image from "next/image";

export const BackgroundImage = ({ src, children }) => {
  const [clientWindowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
  }, []);

  return (
    <>
      <div className="absolute -z-10 overflow-hidden w-full h-screen xl:h-3/4">
        <div className="relative w-full h-full">
          <Image
            alt="dog"
            src={
              clientWindowWidth < 600
                ? src.BackgroundImageMobile.data.attributes.url
                : src.BackgroundImage.data.attributes.url
            }
            layout="fill"
            objectFit="cover"
            quality={100}
            priority
          />
        </div>
      </div>
      <div className="flex h-screen xl:h-3/4 justify-center text-center xl:text-right md:justify-center xl:justify-start items-center max-w-[1280px] m-auto">
        {children}
      </div>
    </>
  );
};
