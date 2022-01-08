/*  ./components/Navbar.jsx     */
import Link from "next/link";
import { useState } from "react";

export const Navigation = ({ logo }) => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <div className="fixed w-screen opacity-95 bg-yellow-100 p-3 z-50">
      <div className="max-w-[1280px] m-auto">
        <nav className="flex items-center flex-wrap">
          <Link href="/">
            <a className="inline-flex items-center p-2 mr-4 ">
              <span className="text-xl text-zinc-700 font-bold uppercase tracking-wide">
                JagVillLeva
              </span>
            </a>
          </Link>
          <button
            className=" inline-flex p-3 hover:bg-yellow-700 rounded lg:hidden text-zinc-700 ml-auto hover:text-white outline-none"
            onClick={handleClick}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          <div
            className={`${
              active ? "" : "hidden"
            }   w-full lg:inline-flex lg:flex-grow lg:w-auto`}
          >
            <div className="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto">
              <Link href="/">
                <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-zinc-700 font-bold items-center justify-center hover:bg-yellow-700 hover:text-white ">
                  Hem
                </a>
              </Link>
              <Link href="/rules">
                <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-zinc-700 font-bold items-center justify-center hover:bg-yellow-700 hover:text-white">
                  Adoptionsregler
                </a>
              </Link>
              <Link href="/dogs">
                <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-zinc-700 font-bold items-center justify-center hover:bg-yellow-700 hover:text-white">
                  Hundar
                </a>
              </Link>
              <Link href="/news">
                <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-zinc-700 font-bold items-center justify-center hover:bg-yellow-700 hover:text-white">
                  Nyheter
                </a>
              </Link>
              <Link href="/">
                <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-zinc-700 font-bold items-center justify-center hover:bg-yellow-700 hover:text-white">
                  Kontakt
                </a>
              </Link>
              <Link href="/help">
                <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-zinc-700 font-bold items-center justify-center hover:bg-yellow-700 hover:text-white">
                  Hjälp oss
                </a>
              </Link>
              <Link href="/about">
                <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-zinc-700 font-bold items-center justify-center hover:bg-yellow-700 hover:text-white">
                  Om oss
                </a>
              </Link>
              <Link href="/blog">
                <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-zinc-700 font-bold items-center justify-center hover:bg-yellow-700 hover:text-white">
                  Blogg
                </a>
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};
