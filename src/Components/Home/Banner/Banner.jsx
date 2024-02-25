import banner1 from '../../../assets/Banner1.png'
import banner2 from '../../../assets/Banner2.png'
import banner3 from '../../../assets/Banner3.png'
import banner4 from '../../../assets/Banner4.png'

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
          delay: 4500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={banner1} alt="" />
        </SwiperSlide>

        <SwiperSlide>
          <img src={banner2} alt="" />
        </SwiperSlide>

        <SwiperSlide>
          <img src={banner3} alt="" />
        </SwiperSlide>
        <SwiperSlide>

          <img src={banner4} alt="" />
        </SwiperSlide>
  
      </Swiper>
        </div>
    );
};

export default Banner;