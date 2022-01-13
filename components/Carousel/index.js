import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

// Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./carousel.module.css";

export const Carousel = ({ data }) => {
  console.log(data.data);
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      navigation
      spaceBetween={50}
      onSwiper={(swiper) => console.log(swiper)}
      centeredSlides={true}
      centerInsufficientSlides={true}
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 0,
        },
        640: {
          spaceBetween: 50,
          slidesPerView: 2,
        },
        860: {
          spaceBetween: 50,
          slidesPerView: 3,
        },
      }}
    >
      {data.data.map((dog) => (
        <SwiperSlide
          key={dog.attributes.Slug}
          className="rounded-md overflow-hidden w-full"
          onClick={() => console.log(dog)}
        >
          <div className="w-full h-[400px] flex justify-center items-end">
            <Image
              src={dog.attributes.Images.data[0].attributes.url}
              alt={`Dog ${dog.attributes.Name}`}
              layout="fill"
              objectFit="cover"
              className=" -z-10 w-full"
            />
            <div className="bg-white w-full p-2 justify-center flex bg-opacity-80">
              <p>{dog.attributes.Name}</p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
