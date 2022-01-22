import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "../Container";

export const Footer = () => {
  return (
    <div className="bg-stone-800 p-8">
      <Container>
        <div className="text-center md:text-left md:p-20 flex flex-col md:flex-row">
          <div className="w-full md:w-1/4 mb-10 md:mb-0">
            <h3 className="text-xl text-white mb-4">Sociala nätverk:</h3>
            <div className="flex flex-row transition-all justify-center md:justify-start">
              <Link
                href="https://www.facebook.com/groups/179711222611075/"
                passHref
              >
                <a
                  className="m-1 cursor-pointer hover:scale-105 transition ease-in-out"
                  target="_blank"
                >
                  <Image
                    src="/socials/facebook.png"
                    width={40}
                    height={40}
                    alt="facebook icon"
                  />
                </a>
              </Link>
              <Link
                href="https://www.instagram.com/jagvilllevahund/?hl=ru"
                passHref
              >
                <a
                  className="m-1 cursor-pointer hover:scale-105 transition ease-in-out"
                  target="_blank"
                >
                  <Image
                    src="/socials/instagram.png"
                    width={40}
                    height={40}
                    alt="facebook icon"
                  />
                </a>
              </Link>
            </div>
          </div>
          <div className="w-full md:w-1/4  mb-10 md:mb-0">
            <h3 className="text-xl text-white mb-4">Kontakt:</h3>
            <p className="text-gray-300">0737279717 Katerina</p>
            <p className="text-gray-300">10 -18 måndag-fredag</p>
            <p className="text-gray-300">jagvillleva.hund@gmail.com</p>
          </div>
          <div className="w-full md:w-2/4  mb-10 md:mb-0">
            <h3 className="text-xl text-white mb-4">Länkar:</h3>
            <div className="flex flex-col md:flex-row text-gray-300">
              <div className="w-full md:w-1/3 flex flex-col">
                <Link href="/" passHref>
                  <a className="line cursor-pointer hover:underline hover:text-white transition ease-in-out underline-offset-2 decoration-1">
                    Home
                  </a>
                </Link>
                <Link href="/" passHref>
                  <a className="line cursor-pointer hover:underline hover:text-white transition ease-in-out underline-offset-2 decoration-1">
                    Om adoption
                  </a>
                </Link>
                <Link href="/" passHref>
                  <a className="line cursor-pointer hover:underline hover:text-white transition ease-in-out underline-offset-2 decoration-1">
                    Om oss
                  </a>
                </Link>
              </div>

              <div className="w-full md:w-1/3  flex flex-col">
                <Link href="/" passHref>
                  <a className="line cursor-pointer hover:underline hover:text-white transition ease-in-out underline-offset-2 decoration-1">
                    Tips och råd
                  </a>
                </Link>
                <Link href="/" passHref>
                  <a className="line cursor-pointer hover:underline hover:text-white transition ease-in-out underline-offset-2 decoration-1">
                    Blogg
                  </a>
                </Link>
                <Link href="/" passHref>
                  <a className="line cursor-pointer hover:underline hover:text-white transition ease-in-out underline-offset-2 decoration-1">
                    Hundar
                  </a>
                </Link>
              </div>

              <div className="w-full md:w-1/3  flex flex-col">
                <Link href="/" passHref>
                  <a className="line cursor-pointer hover:underline hover:text-white transition ease-in-out underline-offset-2 decoration-1">
                    Nyheter
                  </a>
                </Link>
                <Link href="/" passHref>
                  <a className="line cursor-pointer hover:underline hover:text-white transition ease-in-out underline-offset-2 decoration-1">
                    Dokument
                  </a>
                </Link>
                <Link href="/" passHref>
                  <a className="line cursor-pointer hover:underline hover:text-white transition ease-in-out underline-offset-2 decoration-1">
                    Er hjälp
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};
