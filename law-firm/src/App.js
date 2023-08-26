
// import './App.css';
import Navbar from './components/Navbar/Navbar';
import styles from "./App.module.css"
import Hero from './components/Hero/Hero';
import IntroSection from './components/IntoSection/IntroSection';
function App() {
  return (
    <div className="App">
      <div className={styles.LandingPagewrapper}>
        <Navbar/>
        <Hero/>
      </div>
       <div className={styles.bodyWrapper}>
      <IntroSection/>
       </div>
    </div>
  );
}

export default App;
