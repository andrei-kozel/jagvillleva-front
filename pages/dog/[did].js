import { Container } from '@/components/Container'
import ImageGallery from 'react-image-gallery'
import { PawList } from '@/components/Dog/PawList'
import { BadgeList } from '@/components/Dog/BadgeList'

const images = [
  {
    original:
      'https://res.cloudinary.com/drehmzy2n/image/upload/w_1000,h_600,c_fill/DSC_0679_1809995c77.jpg',
    thumbnail:
      'https://res.cloudinary.com/drehmzy2n/image/upload/w_250,h_150,c_fill/DSC_0679_1809995c77.jpg'
  },
  {
    original:
      'https://res.cloudinary.com/drehmzy2n/image/upload/w_1000,h_600,c_fill/DSC_0681_c71ea919be.jpg',
    thumbnail:
      'https://res.cloudinary.com/drehmzy2n/image/upload/w_250,h_150,c_fill/DSC_0681_c71ea919be.jpg'
  },
  {
    original:
      'https://res.cloudinary.com/drehmzy2n/image/upload/w_1000,h_600,c_fill/DSC_0690_01af345397.jpg',
    thumbnail:
      'https://res.cloudinary.com/drehmzy2n/image/upload/w_250,h_150,c_fill/DSC_0690_01af345397.jpg'
  }
]

const videos = [
  { url: 'https://youtu.be/WDlu1OhvYBM' },
  { url: 'https://www.youtube.com/watch?v=uodFAqscjgk' }
]
const Post = ({ dog }) => {
  return (
    <>
      <div className="pt-20 md:pt-36">
        <Container>
          <div className="flex flex-col md:flex-row justify-center items-start">
            <div className="sm:w-full md:w-1/2 p-1">
              <ImageGallery items={images} />
            </div>
            <div className="sm:w-full md:w-1/2 px-4 md:px-10 m-auto">
              <p className="text-center text-2xl font-bold mt-6 mb-2 ">Ellis</p>
              <BadgeList />
              <PawList />
            </div>
          </div>
          <div className="px-4 m-auto flex flex-col w-full md:w-3/4 my-4 md:my-16">
            <p className="text-2xl font-bold mb-3">Information:</p>
            <p className="mb-2">
              Vår snällaste och sötaste Ellisa tik. En sällskaplig, aktiv, lekfull,
              social, tillgiven tjej. Ellisa gillar busa, springa med andra hundar, hon
              gillar katter och barn.
            </p>
            <p>
              Helt frisk, vaccinerad , bra i koppel, rumsren, har chip, har alla papper.
              Alla frågor angående hunden, foto, video, går via hund kurator Aleksandra
              Nikitina
            </p>
            <p className="text-2xl font-bold mb-3 mt-8">Video:</p>
            <div className="flex flex-col md:flex-row justify-start items-center duration-300 gap-2">
              <div className="overflow-hidden rounded-2xl grayscale hover:grayscale-0 transition duration-300 ease-in-out">
                <iframe
                  width="300"
                  height="185"
                  src="//www.youtube.com/embed/uodFAqscjgk?rel=0&modestbranding=1&autohide=1&showinfo=0&controls=1"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen></iframe>
              </div>
              <div className="overflow-hidden rounded-2xl grayscale hover:grayscale-0 transition duration-300 ease-in-out">
                <iframe
                  width="300"
                  height="185"
                  src="//www.youtube.com/embed/HWYciml06xs?rel=0&modestbranding=1&autohide=1&showinfo=0&controls=1"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen></iframe>
              </div>
            </div>

            <div className="border border-l-4 border-red-400 rounded-lg border-solid gap-1 p-2 flex flex-col text-sm my-8 text-gray-500">
              <p>
                Gåva är 6000:- som täcker alla avgifter och transportkostnad och där
                1000:- dras för en bokningsavgift.
              </p>
              <p>
                Alla hundar är fullt vaccinerade, avmaskade, chippade och blir besiktade
                innan sin avresa.
              </p>
              <p>
                Alla hundar har sin egen pass . Även kommer vi att hjälpa er med
                försäkring .
              </p>
              <p>
                Alla hundar har inga psykiska trauma eller beteendeproblem. Hund kan komma
                till - Moskva -Lettland- Nynäshamn
              </p>
            </div>
          </div>
        </Container>
      </div>
    </>
  )
}

export default Post
