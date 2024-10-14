import "./topcontributor.css";
import Contributor from '../Contributor/Contributor';
import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';

function TopContributor({title}) {
  return (
    <div className='top--weekly'>
        <h1>
        {title}
          </h1>
        <div className={`carousel-container`}>
        <Swiper
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        slidesPerView={3}
        centeredSlides={true}
        breakpoints={{
          
          200: {
            slidesPerView: 1, 
          },
          
          791: {
            slidesPerView: 3, 
          },
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><Contributor /></SwiperSlide>
        <SwiperSlide><Contributor /></SwiperSlide>
        <SwiperSlide><Contributor /></SwiperSlide>
        <SwiperSlide><Contributor /></SwiperSlide>
        
      </Swiper>
        </div>
    </div>
  )
}

export default TopContributor