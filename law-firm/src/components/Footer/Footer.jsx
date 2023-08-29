import React from 'react'
import Navbar from '../Navbar/Navbar'
import styles from "./Footer.module.css"
const Footer = () => {
  return (
    <div className={styles.wrapper}>
      <Navbar isFooter={true}/>
      <div className={styles.copyRight}>
       <a href="#">© 2020 Acme. All right reserved.</a>
       <a href="#">Privacy Policy</a>
       <a href='#'>Terms of Service</a>
      </div>
    </div>
  )
}

export default Footer
