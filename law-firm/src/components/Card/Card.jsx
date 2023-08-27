import React from 'react'
import styles from "./Card.module.css"
import Gift from "../../assets/GiftImg.png"
const Card = ({client,image,title,description,subtitle,onClick,isSelected}) => {
    const cardWrapperClasses = `${styles.wrapper} ${isSelected ? styles.selectedCard : ""}`;
    if(!client){
  return (
    <div className={cardWrapperClasses} onClick={onClick}>
       <div className={styles.cardImage}>
        <img src={Gift} alt="" />
       </div>
       <div className={styles.cardText}>
         <h3>98% Success Rate</h3>
         <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer.</p>
       </div>
      

    </div>
  )
    }
    else{
        return (
            <div className={cardWrapperClasses} onClick={onClick}>
               <div className={styles.cardImage}>
                <img src={image} alt={title} />
               </div>
               <div className={styles.cardText}>
                 <h3>{title}</h3>
                 <p>{description}</p>
               </div>
               <div className={styles.btn}>
                 <button>Read More</button>
               </div>
        
            </div>
          )  
    }
}

export default Card
