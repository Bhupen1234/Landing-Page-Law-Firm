import React from 'react'
import styles from "./Navbar.module.css"
import {ReactComponent as  Logo} from "../../assets/Logo.svg"

 import {ReactComponent as  Instagram} from "../../assets/Icons/Instagram.svg"
 import {ReactComponent as  Facebook} from "../../assets/Icons/Facebook.svg"
 import {ReactComponent as  Twitter} from "../../assets/Icons/Twitter.svg"
 import {ReactComponent as  Pintrest} from "../../assets/Icons/Pintrest.svg"
 import { Link as ScrollLink } from 'react-scroll';
const Navbar = ({isFooter}) => {
  return (
    <>
    
    <div className={styles.wrapper}>
      <ScrollLink to="hero"  smooth={true} duration={500}>
          <Logo/>
         
      </ScrollLink>
      <div className={styles.navbarContent}>
         <ScrollLink className={styles.link}   smooth={true} duration={500}  to="hero">Homes</ScrollLink>
         <ScrollLink className={styles.link}   smooth={true} duration={500} to="attorneys">Attorneys</ScrollLink>
         <ScrollLink className={styles.link}  smooth={true} duration={500} to="Section3">Practice Areas</ScrollLink>
         <ScrollLink className={styles.link}  smooth={true} duration={500} to="team">About Us</ScrollLink>
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
