
// import './App.css';
import Navbar from './components/Navbar/Navbar';
import styles from "./App.module.css"
import Hero from './components/Hero/Hero';
function App() {
  return (
    <div className="App">
      <div className={styles.LandingPagewrapper}>
        <Navbar/>
        <Hero/>
      </div>
    
    </div>
  );
}

export default App;
