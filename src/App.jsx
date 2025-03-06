import Navbar from './Navbar.jsx'
import LandingHero from './LandingHero.jsx'
import ParticlesComponent from './particles.jsx';
import Analytics from './analytics.jsx';
import About from './About.jsx';
function App() {
  return(
    <>
  <Navbar/>
  <LandingHero/>
  <ParticlesComponent id="tsparticles" />
  <Analytics/>
  <About/> 
 </>
  );

}

export default App
