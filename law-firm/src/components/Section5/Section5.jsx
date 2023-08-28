import React, { useState } from 'react'
import styles from "./Section5.module.css"
import Danial from "../../assets/TeamsImage/Danial.svg"
import Sanfole from "../../assets/TeamsImage/Sanfole.svg"
import Cesforlia from "../../assets/TeamsImage/Cesforlia.svg"
import Colleen from "../../assets/TeamsImage/Colleen.svg"
import Haldone from "../../assets/TeamsImage/Haldone.svg"
import Nik from "../../assets/TeamsImage/Nik.svg"
const Section5 = () => {
    const TeamData=[
        {
           image:Danial,
           title:"Danial Def",
           case:"301 Cases"
         
    
        },
        {
            image:Sanfole,
            title:"Sanfole",
            case:"301 Cases"
     
         },
         {
            image:Cesforlia,
            title:"Cesforila",
            case:"301 Cases"
     
     
         },
         {
            image:Colleen,
            title:"Colleen",
            case:"301 Cases"
     
         },
         {
        
            image:Haldone,
            title:"Haldone",
            case:"301 Cases"
     
       },
       {
        image:Nik,
        title:"Nik Jeo",
        case:"301 Cases"
 
    
     }
         
     ]

     const [selectedCardIndex, setSelectedCardIndex] = useState(null);
     const cardWrapperClasses = `${styles.cardWrapper} ${selectedCardIndex ? styles.selectedCard : ""}`
     const handleCardClick = (index) => {
       setSelectedCardIndex(index);
     };
    

  return (
    <div className={styles.wrapper}>
        <div className={styles.heading}>Our Team</div>
        
        <div className={styles.teams}>
           {
            TeamData.map((data,index)=>{
                return(
                    <div className={`${styles.cardWrapper} ${index===selectedCardIndex ? styles.selectedCard : ""}`}   
                    onClick={() => handleCardClick(index)}>
                     <img src={data.image} alt={data.title} />
                     <div className={styles.cardText}>
                         <h4>{data.title}</h4>
                         <p>{data.case}</p>
                     </div>
                    </div>
                )
            })
           }
        </div>
        
    </div>
  )
}

export default Section5
