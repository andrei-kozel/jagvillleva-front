import React from "react";
import Image from "next/image";
import { Container } from "@/components/Container";
import { AboutCard } from "@/components/AboutCard";

export default function About({}) {
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
        <div className="flex flex-col-reverse md:flex-row">
          <div className="w-11/12 md:w-3/5 m-auto my-10 text-center justify-center items-center flex font-bold">
            <p className="text-3xl">Varför vi hjälper hundar från Ryssland?</p>
          </div>
          <div className="w-11/12 md:w-2/5 bg-slate-100 p-6 md:p-10 -mt-20 m-auto  md:-mt-40">
            <p className="text-3xl uppercase font-bold text-center mb-4">
              Om Oss
            </p>
            <p className="my-1">
              Vi är officiell ideell förening <b>“Jag Vill Leva”</b> med
              organisations nummer <b>802517-9931</b>.
            </p>
            <p className="my-1">
              Alla som är medlemmar i vår organisation arbetar frivilligt och
              med ett rent hjärta.
            </p>
            <p className="my-1">
              Vi arbetar med kuratorer i Ryssland som tar hand om hundar innan
              dessa hundar kommer till dig. Alla kuratorer är frivilliga som vi.
            </p>
            <p className="my-1">
              Vi lär oss ständigt och försöker göra vårt arbete så effektivt och
              korrekt som möjligt.
            </p>
            <p className="my-1">Vi följer Sveriges lagar och regler.</p>
            <p className="my-1">
              Vi kan inte alltid undvika misstag, men bara en som inte gör något
              aldrig gör fel.
            </p>
            <p className="my-1">
              Glöm inte att alla medlemmar i vår organisation och kuratorer
              också har familjer, arbetar och inte kan svara på meddelanden
              dygnet runt.
            </p>
            <p className="my-1">
              Vi är olika, men vi förenas alla av en stor kärlek till djur och
              önskan att rädda så många liv som möjligt.
            </p>
            <p className="text-center mt-2">Tack för att du är med oss!</p>
          </div>
        </div>

        <div className="my-20 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 md:gap-4">
          <AboutCard
            src="/about/1.jpg"
            title="HOPPLÖSHET"
            text="Antalet herrelösa hundar i Ryssland är från 14 till 23 miljoner individer och katter från 7 till 40 miljoner. Detta antal växer hela tiden. Sterilisering kostar pengar. Att kasta ut djuret på gatan är gratis."
          />

          <AboutCard
            src="/about/2.jpg"
            title="HUNGER"
            text="Jourhemmens levnadsförhållande är bristfärdiga, då jourhem
            stöds av frivilliga donationer. Det är inte många som har råd eller villiga att donera. Ofta finns det inga pengar ens för den enklaste maten och hundar dör av hunger, förkylning och sjukdom."
          />

          <AboutCard
            src="/about/3.jpg"
            title="KYLA"
            text="Det största antalet dödsfall bland djur är under vinterhalvåret. Vi räddar ofta hundar från de norra regionerna i landet där kylan kan uppnå -50 grader. Jourhem har ofta inga pengar att betala för el. Och vattnet i hundarnas skålar förvandlas till is."
          />

          <AboutCard
            src="/about/4.jpg"
            title="INGET SKYDD"
            text='Varje person i Ryssland kan kasta ut sitt djur på gatan eller avliva sitt djur hos en veterinärklinik utan förklaring. Trots den nya lagen om "skydd av djur", som dök upp i Ryssland i år, fortsätter djur att dödas, våldtas, misshandlas och kastas ut på gatan.'
          />

          <AboutCard
            src="/about/5.jpg"
            title="VÅLD
"
            text='En rörelse som kallas " doghunter " i Ryssland börjar växa och bli populär. Döda djuret så blir du en hjälte. Döda djuret som sadist och bli populär. Dessa "människor" lämnar förgiftad mat på gatorna och i parkerna. På vintern sprids gift direkt i snön. Hundar säljs/används som sexslavar. Ingen kan skydda de hemlösa hundarna från sadister som får njutning av våld.'
          />

          <AboutCard
            src="/about/6.jpg"
            title="DÖD"
            text="I Ryssland kan vem som helst beställa en så kallad skytt. Du ringer bara till en viss organisation och efter ett tag kommer personalen och skjuter de hemlösa hundarna som stör dig. De dödas som hela familjer. Valpar som vuxna hundar. Även de hundar som genomgick sterilisering under det statliga programmet och släpptes ut i deras naturliga livsmiljö (gatan). Sådana hundar har stora gula taggar i öronen som inte kan missas."
          />
        </div>
      </Container>
    </>
  );
}
