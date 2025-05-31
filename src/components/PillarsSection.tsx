
import { Network, Wrench, HandHeart } from 'lucide-react';

const PillarsSection = () => {
  const pillars = [
    {
      icon: <Network className="h-12 w-12" />,
      title: "🔗 Networking stratégique",
      description: "Crée des connexions durables grâce à nos événements, partenariats et espaces d'échange."
    },
    {
      icon: <Wrench className="h-12 w-12" />,
      title: "🛠️ Outils & formations",
      description: "Formations en ligne, fiches pratiques et CRM simplifié pour structurer ton activité."
    },
    {
      icon: <HandHeart className="h-12 w-12" />,
      title: "🤝 Accompagnement sur-mesure",
      description: "Un suivi terrain, personnalisé, pour t'aider à passer de l'idée aux premiers clients."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Les 3 piliers REZO UP
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Notre méthode éprouvée pour accompagner les entrepreneurs marocains vers le succès
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
            >
              <div className="text-rezo-purple mb-6 group-hover:scale-110 transition-transform duration-300">
                {pillar.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {pillar.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PillarsSection;
