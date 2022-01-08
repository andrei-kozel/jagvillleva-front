import Image from "next/image";

export const BackgroundImage = ({ src, children }) => {
  return (
    <>
      <div className="absolute -z-10 overflow-hidden w-screen h-screen xl:h-3/4">
        <Image
          alt="dog"
          src={src}
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </div>
      <div className="flex h-screen xl:h-3/4 justify-center text-center xl:text-right md:justify-center xl:justify-end items-center max-w-[1280px] m-auto">
        {children}
      </div>
    </>
  );
};
