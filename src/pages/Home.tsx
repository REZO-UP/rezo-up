
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import PillarsSection from '@/components/PillarsSection';
import BenefitsSection from '@/components/BenefitsSection';
import { Button } from '@/components/ui/button';
import { Video, Calendar, BookOpen } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <PillarsSection />
      <BenefitsSection />
      
      {/* Studio Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-rezo-purple to-rezo-purple-light rounded-2xl p-8 md:p-12 text-white text-center">
            <Video className="h-16 w-16 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              🎥 Nouveauté : REZO UP Studio
            </h2>
            <p className="text-xl mb-6 max-w-3xl mx-auto">
              Loue un espace professionnel à Casablanca pour tes podcasts pros, 
              shootings photo, et vidéos de formation ou de branding.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <div className="bg-white bg-opacity-20 rounded-lg p-4">
                <div className="font-semibold">🎙️ Podcasts pros</div>
              </div>
              <div className="bg-white bg-opacity-20 rounded-lg p-4">
                <div className="font-semibold">📸 Shootings photo</div>
              </div>
              <div className="bg-white bg-opacity-20 rounded-lg p-4">
                <div className="font-semibold">🎬 Vidéos formation</div>
              </div>
            </div>
            <Button 
              className="bg-white text-rezo-purple hover:bg-gray-100 font-semibold text-lg px-8 py-3"
              onClick={() => navigate('/contact')}
            >
              Réserver le studio
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Prêt à rejoindre la communauté REZO UP ?
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-rezo-purple to-rezo-purple-light hover:from-rezo-purple-dark hover:to-rezo-purple text-lg px-8 py-4 h-auto"
              onClick={() => navigate('/offers')}
            >
              👉 Découvrir les offres
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-rezo-purple text-rezo-purple hover:bg-rezo-purple hover:text-white text-lg px-8 py-4 h-auto"
              onClick={() => navigate('/contact')}
            >
              👉 Prendre un RDV
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
