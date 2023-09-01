import { useEffect, useState } from 'react';
import ScrollSpy from './ScrollSpy/ScrollSpy';
import BrandStatement from './BrandStatement/BrandStatement';
import TechStack from './TechStack/TechStack';
import Portfolio from './Portfolio/Portfolio';
import Resume from './Resume/Resume';
import Contact from './Contact/Contact';
import './App.css';
import FixedSocial from './FixedSocial/FixedSocial';

export default function App() {
  const [currentSection, setCurrentSection] = useState('brand-statement');
  useEffect(() => {
    const sectionIds = ['brand-statement', 'tech-stack', 'portfolio', 'resumé', 'contact'];

    let allowOverflow = true;
    let prevScrollY = 0;

    const setOverflow = () => {
      document.body.style.overflow = allowOverflow ? 'auto' : 'hidden';
    };

    const handleScroll = () => {
      let minDistance = Infinity;
      let newCurrentSection = currentSection;

      for (const id of sectionIds) {
        const element = document.getElementById(id);
        const rect = element.getBoundingClientRect();
        const distance = Math.abs(rect.top);  // Distance from the top of the viewport

        if (distance < minDistance) {
          minDistance = distance;
          newCurrentSection = id;
        }
      }
      setCurrentSection(newCurrentSection);

      if (window.scrollY === 0 && prevScrollY === 0) {
        allowOverflow = false;
      } else {
        allowOverflow = true;
      }
      setOverflow();
      prevScrollY = window.scrollY;

    };

    window.addEventListener('scroll', handleScroll);
    setOverflow();  // Set initial state



    const moveCursor = (e) => {
      const cursor = document.getElementById("cursor");
      if (!allowOverflow) {
        document.body.style.overflow = 'hidden';
      }
      let x = e.clientX - 250; // Half of the cursor's dimensions
      let y = e.clientY - 250;
      // Set cursor's left and top style
      cursor.style.left = Math.min(window.innerWidth - 250, x) + "px";
      cursor.style.top = Math.min(window.innerHeight - 250, y) + "px";
    };

    document.addEventListener("mousemove", moveCursor);
    return () => {
      document.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [currentSection]);

  return (
    <div className="App">
      <div id="cursor"></div>
      <div className="container">
        <ScrollSpy currentSection={currentSection} />
        <FixedSocial />
        <div className="content">
          <section id="brand-statement">
            <BrandStatement />
          </section>
          <section id="tech-stack">
            <TechStack />
          </section>
          <section id="portfolio">
            <Portfolio />
          </section>
          <section id="resumé">
            <Resume />
          </section>
          <section id="contact">
            <Contact />
          </section>
        </div>
      </div>
      <div className="footer">
        <div className="footer-line"></div>
        Can Göloğlu, © 2023</div>
    </div>
  );
}
