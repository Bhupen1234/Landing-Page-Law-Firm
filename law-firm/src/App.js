
// import './App.css';
import Navbar from './components/Navbar/Navbar';
import styles from "./App.module.css"
import Hero from './components/Hero/Hero';
import {Route, Router, Routes, Switch } from "react-router-dom";
import Section1 from './components/Section1/Section1';
import Section2 from './components/Section2/Section2';
import Section3 from './components/Section3/Section3';
import Section4 from './components/Section4/Section4';
import Section5 from './components/Section5/Section5';
import Section6 from './components/Section6/Section6';
import Section7 from './components/Section7/Section7';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">

     
      <div className={styles.LandingPagewrapper}>
        <Navbar isFooter={false}/>
        <Hero/>
      </div>
       <div className={styles.bodyWrapper}>
      <Section1 />
      <Section2/>
      <Section3/>
      <Section4/>
      <Section5/>
      <Section6/>
      <Section7/>

       </div>
        <div className={styles.footer}>
       <Footer/>
        </div>

 

{/* <Routes>
     <Route path='/attorneys' element={ <Section2 />}/>
     <Route path='/areas' element={  <Section3 />}/>
     <Route path='/aboutus' element={  <Section5 />}/>
     <Route path='/' element={  <Hero />}/>
</Routes> */}
  

    </div>
  );
}

export default App;
