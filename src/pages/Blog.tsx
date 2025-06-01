
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, User, ArrowRight } from 'lucide-react';

const Blog = () => {
  const articles = [
    {
      title: "Comment pitcher son business en 3 minutes",
      excerpt: "Les techniques essentielles pour présenter ton projet de manière impactante",
      category: "Conseils",
      date: "15 Mai 2024",
      author: "Sam",
      image: "🎤"
    },
    {
      title: "Témoignage : De l'idée aux premiers clients en 6 mois",
      excerpt: "L'histoire inspirante de Youssef, membre REZO UP qui a transformé son projet",
      category: "Témoignage",
      date: "10 Mai 2024",
      author: "Équipe REZO UP",
      image: "✨"
    },
    {
      title: "Fiscalité au Maroc : Guide pour entrepreneurs",
      excerpt: "Comprendre tes obligations et optimiser ta situation fiscale",
      category: "Juridique",
      date: "5 Mai 2024",
      author: "Expert REZO UP",
      image: "📊"
    },
    {
      title: "Les tendances de l'entrepreneuriat féminin au Maroc",
      excerpt: "Analyse des opportunités et défis pour les femmes entrepreneures",
      category: "Tendances",
      date: "1er Mai 2024",
      author: "Sam",
      image: "👩‍💼"
    },
    {
      title: "REZO LIVE Casablanca : Les moments forts",
      excerpt: "Retour sur notre dernier événement networking à Casablanca",
      category: "Événements",
      date: "28 Avril 2024",
      author: "Équipe REZO UP",
      image: "🎉"
    },
    {
      title: "5 outils gratuits pour structurer ton business",
      excerpt: "Notre sélection d'outils essentiels pour organiser ton activité",
      category: "Outils",
      date: "25 Avril 2024",
      author: "Sam",
      image: "🛠️"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-rezo-purple via-rezo-purple-light to-rezo-purple-dark text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            📝 REZO UP TALK
          </h1>
          <p className="text-xl">
            Le blog qui donne la parole aux entrepreneurs marocains
          </p>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Derniers articles
            </h2>
            <p className="text-xl text-gray-600">
              Conseils, témoignages et analyses pour entrepreneurs engagés
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <CardHeader>
                  <div className="text-4xl mb-4 text-center">{article.image}</div>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline">{article.category}</Badge>
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar className="h-4 w-4 mr-1" />
                      {article.date}
                    </div>
                  </div>
                  <CardTitle className="text-xl mb-2 leading-tight">{article.title}</CardTitle>
                  <CardDescription>{article.excerpt}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-gray-600">
                      <User className="h-4 w-4 mr-1" />
                      {article.author}
                    </div>
                    <Button 
                      variant="ghost" 
                      size="sm"
                      className="text-rezo-purple hover:text-rezo-purple-dark"
                    >
                      Lire plus
                      <ArrowRight className="h-4 w-4 ml-1" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <Button 
              variant="outline"
              size="lg"
              className="border-rezo-purple text-rezo-purple hover:bg-rezo-purple hover:text-white"
            >
              Voir plus d'articles
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-r from-rezo-purple to-rezo-purple-light rounded-2xl p-8 md:p-12 text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              📬 Reste informé(e)
            </h2>
            <p className="text-xl mb-8">
              Reçois nos derniers articles et conseils directement dans ta boîte mail
            </p>
            <div className="max-w-md mx-auto flex gap-4">
              <input 
                type="email" 
                placeholder="ton@email.com"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900"
              />
              <Button 
                className="bg-white text-rezo-purple hover:bg-gray-100 px-6"
              >
                S'abonner
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
