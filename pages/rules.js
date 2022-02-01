import React from 'react'
import Image from 'next/image'
import { Accordion } from '@/components/Accordion'
import { Container } from '@/components/Container'

export default function Rules() {
  return (
    <>
      <Container>
        <div className="w-full md:w-3/4 m-auto mb-8 text-gray-700 px-4 pt-24">
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
