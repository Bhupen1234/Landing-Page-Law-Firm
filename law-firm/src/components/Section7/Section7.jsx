import React from 'react'
import styles from "./Section7.module.css"
const Section7 = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.heading}>Subscribe Our Newsletter</div>
      <div className={styles.input}>
         <div className={styles.name}>
           <input type="text" />
         </div>
         <div className={styles.email}> 
         <input type="text" />
         </div>
         <div className={styles.btn}>
          <button>Send</button>
         </div>
      </div>
    </div>
  )
}

export default Section7
