
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import LogoArrow from '@/components/LogoArrow';
import { useNavigate } from 'react-router-dom';

const About = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-rezo-purple via-rezo-purple-light to-rezo-purple-dark text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Derrière REZO UP, une mission claire
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Structurer & connecter les entrepreneurs marocains
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <div className="text-center mb-12">
              <div className="w-32 h-32 bg-rezo-purple rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-4xl font-bold text-white">S</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Je suis Sam, entrepreneure passionnée
              </h2>
              <p className="text-lg text-gray-600">
                Installée au Maroc depuis plus de 10 ans
              </p>
            </div>

            <div className="space-y-8 text-lg text-gray-700 leading-relaxed">
              <p>
                <strong>Ma mission :</strong> aider les entrepreneurs à transformer leurs idées en projets concrets 
                grâce à une méthode simple :
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-12">
                <div className="text-center p-6 bg-rezo-purple bg-opacity-10 rounded-lg">
                  <h3 className="text-xl font-bold text-rezo-purple mb-2">Structurer</h3>
                  <p className="text-gray-600">Organiser ton activité</p>
                </div>
                <div className="text-center p-6 bg-rezo-purple bg-opacity-10 rounded-lg">
                  <h3 className="text-xl font-bold text-rezo-purple mb-2">Connecter</h3>
                  <p className="text-gray-600">Développer ton réseau</p>
                </div>
                <div className="text-center p-6 bg-rezo-purple bg-opacity-10 rounded-lg">
                  <h3 className="text-xl font-bold text-rezo-purple mb-2">Booster</h3>
                  <p className="text-gray-600">Accélérer ta croissance</p>
                </div>
              </div>

              <p>
                Au Maroc, j'ai vu trop d'entrepreneurs talentueux mais seuls, mal accompagnés, souvent découragés.
              </p>

              <p>
                <strong>C'est pour eux que j'ai créé REZO UP :</strong> un réseau solide, des outils concrets, un cadre clair.
              </p>

              <div className="bg-gradient-to-r from-rezo-purple to-rezo-purple-light text-white p-8 rounded-xl text-center my-12">
                <p className="text-xl font-semibold">
                  💬 Faisons émerger une génération d'entrepreneurs marocains structurés, connectés et alignés.
                </p>
              </div>
            </div>

            <div className="text-center mt-12">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-rezo-purple to-rezo-purple-light hover:from-rezo-purple-dark hover:to-rezo-purple text-lg px-8 py-4 h-auto flex items-center"
                onClick={() => navigate('/register')}
              >
                <LogoArrow className="mr-2" size={20} />
                Rejoindre la mission
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
