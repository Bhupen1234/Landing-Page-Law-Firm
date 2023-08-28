import React, { useEffect, useState } from 'react'
import { useSwiper } from 'swiper/react';
import styles from "../Carousel.module.css";
import { ReactComponent as RightArrow } from '../../../assets/RightArrow.svg'

const CarouselRightNavigation = ({onClick}) => {
    
    
  return (
    <div className={styles.rightNavigation} onClick={onClick}>
        <RightArrow/>
    </div>
  )
}

export default CarouselRightNavigation