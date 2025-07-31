import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import FeaturedPlaylists from '@/components/FeaturedPlaylists';
import ArtistSpotlight from '@/components/ArtistSpotlight';
import PremiumPlans from '@/components/PremiumPlans';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navigation />
      <Hero />
      <FeaturedPlaylists />
      <ArtistSpotlight />
      <PremiumPlans />
      <Footer />
    </main>
  );
}