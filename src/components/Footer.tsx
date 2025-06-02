
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-rezo-purple via-rezo-purple-light to-rezo-purple-dark text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo et description */}
          <div className="md:col-span-2">
            <img 
              src="/lovable-uploads/fac8d5bc-7a8a-4697-9bf8-df3547f57773.png" 
              alt="REZO UP Logo" 
              className="h-20 w-auto mb-4"
            />
            <p className="text-gray-200 mb-4">
              L'écosystème 100% marocain pour entrepreneurs et indépendants. 
              Networking, formations, accompagnement personnalisé.
            </p>
            <div className="flex space-x-4">
              <div className="flex items-center text-sm text-gray-200">
                <Mail className="h-4 w-4 mr-2" />
                contact@rezoup.com
              </div>
              <div className="flex items-center text-sm text-gray-200">
                <Phone className="h-4 w-4 mr-2" />
                +212 636 130 157
              </div>
            </div>
          </div>

          {/* Liens rapides */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Liens rapides</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-200 hover:text-white transition-colors">
                  À propos
                </Link>
              </li>
              <li>
                <Link to="/offers" className="text-gray-200 hover:text-white transition-colors">
                  Nos offres
                </Link>
              </li>
              <li>
                <Link to="/methode" className="text-gray-200 hover:text-white transition-colors">
                  La méthode
                </Link>
              </li>
              <li>
                <Link to="/formations" className="text-gray-200 hover:text-white transition-colors">
                  Formations
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-200 hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li className="text-gray-200">Networking stratégique</li>
              <li className="text-gray-200">Formations en ligne</li>
              <li className="text-gray-200">Accompagnement personnalisé</li>
              <li className="text-gray-200">CRM REZO UP</li>
              <li className="text-gray-200">Studio professionnel</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white border-opacity-20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-200 text-sm">
            © 2024 REZO UP. Tous droits réservés.
          </p>
          <div className="flex items-center text-sm text-gray-200 mt-4 md:mt-0">
            <MapPin className="h-4 w-4 mr-2" />
            Rabat / Casablanca, Maroc
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
