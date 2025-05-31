
import { CheckCircle, Users, Tools, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const BenefitsSection = () => {
  const navigate = useNavigate();

  const benefits = [
    "Formations pratiques adaptées à ton niveau",
    "Un espace membre exclusif pour structurer ton activité",
    "Un CRM simple pour organiser ton business",
    "Un club d'entraide & de réseautage en ligne et en présentiel",
    "Un accompagnement personnalisé de l'idée à la première vente"
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <div className="text-sm font-semibold text-rezo-purple mb-4 uppercase tracking-wide">
              🔍 Tu es entrepreneur au Maroc ?
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Tu n'es plus seul.
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Avec REZO UP, tu intègres une communauté engagée et locale qui t'accompagne 
              concrètement dans le développement de ton activité.
            </p>

            {/* Key points */}
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <Users className="h-6 w-6 text-rezo-purple mr-3 mt-1 flex-shrink-0" />
                <div>
                  <div className="font-semibold text-gray-900">🔗 Un réseau puissant</div>
                  <div className="text-gray-600">pitchs, entraide, partenariats utiles.</div>
                </div>
              </div>
              <div className="flex items-start">
                <Tools className="h-6 w-6 text-rezo-purple mr-3 mt-1 flex-shrink-0" />
                <div>
                  <div className="font-semibold text-gray-900">🛠️ Des outils concrets</div>
                  <div className="text-gray-600">formations, CRM, espace membre, ressources pratiques.</div>
                </div>
              </div>
              <div className="flex items-start">
                <TrendingUp className="h-6 w-6 text-rezo-purple mr-3 mt-1 flex-shrink-0" />
                <div>
                  <div className="font-semibold text-gray-900">📈 Des résultats visibles</div>
                  <div className="text-gray-600">accompagnement terrain, méthode claire, communauté active.</div>
                </div>
              </div>
            </div>
          </div>

          {/* Benefits list */}
          <div className="bg-gradient-to-br from-rezo-purple to-rezo-purple-light rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-6">
              ✅ Ce que tu obtiens avec REZO UP :
            </h3>
            <ul className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="h-5 w-5 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="leading-relaxed">{benefit}</span>
                </li>
              ))}
            </ul>
            
            <div className="space-y-3">
              <Button 
                className="w-full bg-white text-rezo-purple hover:bg-gray-100 font-semibold"
                onClick={() => navigate('/offers')}
              >
                👉 Découvrir les offres
              </Button>
              <Button 
                variant="outline" 
                className="w-full border-white text-white hover:bg-white hover:text-rezo-purple"
                onClick={() => navigate('/register')}
              >
                👉 Rejoindre le club
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
