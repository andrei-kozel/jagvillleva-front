import React from 'react'
import Image from 'next/image'
import { Accordion } from '@/components/Accordion'
import { Container } from '@/components/Container'

export default function Rules() {
  return (
    <>
      <div className="h-3/5 md:h-2/3 w-full relative -z-10">
        <Image
          alt="dog"
          src="/bgimage.jpg"
          layout="fill"
          objectFit="cover"
          quality={100}
          priority
        />
      </div>

      <Container>
        <div className="w-full md:w-3/4 m-auto my-8 text-gray-700 px-4">
          <p className="text-2xl font-bold mb-4">Vanliga frågor</p>
          <p>
            Bläddra i listan nedan för att se en stor mängd information som konsumenter
            ofta efterfrågar om &quot;Jag Vill Leva&quot; foder. Om du inte hittar det du
            letar efter kan du kontakta oss med dina frågor.
          </p>
        </div>
        <Accordion title="Example title text" />
      </Container>
    </>
  )
}
