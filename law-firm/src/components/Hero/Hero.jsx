import React from "react";
import styles from "./Hero.module.css";
import { ReactComponent as HeroImg } from "../../assets/HeroImg.svg";
import EmailCapsule from "../EmailCapsule/EmailCapsule";
const Hero = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.heroText}>
        <h2 >You don’t have to Fight them Alone.</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipiscing elit blandit,
          curabitur sodales conubia ut inceptos faucibus himenaeos tortor eget,
          hac massa gravida arcu interdum proin curae.
        </p>
      <EmailCapsule/>
      </div>
     <HeroImg/>
    </div>
  );
};

export default Hero;
