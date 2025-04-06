import React, { useContext } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';
import { useSelector } from 'react-redux';
import { AppContext } from '../../context/AppContext';
import LoadingSpinner from './LoadinSpinner';
import '../style/banner.css'

export default function Banner() {
    const bannerImg = useSelector((state)=>state.banner.bannerImages)
    const {isLoading} = useContext(AppContext)
  return (
    <>
    {
        isLoading?<LoadingSpinner/>:<Swiper
        autoplay={{ delay: 1300, disableOnInteraction: false }} 
        modules={[Pagination, Autoplay]} 
        className="mySwiper2"
      >
        {
            bannerImg?.map((item)=><SwiperSlide><img src={item?.background_image} alt={item?.background_image} /></SwiperSlide>)
        }
        
      </Swiper>
    }
    </>
  );
}
