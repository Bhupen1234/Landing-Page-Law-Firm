import React from 'react'
import styles from "./Section7.module.css"
const Section7 = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.heading}>Subscribe Our Newsletter</div>
      <form className={styles.input}>
         <div className={styles.name}>
           <input type="text" placeholder='Name:'/>
         </div>
         <div className={styles.email}> 
         <input type="text" placeholder="Enter your Email :"/>
         </div>
         <div className={styles.btn} >
          <button>Send</button>
         </div>
      </form>
    </div>
  )
}

export default Section7
