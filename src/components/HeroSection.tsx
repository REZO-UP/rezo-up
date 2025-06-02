
import { Button } from '@/components/ui/button';
import { ArrowUp } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const HeroSection = () => {
  const navigate = useNavigate();
  const [showMore, setShowMore] = useState(false);

  return (
    <>
      {/* Logo Section - White Background */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <img 
            src="/lovable-uploads/961753f0-314c-40a9-be6d-3e51c037ca3b.png" 
            alt="REZO UP Logo" 
            className="h-32 md:h-48 w-auto mx-auto"
          />
        </div>
      </section>

      {/* Content Section - Purple Background */}
      <section className="relative bg-gradient-to-br from-rezo-purple via-rezo-purple-light to-rezo-purple-dark text-white py-20 overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-white opacity-5"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            {/* Badge */}
            <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-4 py-2 mb-6">
              <span className="text-sm font-medium">🇲🇦 100% Marocain</span>
            </div>

            {/* Main title */}
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="block bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
                Donne de la puissance à ton réseau
              </span>
              <span className="block text-2xl md:text-4xl mt-2">
                & structure ton business au Maroc
              </span>
            </h1>

            {/* En savoir plus interaction */}
            <div className="mb-8">
              <div 
                className="inline-block bg-white bg-opacity-20 rounded-lg p-4 cursor-pointer transition-all duration-300 hover:bg-opacity-30"
                onMouseEnter={() => setShowMore(true)}
                onMouseLeave={() => setShowMore(false)}
              >
                <span className="text-lg font-medium">En savoir plus</span>
                {showMore && (
                  <div className="mt-4 text-gray-200 animate-fade-in">
                    <p className="text-xl leading-relaxed max-w-4xl">
                      L'écosystème 100% marocain pour entrepreneurs et indépendants : 
                      accompagnement, formation, CRM, studio, coworking, club privé et bien plus encore.
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* CTA Button */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <Button 
                size="lg" 
                className="bg-white text-rezo-purple hover:bg-gray-100 text-lg px-8 py-4 h-auto font-semibold shadow-lg transform hover:scale-105 transition-all"
                onClick={() => navigate('/register')}
              >
                Rejoindre la communauté
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-white text-white hover:bg-white hover:text-rezo-purple text-lg px-8 py-4 h-auto"
                onClick={() => navigate('/about')}
              >
                En savoir plus
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">500+</div>
                <div className="text-gray-200">Entrepreneurs connectés</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">50+</div>
                <div className="text-gray-200">Formations disponibles</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">100+</div>
                <div className="text-gray-200">Events organisés</div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowUp className="h-6 w-6 rotate-180" />
        </div>
      </section>
    </>
  );
};

export default HeroSection;
