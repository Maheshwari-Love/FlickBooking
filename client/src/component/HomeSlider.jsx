import React, { useRef, useState, useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import Slider from "react-slick";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper/modules";
import axios from "axios";
export default function HomeSlider() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3005/movie/movies")
      .then((result) => {
        setMovie(result.data.data);
        console.log(result);
      })
      .catch((err) => console.log(err));
  }, []);
  const settings = {
    infinte: false,
    autoplay: false,
    slidesToShow: 5,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper w-full h-full"
      >
        {movie.map((banner, index) => {
          return (
            <SwiperSlide
              key={index}
              className="flex justify-center items-center"
            >
              <div className="w-full h-[500px]">
                <img
                  className="w-full h-full"
                  src={banner.landscapeImgUrl}
                  alt="entertainment"
                />
              </div>
              {/* <img src={banner.landscapeImgUrl} className='w-full h-full' alt="" style={{objectFit: "cover"}}/> */}
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
