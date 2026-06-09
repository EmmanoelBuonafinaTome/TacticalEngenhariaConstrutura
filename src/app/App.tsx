import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ProjectsCarousel } from './components/ProjectsCarousel';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Header />
      <Hero />
      <ProjectsCarousel />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}