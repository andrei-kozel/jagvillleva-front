import { Container } from "@/components/Container";
import Image from "next/image";

export default function Error() {
  return (
    <Container>
      <div className="h-screen flex flex-col justify-center items-center">
        <div className="text-center px-4">
          <p className="text-5xl text-orange-500 font-bold mb-2">
            404 Error Page
          </p>
          <p className="text-xl font-light">
            Inte ens hunden kan hitta spåret av sidan du letar efter.
          </p>
        </div>
        <div className="w-full md:w-1/3 relative h-[200px]">
          <Image
            src="/corgi-tr.png"
            layout="fill"
            alt="corgi"
            objectFit="contain"
          />
        </div>
      </div>
    </Container>
  );
}
