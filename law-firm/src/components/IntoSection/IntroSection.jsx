import React from 'react'
import styles from "./IntroSection.module.css"
const IntroSection = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.intro}>Let’s Introduce Ourself</div>
      <div className={styles.verticalLine}>
         
      </div>   
      <div className={styles.introduction}>
         <h5>Criminal Lawyer</h5>
         <p>Amet minim mollit non deserunt ullamco est
sit aliqua dolor do amet sint. Velit officia consequatduis
enim velit mollit Exercitation.</p>
      </div>
    </div>
  )
}

export default IntroSection
