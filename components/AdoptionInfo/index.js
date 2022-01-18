import Image from "next/image";
import React from "react";
import Button from "../Button";
import { Container } from "../Container";

export const AdoptionInfo = () => {
  return (
    <Container>
      <h3 className="text-3xl font-bold text-white text-center mb-16">
        Adoptering - hur går det till?
      </h3>
      <div className="flex flex-col md:flex-row text-white items-start text-center ">
        <div className="w-full md:w-1/3 flex justify-center items-center flex-col mb-16 md:mb-0">
          <Image src="/icons/lamp.png" width={70} height={70} alt="lamp icon" />
          <p className="text-xl text-center font-bold mt-6 mb-3">
            Fundera Ordentligt
          </p>
          <p className="w-4/5">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap
          </p>
        </div>

        <div className="w-full md:w-1/3 flex items-center flex-col mb-16 md:mb-0">
          <Image
            src="/icons/checked.png"
            width={70}
            height={70}
            alt="checked icon"
          />
          <p className="text-xl text-center font-bold mt-6 mb-3">
            Interesseanmällan
          </p>
          <p className="w-4/5 mb-3">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap
          </p>
          <Button path="/">Läs mer om hur det går</Button>
        </div>

        <div className="w-full md:w-1/3 flex justify-center items-center flex-col">
          <Image
            src="/icons/heart.png"
            width={70}
            height={70}
            alt="heart icon"
          />
          <p className="text-xl text-center font-bold mt-6 mb-3">
            Få hem Din nya vän
          </p>
          <p className="w-4/5 mb-3">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap
          </p>
          <Button path="/">Första tiden hemma</Button>
        </div>
      </div>
    </Container>
  );
};
