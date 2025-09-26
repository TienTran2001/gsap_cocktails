import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import Navbar from './components/Navbar.tsx';
import Hero from './components/Hero.tsx';
import CockTails from './components/CockTails.tsx';
import About from './components/About.tsx';
import Art from './components/Art.tsx';
import Menu from './components/Menu.tsx';

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <CockTails />
      <About />
      <Art />
      <Menu />
    </main>
  );
};

export default App;
