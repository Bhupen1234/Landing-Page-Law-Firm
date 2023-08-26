import React from 'react'
import styles from "./EmailCapsule.module.css"
const EmailCapsule = () => {
  return (
    <div className={styles.wrapper}>
      <input placeholder='Enter your eamil address' className={styles.input} type='text'/>
      <button  className={styles.button}>Let’s Talk</button>
    </div>
  )
}

export default EmailCapsule
