import React from 'react'
import styles from "./Section6.module.css"
import { Accordion } from '@mui/material'
import BasicAccordion from '../BasicAccordion/BasicAccordion'

const Section6 = () => {
    const faqQuestions = [
        {
          title: "Do I need a personal injury report?",
          content:
            "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer.",
        },
        {
          title: "How much is my case worth?",
          content:
            "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer.",
        },
        {
          title: "What should I do right after car accidect",
          content:
            "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer.",
        },
        {
          title: "How much is my case worth?",
          content:
            "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer.",
        },
      ];
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.heading}>FAQ</h2>

      <div className={styles.contentWrapper}>
         <div className={styles.contentText}>Amet minim mollit non deserunt ullamco est sit <br/> aliqua dolor do amet sint. </div>
         <div className={styles.accordionWrapper}>
            <BasicAccordion faqQuestions={faqQuestions}/>
         </div>
      </div>
    </div>
  )
}

export default Section6
