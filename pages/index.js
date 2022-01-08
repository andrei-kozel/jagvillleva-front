import { fetchAPI } from "@/lib/api";
import { BackgroundImage } from "@/components/Homepage/BackgroundImage";
import Link from "next/link";

export default function Home({ homepage, dogs }) {
  return (
    <>
      <BackgroundImage
        src={homepage.data.attributes.BackgroundImage.data.attributes.url}
      >
        <div className="backdrop-blur-sm bg-white/20 p-6 rounded-lg flex flex-col items-end">
          <h1 className="text-3xl font-extrabold text-zinc-800">
            TILLSAMMANS KAN
          </h1>
          <h1 className="text-3xl font-extrabold text-zinc-800">
            VI RÄDDA MÅNGA HUNDLIV
          </h1>
          <Link href="/">
            <p className="mt-3 py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 cursor-pointer text-center w-fit ">
              Show more
            </p>
          </Link>
        </div>
      </BackgroundImage>
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
