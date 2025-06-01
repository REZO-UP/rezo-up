
import { CheckCircle, Users, TrendingUp, Wrench } from 'lucide-react';

const BenefitsSection = () => {
  const benefits = [
    {
      icon: <Users className="h-8 w-8" />,
      title: "🔗 Un réseau puissant",
      description: "Pitchs, entraide, partenariats utiles."
    },
    {
      icon: <Wrench className="h-8 w-8" />,
      title: "🛠️ Des outils concrets",
      description: "Formations, CRM, espace membre, ressources pratiques."
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "📈 Des résultats visibles",
      description: "Accompagnement terrain, méthode claire, communauté active."
    }
  ];

  const features = [
    "Formations pratiques adaptées à ton niveau",
    "Un espace membre exclusif pour structurer ton activité",
    "Un CRM simple pour organiser ton business",
    "Un club d'entraide & de réseautage en ligne et en présentiel",
    "Un accompagnement personnalisé de l'idée à la première vente"
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Intro */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            🔍 Tu es entrepreneur au Maroc ? Tu n'es plus seul.
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-12">
            Avec REZO UP, tu intègres une communauté engagée et locale qui t'accompagne 
            concrètement dans le développement de ton activité.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="text-center p-6 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"
            >
              <div className="text-rezo-purple mb-4 flex justify-center">
                {benefit.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                {benefit.title}
              </h3>
              <p className="text-gray-600">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* Features List */}
        <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
            ✅ Ce que tu obtiens avec REZO UP :
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start">
                <CheckCircle className="h-6 w-6 text-rezo-purple mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-700">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
