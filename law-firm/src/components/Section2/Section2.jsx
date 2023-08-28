import React, { useState } from "react";
import styles from "./Section2.module.css";
import Card from "../Card/Card";
import Gift from "../../assets/GiftImg.png";
const Section2 = () => {

    const cardData = [
        {
          Gift,
          title: "98% Success Rate",
          description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer."
        },
        {
          Gift,
          title: "100% Success Rate",
          description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer."
        },
        {
          Gift,
          title: "100% Success Rate",
          description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer."
        }
      ];

      const [selectedCardIndex, setSelectedCardIndex] = useState(null);

      const handleCardClick = (index) => {
        setSelectedCardIndex(index);
      };
  return (
    <div className={styles.wrapper}>
      <div className={styles.heading}>Why Choose Us?</div>
      <div className={styles.cardWrapper}>
      {cardData.map((data, index) => (
          <Card
            key={index}
           client={false}
            isSelected={selectedCardIndex === index}
            onClick={() => handleCardClick(index)}
            image={data.Gift}
            title={data.title}
            description={data.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Section2;
