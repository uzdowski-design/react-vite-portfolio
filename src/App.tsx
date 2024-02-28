import Hero from './components/hero/Hero';
import Navbar from './components/navigation/Navbar';

function App() {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main>
        <Hero />
      </main>
    </div>
  );
}

export default App;
