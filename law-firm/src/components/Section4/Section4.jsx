import React, { useState } from 'react'
import styles from "./Section4.module.css"
import Jane_Cooper from "../../assets/ClientImage/Jane_Cooper.png" 
import Devon_Lane from "../../assets/ClientImage/Devon_Lane.png" 
import Robert_Fox from "../../assets/ClientImage/Robert_Fox.png" 
import { ReactComponent as RightArrow } from '../../assets/RightArrow.svg'
import { ReactComponent as LeftArrow } from '../../assets/LeftArrow.svg'
import { useSwiper } from 'swiper/react';
import Card from '../Card/Card'
import Carousel from '../Carousel/Carousel'
import CarouselLeftNavigation from '../Carousel/CarouselLeftNavigation/CarouselLeftNavigation'
import CarouselRightNavigation from '../Carousel/CarouselRightNavigation/CarouselRightNavigation'
const Section4 = ({handleleft,handleRight}) => {
 const clientData=[
    {
       image:Jane_Cooper,
       title:"Jane Cooper",
       subTitle :"Ceo of Hunt",
       description:"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer. sit aliqua dolor do amet sint. Velit officia"

    },
    {
        image:Devon_Lane,
        title:"Devon Lane",
        subTitle :"Ceo of Hunt",
        description:"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer. sit aliqua dolor do amet sint. Velit officia"
 
     },
     {
        image:Robert_Fox,
        title:"Robert Fox",
        subTitle :"Ceo of Hunt",
        description:"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer. sit aliqua dolor do amet sint. Velit officia"
 
     },
     {
        image:Devon_Lane,
        title:"Devon Lane",
        subTitle :"Ceo of Hunt",
        description:"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer. sit aliqua dolor do amet sint. Velit officia"
 
     },
     {
      image:Devon_Lane,
      title:"Devon Lane",
      subTitle :"Ceo of Hunt",
      description:"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer. sit aliqua dolor do amet sint. Velit officia"

   },
   {
    image:Devon_Lane,
    title:"Devon Lane",
    subTitle :"Ceo of Hunt",
    description:"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer. sit aliqua dolor do amet sint. Velit officia"

 }
     
 ]

 const [currentSlide, setCurrentSlide] = useState(1);

 const handleSlideChange = (newSlide) => {
  console.log(newSlide);
   setCurrentSlide(newSlide);
 };

  return (
    
    <div className={styles.wrapper}>
        
        <div className={styles.heading}>
              <h2>What says our happy Clients </h2>
              <div className={styles.navigation}>
            
              <CarouselLeftNavigation onClick={() => handleSlideChange(currentSlide-1)}/>
              <CarouselRightNavigation onClick={() => handleSlideChange(currentSlide+1)}/>
              </div>
              
        </div>

        <div style={{display:"flex",justifyContent:"space-between",width:"100%"}}>
            {/* {
                clientData.map((data)=>{
                    return(<Card title={data.title} image={data.image} subtitle={data.subTitle} description={data.description}/>)
                })
            } */}

            <Carousel data={clientData} intailSlide={currentSlide} renderCardComponent={(ele,index)=> <Card  title={ele.title} image={ele.image} subtitle={ele.subTitle} description={ele.description} client={true}/>}/>
        </div>
        
       
    </div>
  )
}

export default Section4
