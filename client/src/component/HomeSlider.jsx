import React, { useRef, useState , useEffect} from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';
import axios from 'axios';
export default function HomeSlider() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
      axios.get("http://localhost:3005/movie/movies")
          .then(result => {
              setMovie(result.data.data);
              console.log(result);
          })
          .catch(err => console.log(err));
  }, []);
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
        {
            movie.map((banner,index)=>{
                return(
                    <SwiperSlide key={index} className='flex justify-center items-center'>
                        <img src={banner.landscapeImgUrl} className='w-full h-full' alt="" width={100} height={130} style={{objectFit: "cover"}}/>
                    </SwiperSlide>
                );
            })
        }
      </Swiper>
    </>
  );
}