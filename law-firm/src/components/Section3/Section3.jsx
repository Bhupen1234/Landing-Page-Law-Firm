import React from 'react'
import styles from "./Section3.module.css"
import QuiltedImageList from './QuiltedImageList'
const Section3 = () => {
  return (
    <div className={styles.wrapper}>
        <div className={styles.heading}>Area of Practices</div>
        
        <QuiltedImageList/>
    </div>
  )
}

export default Section3
