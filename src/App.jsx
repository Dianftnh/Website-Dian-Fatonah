import Navbar from './shared/components/Navbar';
import Footer from './shared/components/Footer';
import Hero from './features/hero/Hero';
import About from './features/about/About';
import Portfolio from './features/portfolio/Portfolio';
import Achievements from './features/achievements/Achievements';
import Contact from './features/contact/Contact';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Portfolio />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
