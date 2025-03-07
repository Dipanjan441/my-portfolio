import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponent from './features/Navbar/Navbar';
import Home from './features/Home/Home';
import {motion, useScroll} from 'motion/react';
import { useState } from 'react';
import Footer from './features/footer/Footer';


function App() {
  const {scrollYProgress} = useScroll();
  const [navbarHeight, setNavbarHeight] = useState(0);
  return (
    <div className="App">
      <motion.div style={{scaleX: scrollYProgress, originX: 0}} className='progressbar' />
      <NavbarComponent setNavbarHeight={setNavbarHeight} />
      <Home navbarHeight={navbarHeight}/>
      <Footer />
    </div>
  );
}

export default App;
