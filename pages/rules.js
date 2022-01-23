import React from "react";
import Image from "next/image";
import { Accordion } from "@/components/Accordion";
import { Container } from "@/components/Container";

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
        <Accordion />
      </Container>
    </>
  );
}
