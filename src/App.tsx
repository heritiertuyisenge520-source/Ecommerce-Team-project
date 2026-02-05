import { TopBanner } from './components/TopBanner';
import { Header } from './components/Header';
import { Navigation } from './components/Navigation';
import { HeroSection } from './components/HeroSection';

function App() {
  return (
    <div className="min-h-screen">
      <TopBanner />
      <Header />
      <Navigation />
      <HeroSection />
    </div>
  );
}

export default App;
