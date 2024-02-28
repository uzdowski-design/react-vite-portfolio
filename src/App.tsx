import Hero from './components/hero/Hero';
import Navbar from './components/navigation/Navbar';
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
      </main>
    </div>
  );
}

export default App;
