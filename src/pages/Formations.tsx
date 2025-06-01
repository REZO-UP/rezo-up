
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { BookOpen, Clock, Play, Download } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Formations = () => {
  const navigate = useNavigate();

  const formations = [
    {
      title: "Construire une offre claire et attractive",
      description: "Définir ton positionnement et créer une offre qui se vend",
      duration: "3h30",
      modules: 8,
      level: "Débutant",
      price: "Inclus Pro/VIP",
      image: "🎯"
    },
    {
      title: "Structurer son activité de A à Z",
      description: "Organisation, process et méthodes pour un business structuré",
      duration: "4h15",
      modules: 12,
      level: "Intermédiaire",
      price: "Inclus Pro/VIP",
      image: "🏗️"
    },
    {
      title: "Développer un réseau stratégique",
      description: "Techniques de networking et construction de partenariats",
      duration: "2h45",
      modules: 6,
      level: "Tous niveaux",
      price: "Inclus Pro/VIP",
      image: "🤝"
    },
    {
      title: "Créer son image de marque personnelle",
      description: "Personal branding et communication digitale efficace",
      duration: "3h20",
      modules: 9,
      level: "Intermédiaire",
      price: "Inclus Pro/VIP",
      image: "✨"
    },
    {
      title: "Gérer son activité avec le CRM REZO UP",
      description: "Maîtriser tous les outils CRM pour optimiser ton business",
      duration: "2h15",
      modules: 5,
      level: "Débutant",
      price: "Gratuit",
      image: "⚙️"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-rezo-purple via-rezo-purple-light to-rezo-purple-dark text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            🎓 Forme-toi à ton rythme
          </h1>
          <p className="text-xl mb-8">
            Des modules 100% concrets pour développer ton business
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-white text-rezo-purple hover:bg-gray-100 text-lg px-8 py-4 h-auto"
              onClick={() => navigate('/register')}
            >
              👉 Commencer gratuitement
            </Button>
            <Button 
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-rezo-purple text-lg px-8 py-4 h-auto"
              onClick={() => navigate('/offers')}
            >
              👉 Voir toutes les formations
            </Button>
          </div>
        </div>
      </section>

      {/* Formations Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              📚 Parcours disponibles
            </h2>
            <p className="text-xl text-gray-600">
              Formations pratiques adaptées à ton niveau entrepreneurial
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {formations.map((formation, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <CardHeader>
                  <div className="text-4xl mb-4 text-center">{formation.image}</div>
                  <CardTitle className="text-xl mb-2">{formation.title}</CardTitle>
                  <CardDescription>{formation.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between text-sm text-gray-600">
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {formation.duration}
                    </div>
                    <div className="flex items-center">
                      <BookOpen className="h-4 w-4 mr-1" />
                      {formation.modules} modules
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <Badge variant="outline">{formation.level}</Badge>
                    <Badge className={formation.price === "Gratuit" ? "bg-green-500" : "bg-rezo-purple"}>
                      {formation.price}
                    </Badge>
                  </div>

                  <Button 
                    className="w-full bg-gradient-to-r from-rezo-purple to-rezo-purple-light hover:from-rezo-purple-dark hover:to-rezo-purple"
                    onClick={() => navigate(formation.price === "Gratuit" ? '/dashboard' : '/offers')}
                  >
                    {formation.price === "Gratuit" ? (
                      <>
                        <Play className="h-4 w-4 mr-2" />
                        Commencer
                      </>
                    ) : (
                      <>
                        <Download className="h-4 w-4 mr-2" />
                        Accéder
                      </>
                    )}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            🎁 Formation offerte
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Une formation gratuite pour commencer ton parcours entrepreneur
          </p>
          
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Guide de démarrage entrepreneur
            </h3>
            <p className="text-gray-600 mb-6">
              Les étapes essentielles pour transformer ton idée en business viable
            </p>
            
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="text-left">
                <Label className="text-sm text-gray-600">Nom</Label>
                <Input placeholder="Ton prénom" />
              </div>
              <div className="text-left">
                <Label className="text-sm text-gray-600">Email</Label>
                <Input placeholder="ton@email.com" />
              </div>
            </div>
            
            <Button 
              size="lg"
              className="w-full bg-gradient-to-r from-rezo-purple to-rezo-purple-light hover:from-rezo-purple-dark hover:to-rezo-purple"
            >
              📤 Envoyer la formation
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Formations;
