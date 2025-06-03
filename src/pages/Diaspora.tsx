
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Users, Globe, Video, Calendar, MapPin, Clock } from 'lucide-react';

const Diaspora = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-rezo-purple via-rezo-purple-light to-rezo-purple-dark text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            🌍 REZO DIASPORA
          </h1>
          <p className="text-xl mb-8">
            Le rendez-vous mensuel des Marocains du monde pour entreprendre, investir et se connecter
          </p>
        </div>
      </section>

      {/* White Banner Section */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <img 
            src="/lovable-uploads/961753f0-314c-40a9-be6d-3e51c037ca3b.png" 
            alt="REZO UP Logo" 
            className="h-20 w-auto mx-auto"
          />
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Tu vis à l'étranger ? Reconnecte-toi à ton pays !
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Tu vis en France, au Canada, en Belgique ou ailleurs ? Tu veux <strong>te reconnecter à ton pays</strong> à travers un projet entrepreneurial ?
              <br /><br />
              <strong className="text-rezo-purple">REZO DIASPORA</strong> est le rendez-vous mensuel des Marocains du monde pour entreprendre, investir et se connecter avec l'écosystème business local.
            </p>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="bg-rezo-purple bg-opacity-10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-rezo-purple" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">500+</h3>
              <p className="text-gray-600">Entrepreneurs MRE connectés</p>
            </div>
            <div className="text-center">
              <div className="bg-rezo-purple bg-opacity-10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="h-8 w-8 text-rezo-purple" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">25+</h3>
              <p className="text-gray-600">Pays représentés</p>
            </div>
            <div className="text-center">
              <div className="bg-rezo-purple bg-opacity-10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Video className="h-8 w-8 text-rezo-purple" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">12</h3>
              <p className="text-gray-600">Lives organisés</p>
            </div>
          </div>

          {/* Prochain Live et Programme */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="shadow-lg border-2 border-rezo-purple border-opacity-20">
              <CardHeader className="bg-gradient-to-r from-rezo-purple to-rezo-purple-light text-white">
                <CardTitle className="text-xl flex items-center">
                  <Video className="mr-2" />
                  🎙️ Prochain Live
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 p-6">
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <Badge className="bg-rezo-purple">Titre</Badge>
                    <p className="font-medium">Entreprendre au Maroc depuis l'étranger</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Badge variant="outline" className="border-rezo-purple text-rezo-purple">
                      <Calendar className="w-3 h-3 mr-1" />
                      Date
                    </Badge>
                    <p>15 juin 2025</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Badge variant="outline" className="border-rezo-purple text-rezo-purple">
                      <Clock className="w-3 h-3 mr-1" />
                      Heure
                    </Badge>
                    <p>20h (France) / 19h (Maroc)</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Badge variant="outline" className="border-rezo-purple text-rezo-purple">Invité</Badge>
                    <p>Youssef El Amrani (entrepreneur tech, France/Maroc)</p>
                  </div>
                </div>
                <Button className="w-full bg-gradient-to-r from-rezo-purple to-rezo-purple-light hover:from-rezo-purple-dark hover:to-rezo-purple">
                  ✅ Je m'inscris au Live
                </Button>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl text-rezo-purple">🔎 Au programme</CardTitle>
                <CardDescription>Ce que tu vas découvrir lors de nos rencontres</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start space-x-3">
                    <span className="text-rezo-purple font-bold">•</span>
                    <span>Témoignages de MRE qui ont osé</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-rezo-purple font-bold">•</span>
                    <span>Infos pratiques pour entreprendre au Maroc</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-rezo-purple font-bold">•</span>
                    <span>Mise en relation avec des partenaires locaux</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-rezo-purple font-bold">•</span>
                    <span>Accès à la communauté REZO UP</span>
                  </li>
                </ul>
                <Button variant="outline" className="w-full border-rezo-purple text-rezo-purple hover:bg-rezo-purple hover:text-white">
                  🌐 Découvrir l'espace MRE
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Rejoins la communauté REZO DIASPORA
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Connecte-toi avec d'autres entrepreneurs marocains à travers le monde
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-gradient-to-r from-rezo-purple to-rezo-purple-light hover:from-rezo-purple-dark hover:to-rezo-purple text-lg px-8 py-4 h-auto font-medium"
            >
              Rejoindre la communauté
            </Button>
            <Button 
              variant="outline"
              size="lg"
              className="border-2 border-rezo-purple text-rezo-purple hover:bg-rezo-purple hover:text-white text-lg px-8 py-4 h-auto font-medium"
            >
              En savoir plus
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Diaspora;
