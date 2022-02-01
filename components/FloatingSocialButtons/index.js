import React from 'react'
import Button from '../Button'
import Image from 'next/image'
import Link from 'next/link'

export const FloatingSocialButtons = () => {
  return (
    <div className="fixed flex flex-col gap-1 md:flex-row bottom-3 right-3 z-50">
      <Link href="https://www.facebook.com/groups/179711222611075/" passHref>
        <a
          className="cursor-pointer hover:scale-105 transition ease-in-out bg-white flex p-2 rounded-full "
          target="_blank">
          <Image src="/socials/facebook.png" width={40} height={40} alt="facebook icon" />
        </a>
      </Link>
      <Link href="https://www.instagram.com/jagvilllevahund/?hl=ru" passHref>
        <a
          className="cursor-pointer hover:scale-105 transition ease-in-out flex bg-white p-2 rounded-full"
          target="_blank">
          <Image
            src="/socials/instagram.png"
            width={40}
            height={40}
            alt="facebook icon"
          />
        </a>
      </Link>
    </div>
  )
}
