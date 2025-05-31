
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  User, 
  Calendar, 
  BookOpen, 
  FileText, 
  Wrench, 
  MessageSquare, 
  Settings,
  Edit,
  Camera,
  Trophy,
  Users,
  TrendingUp
} from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';

const Dashboard = () => {
  const [user, setUser] = useState({
    name: '',
    email: '',
    businessType: 'Entrepreneur',
    memberSince: '2024',
    plan: 'Pro',
    avatar: ''
  });
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    const isAuthenticated = localStorage.getItem('isAuthenticated');
    if (!isAuthenticated) {
      navigate('/login');
      return;
    }

    const userName = localStorage.getItem('userName') || 'Membre REZO UP';
    const userEmail = localStorage.getItem('userEmail') || '';
    setUser(prev => ({
      ...prev,
      name: userName,
      email: userEmail
    }));
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('userEmail');
    localStorage.removeItem('userName');
    toast({
      title: "Déconnexion réussie",
      description: "À bientôt sur REZO UP !",
    });
    navigate('/');
  };

  const upcomingEvents = [
    { id: 1, title: "REZO LIVE - Networking Casablanca", date: "15 Juin 2024", type: "Networking" },
    { id: 2, title: "Formation - CRM pour entrepreneurs", date: "20 Juin 2024", type: "Formation" },
    { id: 3, title: "Pitch Session - Startup Weekend", date: "25 Juin 2024", type: "Pitch" }
  ];

  const myFormations = [
    { id: 1, title: "Construire une offre claire", progress: 80, duration: "2h30" },
    { id: 2, title: "Développer son réseau", progress: 45, duration: "3h15" },
    { id: 3, title: "CRM REZO UP - Guide complet", progress: 100, duration: "1h45" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link to="/">
                <img 
                  src="/lovable-uploads/961753f0-314c-40a9-be6d-3e51c037ca3b.png" 
                  alt="REZO UP Logo" 
                  className="h-8 w-auto"
                />
              </Link>
              <div className="ml-4 text-lg font-semibold text-gray-900">
                Espace Membre
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm">
                <Settings className="h-4 w-4 mr-2" />
                Paramètres
              </Button>
              <Button variant="ghost" size="sm" onClick={handleLogout}>
                Déconnexion
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Banner */}
        <div className="bg-gradient-to-r from-rezo-purple to-rezo-purple-light rounded-xl p-6 text-white mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold mb-2">
                Bienvenue {user.name.split(' ')[0]} ! 👋
              </h1>
              <p className="text-purple-100">
                Ton espace personnel REZO UP pour développer ton business
              </p>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              <div className="text-center">
                <div className="text-2xl font-bold">12</div>
                <div className="text-sm text-purple-200">Formations</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">8</div>
                <div className="text-sm text-purple-200">Events</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">45</div>
                <div className="text-sm text-purple-200">Contacts</div>
              </div>
            </div>
          </div>
        </div>

        <Tabs defaultValue="profile" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3 lg:grid-cols-6">
            <TabsTrigger value="profile" className="flex items-center gap-2">
              <User className="h-4 w-4" />
              <span className="hidden sm:inline">Profil</span>
            </TabsTrigger>
            <TabsTrigger value="events" className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span className="hidden sm:inline">Events</span>
            </TabsTrigger>
            <TabsTrigger value="formations" className="flex items-center gap-2">
              <BookOpen className="h-4 w-4" />
              <span className="hidden sm:inline">Formations</span>
            </TabsTrigger>
            <TabsTrigger value="resources" className="flex items-center gap-2">
              <FileText className="h-4 w-4" />
              <span className="hidden sm:inline">Ressources</span>
            </TabsTrigger>
            <TabsTrigger value="tools" className="flex items-center gap-2">
              <Wrench className="h-4 w-4" />
              <span className="hidden sm:inline">Outils</span>
            </TabsTrigger>
            <TabsTrigger value="forum" className="flex items-center gap-2">
              <MessageSquare className="h-4 w-4" />
              <span className="hidden sm:inline">Forum</span>
            </TabsTrigger>
          </TabsList>

          {/* Profile Tab */}
          <TabsContent value="profile" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Profile Card */}
              <Card className="lg:col-span-1">
                <CardHeader className="text-center">
                  <div className="relative mx-auto mb-4">
                    <Avatar className="h-24 w-24 mx-auto">
                      <AvatarImage src={user.avatar} />
                      <AvatarFallback className="text-2xl bg-rezo-purple text-white">
                        {user.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <Button size="sm" className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                      <Camera className="h-4 w-4" />
                    </Button>
                  </div>
                  <CardTitle>{user.name}</CardTitle>
                  <CardDescription>{user.email}</CardDescription>
                  <Badge variant="secondary" className="mt-2">{user.businessType}</Badge>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Plan actuel</span>
                    <Badge className="bg-rezo-purple">{user.plan}</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Membre depuis</span>
                    <span className="text-sm font-medium">{user.memberSince}</span>
                  </div>
                  <Button className="w-full" variant="outline">
                    <Edit className="h-4 w-4 mr-2" />
                    Modifier le profil
                  </Button>
                </CardContent>
              </Card>

              {/* Business Pitch Card */}
              <Card className="lg:col-span-2">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Trophy className="h-5 w-5 text-rezo-purple" />
                    Mon Pitch Business
                  </CardTitle>
                  <CardDescription>
                    Présente ton activité à la communauté REZO UP
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-gray-50 rounded-lg p-6 text-center">
                    <div className="text-gray-500 mb-4">
                      <Users className="h-12 w-12 mx-auto mb-2" />
                      <p>Ton pitch business n'est pas encore créé</p>
                    </div>
                    <Button className="bg-gradient-to-r from-rezo-purple to-rezo-purple-light">
                      Créer mon pitch
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Events Tab */}
          <TabsContent value="events" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-rezo-purple" />
                  Mes événements REZO LIVE
                </CardTitle>
                <CardDescription>
                  Événements à venir et replays disponibles
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {upcomingEvents.map((event) => (
                    <div key={event.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                      <div>
                        <h3 className="font-medium">{event.title}</h3>
                        <div className="flex items-center gap-4 text-sm text-gray-600 mt-1">
                          <span>{event.date}</span>
                          <Badge variant="outline">{event.type}</Badge>
                        </div>
                      </div>
                      <Button size="sm">S'inscrire</Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Formations Tab */}
          <TabsContent value="formations" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-rezo-purple" />
                  Mes formations
                </CardTitle>
                <CardDescription>
                  Formations accessibles selon ton pack
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {myFormations.map((formation) => (
                    <div key={formation.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                      <h3 className="font-medium mb-2">{formation.title}</h3>
                      <div className="flex items-center justify-between text-sm text-gray-600 mb-3">
                        <span>{formation.duration}</span>
                        <span>{formation.progress}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
                        <div 
                          className="bg-rezo-purple h-2 rounded-full transition-all"
                          style={{ width: `${formation.progress}%` }}
                        ></div>
                      </div>
                      <Button size="sm" className="w-full">
                        {formation.progress === 100 ? 'Revoir' : 'Continuer'}
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Resources Tab */}
          <TabsContent value="resources" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5 text-rezo-purple" />
                  Ressources REZO UP
                </CardTitle>
                <CardDescription>
                  Documents, guides et outils téléchargeables
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="border rounded-lg p-4">
                    <h3 className="font-medium mb-2">🎁 Guide de démarrage entrepreneur</h3>
                    <p className="text-sm text-gray-600 mb-3">Les étapes essentielles pour lancer ton activité</p>
                    <Button size="sm" variant="outline">Télécharger PDF</Button>
                  </div>
                  <div className="border rounded-lg p-4">
                    <h3 className="font-medium mb-2">📊 Template Business Plan</h3>
                    <p className="text-sm text-gray-600 mb-3">Modèle prêt à utiliser pour structurer ton projet</p>
                    <Button size="sm" variant="outline">Télécharger</Button>
                  </div>
                  <div className="border rounded-lg p-4">
                    <h3 className="font-medium mb-2">🎯 Checklist Marketing</h3>
                    <p className="text-sm text-gray-600 mb-3">Actions concrètes pour promouvoir ton business</p>
                    <Button size="sm" variant="outline">Télécharger</Button>
                  </div>
                  <div className="border rounded-lg p-4">
                    <h3 className="font-medium mb-2">💰 Guide Fiscalité Maroc</h3>
                    <p className="text-sm text-gray-600 mb-3">Comprendre tes obligations fiscales</p>
                    <Button size="sm" variant="outline">Télécharger</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Tools Tab */}
          <TabsContent value="tools" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Wrench className="h-5 w-5 text-rezo-purple" />
                  Boîte à outils REZO UP
                </CardTitle>
                <CardDescription>
                  Outils exclusifs pour développer ton business
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <div className="border rounded-lg p-6 text-center hover:shadow-md transition-shadow">
                    <TrendingUp className="h-12 w-12 text-rezo-purple mx-auto mb-4" />
                    <h3 className="font-medium mb-2">CRM REZO UP</h3>
                    <p className="text-sm text-gray-600 mb-4">Gérer tes contacts et prospects</p>
                    <Button size="sm">Accéder</Button>
                  </div>
                  <div className="border rounded-lg p-6 text-center hover:shadow-md transition-shadow">
                    <Calendar className="h-12 w-12 text-rezo-purple mx-auto mb-4" />
                    <h3 className="font-medium mb-2">Planificateur</h3>
                    <p className="text-sm text-gray-600 mb-4">Organiser tes tâches et RDV</p>
                    <Button size="sm">Accéder</Button>
                  </div>
                  <div className="border rounded-lg p-6 text-center hover:shadow-md transition-shadow">
                    <FileText className="h-12 w-12 text-rezo-purple mx-auto mb-4" />
                    <h3 className="font-medium mb-2">Générateur Factures</h3>
                    <p className="text-sm text-gray-600 mb-4">Créer tes devis et factures</p>
                    <Button size="sm">Accéder</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Forum Tab */}
          <TabsContent value="forum" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageSquare className="h-5 w-5 text-rezo-purple" />
                  Forum communauté
                </CardTitle>
                <CardDescription>
                  Échanges et entraide entre membres REZO UP
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="border rounded-lg p-4 hover:bg-gray-50 transition-colors">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h3 className="font-medium mb-1">💡 Conseils pour pitcher son business</h3>
                        <p className="text-sm text-gray-600 mb-2">Discussion sur les meilleures techniques de présentation</p>
                        <div className="flex items-center gap-4 text-xs text-gray-500">
                          <span>15 réponses</span>
                          <span>Dernière activité: il y a 2h</span>
                        </div>
                      </div>
                      <Badge variant="secondary">Actif</Badge>
                    </div>
                  </div>
                  
                  <div className="border rounded-lg p-4 hover:bg-gray-50 transition-colors">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h3 className="font-medium mb-1">🤝 Recherche partenaires e-commerce</h3>
                        <p className="text-sm text-gray-600 mb-2">Projet collaboratif pour plateforme marketplace</p>
                        <div className="flex items-center gap-4 text-xs text-gray-500">
                          <span>8 réponses</span>
                          <span>Dernière activité: il y a 1 jour</span>
                        </div>
                      </div>
                      <Badge variant="outline">Projet</Badge>
                    </div>
                  </div>

                  <div className="text-center pt-4">
                    <Button className="bg-gradient-to-r from-rezo-purple to-rezo-purple-light">
                      Accéder au forum complet
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Dashboard;
