import { TopBanner } from './components/TopBanner';
import { Header } from './components/Header';
import { Navigation } from './components/Navigation';
import { HeroSection } from './components/HeroSection';
import { TrendingSection } from './components/TrendingSection';
import { BestSellersSection } from './components/BestSellersSection';

function App() {
  return (
    <div className="min-h-screen">
      <TopBanner />
      <Header />
      <Navigation />
      <HeroSection />
      <TrendingSection />
      <BestSellersSection />
    </div>
  );
}

export default App;
