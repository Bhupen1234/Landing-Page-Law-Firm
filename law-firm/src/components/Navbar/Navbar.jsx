import React from 'react'
import styles from "./Navbar.module.css"
import {ReactComponent as  Logo} from "../../assets/Logo.svg"
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.logo}>
          <Logo/>
         
      </div>
      <div className={styles.navbarContent}>
         <p>Homes</p>
         <p>Attorneys</p>
         <p>Practice Areas</p>
         <p>About Us</p>
      </div>
      <div className={styles.contactButton}>
      <button >Contact Now</button>
      </div>


    </div>
  )
}

export default Navbar
