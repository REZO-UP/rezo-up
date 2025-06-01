
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Check, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Offers = () => {
  const navigate = useNavigate();

  const plans = [
    {
      name: "Starter",
      price: "149",
      description: "Pour commencer ton aventure entrepreneuriale",
      features: [
        { name: "Accès CRM REZO UP", included: "Version basique" },
        { name: "Espace membre", included: true },
        { name: "Formations en ligne", included: false },
        { name: "Lives & ateliers", included: false },
        { name: "Coaching individuel", included: false },
        { name: "Accès au studio", included: false }
      ],
      popular: false
    },
    {
      name: "Pro",
      price: "249",
      description: "Pour développer ton business efficacement",
      features: [
        { name: "Accès CRM REZO UP", included: true },
        { name: "Espace membre", included: true },
        { name: "Formations en ligne", included: true },
        { name: "Lives & ateliers", included: true },
        { name: "Coaching individuel", included: false },
        { name: "Accès au studio", included: false }
      ],
      popular: true
    },
    {
      name: "VIP",
      price: "449",
      description: "L'accompagnement premium complet",
      features: [
        { name: "Accès CRM REZO UP", included: true },
        { name: "Espace membre", included: true },
        { name: "Formations en ligne", included: "avec replays" },
        { name: "Lives & ateliers", included: true },
        { name: "Coaching individuel", included: "1 séance/mois" },
        { name: "Accès au studio", included: "1 session/mois" }
      ],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-rezo-purple via-rezo-purple-light to-rezo-purple-dark text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            📦 Nos packs pour entrepreneurs engagés
          </h1>
          <p className="text-xl">
            💼 Choisis l'accompagnement qui correspond à tes ambitions
          </p>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <Card 
                key={index} 
                className={`relative ${plan.popular ? 'border-rezo-purple border-2 shadow-xl' : ''}`}
              >
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-rezo-purple">
                    Le plus populaire
                  </Badge>
                )}
                
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                  <CardDescription className="mb-4">{plan.description}</CardDescription>
                  <div className="text-center">
                    <span className="text-4xl font-bold text-rezo-purple">{plan.price}</span>
                    <span className="text-gray-600"> dh/mois</span>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center justify-between">
                      <span className="text-gray-700">{feature.name}</span>
                      <div className="flex items-center">
                        {feature.included === true ? (
                          <Check className="h-5 w-5 text-green-500" />
                        ) : feature.included === false ? (
                          <X className="h-5 w-5 text-gray-400" />
                        ) : (
                          <span className="text-sm text-rezo-purple font-medium">
                            {feature.included}
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                  
                  <Button 
                    className={`w-full mt-6 ${plan.popular 
                      ? 'bg-gradient-to-r from-rezo-purple to-rezo-purple-light hover:from-rezo-purple-dark hover:to-rezo-purple' 
                      : 'border-rezo-purple text-rezo-purple hover:bg-rezo-purple hover:text-white'
                    }`}
                    variant={plan.popular ? 'default' : 'outline'}
                    onClick={() => navigate('/register')}
                  >
                    👉 Je choisis cette offre
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Offers;
