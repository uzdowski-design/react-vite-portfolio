import Contact from './components/contact/Contact';
import Hero from './components/hero/Hero';
import Navbar from './components/navigation/Navbar';
import Projects from './components/projects/Projects';
import Work from './components/work/Work';

function App() {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main>
        <Hero />
        <Work />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;
