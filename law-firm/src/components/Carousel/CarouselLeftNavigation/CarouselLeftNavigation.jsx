import React, { useEffect, useState } from 'react'
import { useSwiper } from 'swiper/react';
import styles from "../Carousel.module.css";
import { ReactComponent as LeftArrow } from '../../../assets/LeftArrow.svg'
const CarouselLeftNavigation = ({onClick}) => {
    
    
  return (
    
    <div className={styles.leftNavigation}  onClick={onClick}>
       <LeftArrow />
    </div>
  )
}

export default CarouselLeftNavigation