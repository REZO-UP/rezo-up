
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { CheckCircle, Users, Target, TrendingUp, Wrench, UserCheck, Palette, Camera } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Methode = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-rezo-purple via-rezo-purple-light to-rezo-purple-dark text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            La méthode
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Notre approche structurée pour accompagner les entrepreneurs marocains vers le succès
          </p>
        </div>
      </section>

      {/* Les 3 Packs */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* REZO UP CONSEIL */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="bg-gradient-to-r from-rezo-purple to-rezo-purple-light text-white p-6 text-center">
                <h2 className="text-2xl font-bold mb-2">REZO UP CONSEIL</h2>
                <p className="text-sm opacity-90">Accompagnement personnalisé</p>
              </div>
              
              <div className="p-6">
                <div className="mb-6">
                  <div className="flex items-center mb-3">
                    <Target className="h-6 w-6 text-rezo-purple mr-2" />
                    <h3 className="text-lg font-bold text-gray-900">Objectif</h3>
                  </div>
                  <p className="text-gray-700 text-sm">
                    Offrir un accompagnement personnalisé pour les entrepreneurs en phase de démarrage ou de développement.
                  </p>
                </div>

                <div className="space-y-4">
                  <h4 className="font-semibold text-gray-900 flex items-center">
                    <Wrench className="h-5 w-5 text-rezo-purple mr-2" />
                    Services
                  </h4>
                  
                  <div className="space-y-3 text-sm">
                    <div className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-rezo-purple mr-2 mt-0.5 flex-shrink-0" />
                      <div>
                        <span className="font-medium">Audit stratégique :</span> Évaluation de la situation actuelle de l'entrepreneur, de son marché et de ses besoins.
                      </div>
                    </div>

                    <div className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-rezo-purple mr-2 mt-0.5 flex-shrink-0" />
                      <div>
                        <span className="font-medium">Positionnement & repositionnement :</span> Aider à définir une offre percutante et un positionnement clair.
                      </div>
                    </div>

                    <div className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-rezo-purple mr-2 mt-0.5 flex-shrink-0" />
                      <div>
                        <span className="font-medium">Stratégie marketing & commerciale :</span> Plan marketing et commercial sur mesure.
                      </div>
                    </div>

                    <div className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-rezo-purple mr-2 mt-0.5 flex-shrink-0" />
                      <div>
                        <span className="font-medium">Mise en place d'outils :</span> Pitchs, tunnels de vente, CRM adaptés.
                      </div>
                    </div>

                    <div className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-rezo-purple mr-2 mt-0.5 flex-shrink-0" />
                      <div>
                        <span className="font-medium">Formation des équipes :</span> Sélection et formation des profils commerciaux.
                      </div>
                    </div>
                  </div>
                </div>

                <Button 
                  className="w-full mt-6 bg-rezo-purple hover:bg-rezo-purple-dark"
                  onClick={() => navigate('/contact')}
                >
                  En savoir plus
                </Button>
              </div>
            </div>

            {/* REZO UP STUDIO */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="bg-gradient-to-r from-rezo-purple to-rezo-purple-light text-white p-6 text-center">
                <h2 className="text-2xl font-bold mb-2">REZO UP STUDIO</h2>
                <p className="text-sm opacity-90">Création d'image et communication</p>
              </div>
              
              <div className="p-6">
                <div className="mb-6">
                  <div className="flex items-center mb-3">
                    <Palette className="h-6 w-6 text-rezo-purple mr-2" />
                    <h3 className="text-lg font-bold text-gray-900">Objectif</h3>
                  </div>
                  <p className="text-gray-700 text-sm">
                    Aider les entrepreneurs à développer une image de marque forte et cohérente, ainsi qu'une communication visuelle efficace.
                  </p>
                </div>

                <div className="space-y-4">
                  <h4 className="font-semibold text-gray-900 flex items-center">
                    <Camera className="h-5 w-5 text-rezo-purple mr-2" />
                    Services
                  </h4>
                  
                  <div className="space-y-3 text-sm">
                    <div className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-rezo-purple mr-2 mt-0.5 flex-shrink-0" />
                      <div>
                        <span className="font-medium">Création d'identité de marque :</span> Logo, charte graphique, design personnalisé pour les supports de communication.
                      </div>
                    </div>

                    <div className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-rezo-purple mr-2 mt-0.5 flex-shrink-0" />
                      <div>
                        <span className="font-medium">Storytelling & message de marque :</span> Élaboration d'un message impactant, adapté à l'histoire de la marque.
                      </div>
                    </div>

                    <div className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-rezo-purple mr-2 mt-0.5 flex-shrink-0" />
                      <div>
                        <span className="font-medium">Contenus visuels et éditoriaux :</span> Création de contenu pour les sites web, réseaux sociaux, et autres supports.
                      </div>
                    </div>

                    <div className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-rezo-purple mr-2 mt-0.5 flex-shrink-0" />
                      <div>
                        <span className="font-medium">Personal Branding :</span> Accompagnement sur la visibilité personnelle du dirigeant (blog, réseaux sociaux, interventions publiques).
                      </div>
                    </div>
                  </div>
                </div>

                <Button 
                  className="w-full mt-6 bg-rezo-purple hover:bg-rezo-purple-dark"
                  onClick={() => navigate('/contact')}
                >
                  En savoir plus
                </Button>
              </div>
            </div>

            {/* REZO UP CLUB & ACADÉMIE */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="bg-gradient-to-r from-rezo-purple to-rezo-purple-light text-white p-6 text-center">
                <h2 className="text-2xl font-bold mb-2">REZO UP CLUB & ACADÉMIE</h2>
                <p className="text-sm opacity-90">Réseautage et développement</p>
              </div>
              
              <div className="p-6">
                <div className="mb-6">
                  <div className="flex items-center mb-3">
                    <Users className="h-6 w-6 text-rezo-purple mr-2" />
                    <h3 className="text-lg font-bold text-gray-900">Objectif</h3>
                  </div>
                  <p className="text-gray-700 text-sm">
                    Créer une communauté dynamique d'entrepreneurs, favoriser les échanges et aider à la structuration du développement personnel et professionnel.
                  </p>
                </div>

                <div className="space-y-4">
                  <h4 className="font-semibold text-gray-900 flex items-center">
                    <UserCheck className="h-5 w-5 text-rezo-purple mr-2" />
                    Services
                  </h4>
                  
                  <div className="space-y-3 text-sm">
                    <div className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-rezo-purple mr-2 mt-0.5 flex-shrink-0" />
                      <div>
                        <span className="font-medium">Accès à la communauté (4000+ membres) :</span> Rejoindre un réseau de plus de 4000 entrepreneurs.
                      </div>
                    </div>

                    <div className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-rezo-purple mr-2 mt-0.5 flex-shrink-0" />
                      <div>
                        <span className="font-medium">Masterclass hebdomadaire :</span> Sessions de formation sur des thématiques clés (marketing digital, vente, gestion d'entreprise, etc.).
                      </div>
                    </div>

                    <div className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-rezo-purple mr-2 mt-0.5 flex-shrink-0" />
                      <div>
                        <span className="font-medium">Rencontres thématiques :</span> Événements en ligne ou en présentiel pour échanger avec d'autres entrepreneurs.
                      </div>
                    </div>

                    <div className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-rezo-purple mr-2 mt-0.5 flex-shrink-0" />
                      <div>
                        <span className="font-medium">Mise en relation :</span> Identification et mise en relation avec des experts, investisseurs ou partenaires commerciaux.
                      </div>
                    </div>

                    <div className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-rezo-purple mr-2 mt-0.5 flex-shrink-0" />
                      <div>
                        <span className="font-medium">Ateliers et cercles d'entraide :</span> Sessions de coaching collectif et échanges avec d'autres dirigeants d'entreprises.
                      </div>
                    </div>
                  </div>
                </div>

                <Button 
                  className="w-full mt-6 bg-rezo-purple hover:bg-rezo-purple-dark"
                  onClick={() => navigate('/contact')}
                >
                  En savoir plus
                </Button>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Prêt à faire partie de l'écosystème REZO UP ?
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Rejoignez des milliers d'entrepreneurs qui ont choisi REZO UP pour développer leur business au Maroc.
            </p>
            <Button 
              size="lg"
              className="bg-gradient-to-r from-rezo-purple to-rezo-purple-light hover:from-rezo-purple-dark hover:to-rezo-purple text-lg px-8 py-4"
              onClick={() => navigate('/register')}
            >
              Rejoindre la communauté
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Methode;
