
import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import LogoArrow from '@/components/LogoArrow';
import { Mail, Phone, MapPin, MessageSquare } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulation d'envoi
    setTimeout(() => {
      toast({
        title: "Message envoyé !",
        description: "Nous vous répondrons dans les plus brefs délais.",
      });
      setFormData({ name: '', email: '', message: '' });
      setIsLoading(false);
    }, 1000);
  };

  const updateFormData = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-rezo-purple via-rezo-purple-light to-rezo-purple-dark text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Contactez-nous
          </h1>
          <p className="text-xl">
            Tu veux en savoir plus ou nous poser une question ?
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

      {/* REZO DIASPORA Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-red-600 mb-6">🌍 REZO DIASPORA</h2>
          <p className="text-xl text-center max-w-4xl mx-auto mb-10 text-gray-700 leading-relaxed">
            Tu vis en France, au Canada, en Belgique ou ailleurs ? Tu veux <strong>te reconnecter à ton pays</strong> à travers un projet entrepreneurial ?
            <br /><br />
            <strong>REZO DIASPORA</strong> est le rendez-vous mensuel des Marocains du monde pour entreprendre, investir et se connecter avec l'écosystème business local.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl">🎙️ Prochain Live</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p><strong>Titre :</strong> Entreprendre au Maroc depuis l'étranger</p>
                <p><strong>Date :</strong> 15 juin 2025 - 20h (France) / 19h (Maroc)</p>
                <p><strong>Invité :</strong> Youssef El Amrani (entrepreneur tech, France/Maroc)</p>
                <Button className="bg-red-600 hover:bg-red-700 text-white">
                  ✅ Je m'inscris
                </Button>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl">🔎 Au programme</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-4 text-gray-700">
                  <li>• Témoignages de MRE qui ont osé</li>
                  <li>• Infos pratiques pour entreprendre au Maroc</li>
                  <li>• Mise en relation avec des partenaires locaux</li>
                  <li>• Accès à la communauté REZO UP</li>
                </ul>
                <Button variant="outline" className="border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white">
                  🌐 Découvrir l'espace MRE
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-8">
                  Restons en contact
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  Notre équipe est là pour t'accompagner dans ton projet entrepreneurial.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-rezo-purple bg-opacity-10 p-3 rounded-lg">
                    <Mail className="h-6 w-6 text-rezo-purple" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Email</h3>
                    <p className="text-gray-600">contact@rezoup.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-rezo-purple bg-opacity-10 p-3 rounded-lg">
                    <Phone className="h-6 w-6 text-rezo-purple" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">WhatsApp Business</h3>
                    <p className="text-gray-600">+212 636 130 157</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-rezo-purple bg-opacity-10 p-3 rounded-lg">
                    <MapPin className="h-6 w-6 text-rezo-purple" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Présentiel</h3>
                    <p className="text-gray-600">Rabat / Casablanca</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-rezo-purple bg-opacity-10 p-3 rounded-lg">
                    <MessageSquare className="h-6 w-6 text-rezo-purple" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">En ligne</h3>
                    <p className="text-gray-600">Zoom / Google Meet</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle>Envie d'échanger ?</CardTitle>
                <CardDescription>
                  Remplis ce formulaire et nous te répondrons rapidement
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nom</Label>
                    <Input
                      id="name"
                      placeholder="Ton nom complet"
                      value={formData.name}
                      onChange={(e) => updateFormData('name', e.target.value)}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="ton@email.com"
                      value={formData.email}
                      onChange={(e) => updateFormData('email', e.target.value)}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Raconte-nous ton projet ou ta question..."
                      rows={5}
                      value={formData.message}
                      onChange={(e) => updateFormData('message', e.target.value)}
                      required
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-rezo-purple to-rezo-purple-light hover:from-rezo-purple-dark hover:to-rezo-purple flex items-center justify-center"
                    disabled={isLoading}
                  >
                    <LogoArrow className="mr-2" size={16} />
                    {isLoading ? "Envoi en cours..." : "Envoyer"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
