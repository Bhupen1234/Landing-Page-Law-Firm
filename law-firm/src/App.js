
// import './App.css';
import Navbar from './components/Navbar/Navbar';
import styles from "./App.module.css"
import Hero from './components/Hero/Hero';

import Section1 from './components/Section1/Section1';
import Section2 from './components/Section2/Section2';
function App() {
  return (
    <div className="App">
      <div className={styles.LandingPagewrapper}>
        <Navbar/>
        <Hero/>
      </div>
       <div className={styles.bodyWrapper}>
      <Section1 />
      <Section2/>
       </div>
    </div>
  );
}

export default App;
