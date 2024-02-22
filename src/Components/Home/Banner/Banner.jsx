// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Banner = () => {
    return (
        <div>
             <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>Image 1</SwiperSlide>
        <SwiperSlide>Image 2</SwiperSlide>
        <SwiperSlide>Image 3</SwiperSlide>
        <SwiperSlide>Image 4</SwiperSlide>
        <SwiperSlide>Image 5</SwiperSlide>
        <SwiperSlide>Image 6</SwiperSlide>
        <SwiperSlide>Image 7</SwiperSlide>
        <SwiperSlide>Image 8</SwiperSlide>
        <SwiperSlide>Image 9</SwiperSlide>
      </Swiper>
        </div>
    );
};

export default Banner;