/*  ./components/Navbar.jsx     */
import { useState, useEffect } from "react";
import Link from "next/link";

export const Navigation = ({ logo }) => {
  const [active, setActive] = useState(false);
  const [clientWindowHeight, setClientWindowHeight] = useState("");
  const [backgroundTransparacy, setBackgroundTransparacy] = useState(0);
  const [boxShadow, setBoxShadow] = useState(0);

  useEffect(() => {
    let backgroundTransparacyVar = clientWindowHeight / 600;

    if (backgroundTransparacyVar < 1) {
      let boxShadowVar = backgroundTransparacyVar * 0.1;
      setBackgroundTransparacy(backgroundTransparacyVar);
      setBoxShadow(boxShadowVar);
    }
  }, [clientWindowHeight]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  const handleClick = () => {
    setActive(!active);
  };

  const handleScroll = () => {
    setClientWindowHeight(window.scrollY);
  };

  return (
    <div
      className={`fixed w-screen bg-transparent p-3 z-50 ${
        active ? "bg-white" : null
      } `}
      style={
        active
          ? null
          : {
              background: `rgba(255, 255, 255, ${backgroundTransparacy})`,
              boxShadow: `rgb(0 0 0 / ${boxShadow}) 0px 0px 20px 6px`,
            }
      }
    >
      <div className="max-w-[1280px] m-auto">
        <nav className="flex items-center flex-wrap">
          <Link href="/">
            <a className="inline-flex items-center p-2 mr-4">
              <span
                className={`text-lg md:text-xl font-bold uppercase tracking-wide hover:underline underline-offset-2 decoration-2 ${
                  active || backgroundTransparacy != 0
                    ? "text-gray-800"
                    : "text-white"
                }`}
              >
                JagVillLeva
              </span>
            </a>
          </Link>
          <button
            className={`inline-flex p-3 hover:bg-white rounded lg:hidden ml-auto hover:text-gray-800 outline-none ${
              active || backgroundTransparacy != 0
                ? "text-gray-800"
                : "text-white"
            }`}
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
            <div className="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start flex flex-col lg:h-auto">
              <Link href="/">
                <a
                  className={`lg:inline-flex lg:w-auto w-full px-3 py-2 rounded items-center justify-center hover:underline underline-offset-4 decoration-1 font-light  ${
                    active || backgroundTransparacy != 0
                      ? "text-gray-800"
                      : "text-white"
                  }`}
                >
                  Hem
                </a>
              </Link>
              <Link href="/rules">
                <a
                  className={`lg:inline-flex lg:w-auto w-full px-3 py-2 rounded items-center justify-center hover:underline underline-offset-4 decoration-1 font-light  ${
                    active || backgroundTransparacy != 0
                      ? "text-gray-800"
                      : "text-white"
                  }`}
                >
                  Adoptionsregler
                </a>
              </Link>
              <Link href="/dogs">
                <a
                  className={`lg:inline-flex lg:w-auto w-full px-3 py-2 rounded items-center justify-center hover:underline underline-offset-4 decoration-1 font-light  ${
                    active || backgroundTransparacy != 0
                      ? "text-gray-800"
                      : "text-white"
                  }`}
                >
                  Hundar
                </a>
              </Link>
              <Link href="/news">
                <a
                  className={`lg:inline-flex lg:w-auto w-full px-3 py-2 rounded items-center justify-center hover:underline underline-offset-4 decoration-1 font-light  ${
                    active || backgroundTransparacy != 0
                      ? "text-gray-800"
                      : "text-white"
                  }`}
                >
                  Nyheter
                </a>
              </Link>
              <Link href="/">
                <a
                  className={`lg:inline-flex lg:w-auto w-full px-3 py-2 rounded items-center justify-center hover:underline underline-offset-4 decoration-1 font-light  ${
                    active || backgroundTransparacy != 0
                      ? "text-gray-800"
                      : "text-white"
                  }`}
                >
                  Kontakt
                </a>
              </Link>
              <Link href="/help">
                <a
                  className={`lg:inline-flex lg:w-auto w-full px-3 py-2 rounded items-center justify-center hover:underline underline-offset-4 decoration-1 font-light  ${
                    active || backgroundTransparacy != 0
                      ? "text-gray-800"
                      : "text-white"
                  }`}
                >
                  Hjälp oss
                </a>
              </Link>
              <Link href="/about">
                <a
                  className={`lg:inline-flex lg:w-auto w-full px-3 py-2 rounded items-center justify-center hover:underline underline-offset-4 decoration-1 font-light  ${
                    active || backgroundTransparacy != 0
                      ? "text-gray-800"
                      : "text-white"
                  }`}
                >
                  Om oss
                </a>
              </Link>
              <Link href="/blog">
                <a
                  className={`lg:inline-flex lg:w-auto w-full px-3 py-2 rounded items-center justify-center hover:underline underline-offset-4 decoration-1 font-light  ${
                    active || backgroundTransparacy != 0
                      ? "text-gray-800"
                      : "text-white"
                  }`}
                >
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
