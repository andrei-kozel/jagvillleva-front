import { fetchAPI } from "@/lib/api";
import { BackgroundImage } from "@/components/BackgroundImage";
import Button from "@/components/Button";
import { Carousel } from "@/components/Carousel";

export default function Home({ homepage, dogs }) {
  return (
    <>
      <BackgroundImage src={homepage.data.attributes}>
        <div className="flex flex-col justify-center items-center md:items-start h-screen md:h-fit ">
          <h1 className="text-xl md:text-3xl font-bold text-gray-200">
            TILLSAMMANS KAN
          </h1>
          <h1 className="text-xl md:text-3xl font-bold text-gray-200 mb-4">
            VI RÄDDA MÅNGA HUNDLIV
          </h1>
          <Button path="/" color="">
            Mer information
          </Button>
        </div>
      </BackgroundImage>
      <div className="md:p-20 flex justify-center">
        <div className="md:w-1/2 text-center w-full px-4 py-8">
          <p className="text-3xl font-bold mb-2 text-gray-800">
            VI SOM ÄLSKAR OCH HJÄLPER HUNDAR
          </p>
          <p className="text-2xl font-bold mb-4 text-gray-800">
            HJÄLPER DJUR ATT FÅ NYA HEM
          </p>
          <p className="mb-4 text-gray-700">
            Syftet med denna grupp är att rädda så många hund liv som möjligt.
            Hundar som letar efter ett nytt hem befinner sig i Ryssland under
            inhumana levnadsförhållanden. Hundar som vi räddar är inte enbart
            hemlösa utan dem är hundar som inte har en chans att klara sig
            vidare i livet. För dessa hundar tickar klockan snart slut, de går
            mot en säker död. Alla hundarna behöver komma till en familj som kan
            ge dom ett hem för livet och där dom får oändligt med kärlek livet
            ut! Vi tjänar absolut inga pengar på de hundars liv, utan tvärtom,
            vi lägger pengar på att rädda dom. Vi har hjälpt hundar under lång
            tid och har erfarenhet och rekommendationer. Alla kan få referens
            från någon av ägarna som har adapterad hund via oss!
          </p>
          <p className="text-2xl">TILSAMMANS KAN VI RÄDDA MÅNGA HUNDLIV!</p>
        </div>
      </div>
      <div className="md:p-10 flex justify-center">
        <div className="max-w-[1280px] m-auto w-full px-4 my-4">
          <Carousel data={dogs} />
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const [dogs, homepage] = await Promise.all([
    fetchAPI("/dogs"),
    fetchAPI("/homepage"),
  ]);

  return {
    props: { dogs, homepage },
    revalidate: 1,
  };
}
