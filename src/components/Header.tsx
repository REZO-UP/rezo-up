
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, User, LogOut } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

interface HeaderProps {
  isAuthenticated?: boolean;
  onLogin?: () => void;
  onLogout?: () => void;
}

const Header = ({ isAuthenticated = false, onLogin, onLogout }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/login');
  };

  const handleLogout = () => {
    if (onLogout) onLogout();
    navigate('/');
  };

  return (
    <header className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src="/lovable-uploads/961753f0-314c-40a9-be6d-3e51c037ca3b.png" 
              alt="REZO UP Logo" 
              className="h-8 w-auto"
            />
          </Link>

          {/* Navigation Desktop */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-rezo-purple transition-colors">
              Accueil
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-rezo-purple transition-colors">
              À propos
            </Link>
            <Link to="/offers" className="text-gray-700 hover:text-rezo-purple transition-colors">
              Offres
            </Link>
            <Link to="/formations" className="text-gray-700 hover:text-rezo-purple transition-colors">
              Formations
            </Link>
            <Link to="/blog" className="text-gray-700 hover:text-rezo-purple transition-colors">
              Blog
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-rezo-purple transition-colors">
              Contact
            </Link>
          </nav>

          {/* Actions */}
          <div className="hidden md:flex items-center space-x-4">
            {isAuthenticated ? (
              <div className="flex items-center space-x-3">
                <Link to="/dashboard">
                  <Button variant="outline" size="sm" className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    Mon espace
                  </Button>
                </Link>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={handleLogout}
                  className="flex items-center gap-2 text-gray-600"
                >
                  <LogOut className="h-4 w-4" />
                  Déconnexion
                </Button>
              </div>
            ) : (
              <div className="flex items-center space-x-3">
                <Button variant="ghost" onClick={handleLogin}>
                  Connexion
                </Button>
                <Button 
                  className="bg-gradient-to-r from-rezo-purple to-rezo-purple-light hover:from-rezo-purple-dark hover:to-rezo-purple"
                  onClick={() => navigate('/register')}
                >
                  Rejoindre
                </Button>
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link 
                to="/" 
                className="block px-3 py-2 text-gray-700 hover:text-rezo-purple"
                onClick={() => setIsMenuOpen(false)}
              >
                Accueil
              </Link>
              <Link 
                to="/about" 
                className="block px-3 py-2 text-gray-700 hover:text-rezo-purple"
                onClick={() => setIsMenuOpen(false)}
              >
                À propos
              </Link>
              <Link 
                to="/offers" 
                className="block px-3 py-2 text-gray-700 hover:text-rezo-purple"
                onClick={() => setIsMenuOpen(false)}
              >
                Offres
              </Link>
              <Link 
                to="/formations" 
                className="block px-3 py-2 text-gray-700 hover:text-rezo-purple"
                onClick={() => setIsMenuOpen(false)}
              >
                Formations
              </Link>
              <Link 
                to="/blog" 
                className="block px-3 py-2 text-gray-700 hover:text-rezo-purple"
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </Link>
              <Link 
                to="/contact" 
                className="block px-3 py-2 text-gray-700 hover:text-rezo-purple"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <div className="pt-3 space-y-2">
                {isAuthenticated ? (
                  <>
                    <Link to="/dashboard">
                      <Button variant="outline" className="w-full" onClick={() => setIsMenuOpen(false)}>
                        Mon espace
                      </Button>
                    </Link>
                    <Button variant="ghost" onClick={handleLogout} className="w-full">
                      Déconnexion
                    </Button>
                  </>
                ) : (
                  <>
                    <Button variant="ghost" onClick={handleLogin} className="w-full">
                      Connexion
                    </Button>
                    <Button 
                      className="w-full bg-gradient-to-r from-rezo-purple to-rezo-purple-light"
                      onClick={() => navigate('/register')}
                    >
                      Rejoindre
                    </Button>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
