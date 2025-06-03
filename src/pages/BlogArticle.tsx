
import { useParams } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import LogoArrow from '@/components/LogoArrow';
import { Calendar, User, Download, Users } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const BlogArticle = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  // Contenu de l'article "Comment pitcher son business"
  const pitchArticle = {
    title: "Comment pitcher son business en 3 minutes",
    subtitle: "Les techniques essentielles pour présenter ton projet de manière impactante",
    category: "Conseils",
    date: "15 Mai 2024",
    author: "Sam",
    image: "🎤",
    content: {
      intro: "Tu as 3 minutes. C'est court, mais suffisant pour marquer les esprits. Que ce soit devant un investisseur, un prospect, un partenaire ou même lors d'un événement de networking, ton pitch peut changer la donne. Voici les clés pour construire un pitch clair, captivant et convaincant.",
      sections: [
        {
          title: "⏱️ 1. Structure ton pitch en 4 temps",
          subtitle: "Voici une structure simple et puissante, testée par des centaines d'entrepreneurs :",
          steps: [
            {
              title: "1. Le problème (30 sec)",
              content: "Commence par accrocher ton auditoire avec un problème réel et parlant. Pose une question ou fais une affirmation forte.",
              example: "\"Aujourd'hui, 3 entrepreneurs sur 5 abandonnent leur activité la première année, faute d'accompagnement.\""
            },
            {
              title: "2. La solution (1 min)",
              content: "Présente ton offre de manière simple, claire et concrète. Dis ce que tu fais, pour qui, et ce que ça change.",
              example: "\"Chez REZO UP, on aide les entrepreneurs marocains à structurer leur business, créer un réseau solide, et accéder à des outils pratiques pour réussir.\""
            },
            {
              title: "3. Ton atout différenciateur (45 sec)",
              content: "Montre en quoi ton projet est unique, innovant, ou plus pertinent que les autres.",
              example: "\"Ce qui fait notre force, c'est l'approche 360° : accompagnement, CRM, club privé et studio de création, dans un seul écosystème local.\""
            },
            {
              title: "4. Appel à l'action (45 sec)",
              content: "Termine par ce que tu veux : un RDV, un test, une prise de contact. Sois clair et direct.",
              example: "\"Si tu es entrepreneur ou indépendant au Maroc et que tu veux booster ton activité, rejoins notre communauté\""
            }
          ]
        },
        {
          title: "🧩 2. Les erreurs à éviter",
          items: [
            "Vouloir tout dire en 3 minutes : reste focus.",
            "Employer du jargon incompréhensible.",
            "Parler de toi sans parler des besoins du client.",
            "Oublier l'émotion et l'enthousiasme."
          ]
        },
        {
          title: "🔥 3. Les bons tips pour briller à l'oral",
          items: [
            "Apprends ton pitch par cœur, puis répète-le à voix haute.",
            "Souris, regarde ton interlocuteur et respire.",
            "Utilise des mots simples et imagés.",
            "Enregistre-toi, filme-toi, et écoute-toi pour ajuster ton rythme et ton intonation."
          ]
        }
      ]
    }
  };

  if (slug !== 'comment-pitcher-son-business') {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <div className="max-w-4xl mx-auto px-4 py-20 text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Article non trouvé</h1>
          <Button onClick={() => navigate('/blog')} variant="outline">
            Retour au blog
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Article Header */}
      <section className="py-20 bg-gradient-to-br from-rezo-purple via-rezo-purple-light to-rezo-purple-dark text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <div className="text-6xl mb-6">{pitchArticle.image}</div>
            <div className="flex items-center justify-center gap-4 mb-4">
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                {pitchArticle.category}
              </Badge>
              <div className="flex items-center text-white/80">
                <Calendar className="h-4 w-4 mr-1" />
                {pitchArticle.date}
              </div>
              <div className="flex items-center text-white/80">
                <User className="h-4 w-4 mr-1" />
                {pitchArticle.author}
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {pitchArticle.title}
            </h1>
            <p className="text-xl text-white/90">
              {pitchArticle.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Introduction */}
          <div className="prose prose-lg max-w-none mb-12">
            <p className="text-xl text-gray-700 leading-relaxed">
              {pitchArticle.content.intro}
            </p>
          </div>

          {/* Sections */}
          <div className="space-y-12">
            {pitchArticle.content.sections.map((section, index) => (
              <Card key={index} className="p-8">
                <CardHeader className="pb-6">
                  <CardTitle className="text-2xl text-rezo-purple">
                    {section.title}
                  </CardTitle>
                  {section.subtitle && (
                    <p className="text-lg text-gray-600">{section.subtitle}</p>
                  )}
                </CardHeader>
                <CardContent>
                  {section.steps ? (
                    <div className="space-y-6">
                      {section.steps.map((step, stepIndex) => (
                        <div key={stepIndex} className="border-l-4 border-rezo-purple pl-6">
                          <h4 className="text-lg font-semibold text-gray-900 mb-2">
                            {step.title}
                          </h4>
                          <p className="text-gray-700 mb-3">{step.content}</p>
                          {step.example && (
                            <div className="bg-gray-50 p-4 rounded-lg italic text-gray-600">
                              {step.example}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  ) : (
                    <ul className="space-y-3">
                      {section.items?.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start">
                          <span className="text-rezo-purple mr-3 mt-1">•</span>
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Bonus Section */}
          <Card className="mt-12 bg-gradient-to-r from-rezo-purple to-rezo-purple-light text-white">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center">
                🎁 Bonus REZO UP
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="bg-white/10 p-6 rounded-lg">
                <div className="flex items-center mb-3">
                  <Download className="h-5 w-5 mr-2" />
                  <h4 className="text-lg font-semibold">Télécharge notre fiche pratique "Pitch 3 minutes"</h4>
                </div>
                <Button 
                  variant="secondary" 
                  className="bg-white text-rezo-purple hover:bg-gray-100"
                >
                  <LogoArrow className="mr-2" size={16} />
                  Télécharger le PDF
                </Button>
              </div>
              
              <div className="bg-white/10 p-6 rounded-lg">
                <div className="flex items-center mb-3">
                  <Users className="h-5 w-5 mr-2" />
                  <h4 className="text-lg font-semibold">Participe à nos ateliers pitch en live chaque mois</h4>
                </div>
                <Button 
                  variant="secondary" 
                  className="bg-white text-rezo-purple hover:bg-gray-100"
                  onClick={() => navigate('/dashboard')}
                >
                  <LogoArrow className="mr-2" size={16} />
                  Accéder à l'espace membre
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Navigation */}
          <div className="mt-12 text-center">
            <Button 
              variant="outline" 
              onClick={() => navigate('/blog')}
              className="border-rezo-purple text-rezo-purple hover:bg-rezo-purple hover:text-white"
            >
              ← Retour au blog
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BlogArticle;
