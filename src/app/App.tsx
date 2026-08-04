import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ProjectsCarousel } from './components/ProjectsCarousel';
import { SteelFrame } from './components/SteelFrame';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <ProjectsCarousel />
        <SteelFrame />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
