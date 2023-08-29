
// import './App.css';
import Navbar from './components/Navbar/Navbar';
import styles from "./App.module.css"
import Hero from './components/Hero/Hero';
import { Link as ScrollLink, Element } from 'react-scroll';
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
  <Element name='hero'>
  <Hero/>
</Element>
 
</div>
 <div className={styles.bodyWrapper}>
<Element name='intro'>
  <Section1 />
</Element>
<Element name='attorneys'>
<Section2/>
</Element>
<Element name="Section3">
<Section3/>
</Element>

<Element >
<Section4/>
</Element>
<Element name='team'>
<Section5/>
</Element>

<Element name='faq'>
  <Section6/>
</Element>
<Element name='footer'>
<Section7/>
</Element>


 </div>
  <div className={styles.footer}>
 <Footer/>
  </div>





</div>
  );
}

export default App;
