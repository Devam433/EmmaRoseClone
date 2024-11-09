import Hero from "./comp/Hero"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

function App() {

  useEffect(() => {
    AOS.init({
      duration: 1000, // Set animation duration (optional)
      once: true, // Animation will play only once (optional)
    });
  }, []);

  return (
  <Hero/>
  )
}

export default App
