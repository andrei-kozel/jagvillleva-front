/*  ./components/Navbar.jsx     */
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export const Navigation = ({ logo }) => {
  const [active, setActive] = useState(false)

  const handleClick = () => {
    setActive(!active)
  }

  return (
    <div className={`fixed w-screen py-3 z-50 bg-white shadow-md`}>
      <div className="max-w-[1280px] m-auto">
        <nav className="flex items-center flex-wrap">
          <Link href="/">
            <a className="inline-flex items-center p-2 mr-4">
              <span
                className={`text-gray-800 text-lg md:text-xl font-bold uppercase tracking-wide hover:underline underline-offset-2 decoration-2 
                `}>
                JagVillLeva
              </span>
            </a>
          </Link>
          <button
            className={`inline-flex p-3 bg-white rounded lg:hidden ml-auto text-gray-800 outline-none`}
            onClick={handleClick}>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
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
              active ? '' : 'hidden'
            }   w-full lg:inline-flex lg:flex-grow lg:w-auto`}>
            <div className="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start flex flex-col lg:h-auto">
              <Link href="/">
                <a
                  className={`lg:inline-flex lg:w-auto w-full px-3 py-2 rounded items-center justify-center hover:underline underline-offset-4 decoration-1 font-light text-gray-800 `}>
                  Hem
                </a>
              </Link>
              <Link href="/rules">
                <a
                  className={`lg:inline-flex lg:w-auto w-full px-3 py-2 rounded items-center justify-center hover:underline underline-offset-4 decoration-1 font-light text-gray-800 `}>
                  Adoptionsregler
                </a>
              </Link>
              <Link href="/dogs">
                <a
                  className={`lg:inline-flex lg:w-auto w-full px-3 py-2 rounded items-center justify-center hover:underline underline-offset-4 decoration-1 font-light text-gray-800 `}>
                  Hundar
                </a>
              </Link>
              <Link href="/news">
                <a
                  className={`lg:inline-flex lg:w-auto w-full px-3 py-2 rounded items-center justify-center hover:underline underline-offset-4 decoration-1 font-light text-gray-800 `}>
                  Nyheter
                </a>
              </Link>
              <Link href="/">
                <a
                  className={`lg:inline-flex lg:w-auto w-full px-3 py-2 rounded items-center justify-center hover:underline underline-offset-4 decoration-1 font-light text-gray-800 `}>
                  Kontakt
                </a>
              </Link>
              <Link href="/help">
                <a
                  className={`lg:inline-flex lg:w-auto w-full px-3 py-2 rounded items-center justify-center hover:underline underline-offset-4 decoration-1 font-light text-gray-800 `}>
                  Hjälp oss
                </a>
              </Link>
              <Link href="/about">
                <a
                  className={`lg:inline-flex lg:w-auto w-full px-3 py-2 rounded items-center justify-center hover:underline underline-offset-4 decoration-1 font-light text-gray-800 `}>
                  Om oss
                </a>
              </Link>
              <Link href="/blog">
                <a
                  className={`lg:inline-flex lg:w-auto w-full px-3 py-2 rounded items-center justify-center hover:underline underline-offset-4 decoration-1 font-light text-gray-800 `}>
                  Blogg
                </a>
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </div>
  )
}
