import React, { useEffect } from "react";

import { useSwiper, Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import styles from "./Carousel.module.css";
import { Navigation } from "swiper/modules";
import CarouselLeftNavigation from "./CarouselLeftNavigation/CarouselLeftNavigation";
import CarouselRightNavigation from "./CarouselRightNavigation/CarouselRightNavigation";
import { Card } from "@mui/material";

const Controls = ({ data ,initialSlide}) => {
  const swiper = useSwiper();

  useEffect(() => {
    
       
         swiper.slideTo(initialSlide,500);
   
  }, [data]);
  return <></>
};

const Carousel = ({ data,renderCardComponent,initialSlide}) => {
  return (
    <div className={styles.wrapper}>
     
      <Swiper
        initialSlide={initialSlide}
        modules={{ Navigation }}
        slidesPerView={"auto"}
        spaceBetween={36}
        allowTouchMove
      >
        <Controls data={data}  initialSlide={initialSlide}/>
       
       
      
        {
           data.map((ele,index)=>( <SwiperSlide key={index}>{renderCardComponent(ele)}</SwiperSlide>))
        }
      </Swiper>
    </div>
  );
};

export default Carousel;