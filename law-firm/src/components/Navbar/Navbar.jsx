import React from 'react'
import styles from "./Navbar.module.css"
import {ReactComponent as  Logo} from "../../assets/Logo.svg"
import { Link, Route, Routes } from "react-router-dom";
 import {ReactComponent as  Instagram} from "../../assets/Icons/Instagram.svg"
 import {ReactComponent as  Facebook} from "../../assets/Icons/Facebook.svg"
 import {ReactComponent as  Twitter} from "../../assets/Icons/Twitter.svg"
 import {ReactComponent as  Pintrest} from "../../assets/Icons/Pintrest.svg"

const Navbar = ({isFooter}) => {
  return (
    <>
    
    <div className={styles.wrapper}>
      <Link to="/" className={styles.logo}>
          <Logo/>
         
      </Link>
      <div className={styles.navbarContent}>
         <Link className={styles.link}  to="/">Homes</Link>
         <Link className={styles.link}  to="/attorneys">Attorneys</Link>
         <Link className={styles.link} to="/areas">Practice Areas</Link>
         <Link className={styles.link} to="/aboutus">About Us</Link>
      </div>
      <div className={styles.contactButton}>
        {
          isFooter ?
          (
           <div className={styles.icons}>
               <Instagram/>
               <Facebook/>
               <Twitter/>
               <Pintrest/>
           </div>
          )
          :
          (
            <button >Contact Now</button>
          )
        }
      
      </div>
      

    </div>
    </>
  )
}

export default Navbar
