import { useState } from 'react';
import { Map, MapPin, Wrench, Droplet, Toilet, Info, Navigation, Route } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';

interface Service {
  id: string;
  name: string;
  type: 'repair' | 'water' | 'toilet';
  address: string;
  description: string;
  coordinates: { lat: number; lng: number };
}

interface BikeRoute {
  id: string;
  name: string;
  distance: string;
  duration: string;
  difficulty: 'Facile' | 'Moyen' | 'Difficile';
  description: string;
  highlights: string[];
}

export function MapPage() {
  const [selectedService, setSelectedService] = useState<string | null>(null);

  const services: Service[] = [
    {
      id: '1',
      name: 'Station de réparation Place de la République',
      type: 'repair',
      address: 'Place de la République, 75011 Paris',
      description: 'Station de réparation avec pompe et outils disponibles 24h/24',
      coordinates: { lat: 48.8679, lng: 2.3636 },
    },
    {
      id: '2',
      name: 'Point d\'eau Jardin du Luxembourg',
      type: 'water',
      address: 'Jardin du Luxembourg, 75006 Paris',
      description: 'Fontaine d\'eau potable accessible',
      coordinates: { lat: 48.8462, lng: 2.3372 },
    },
    {
      id: '3',
      name: 'Toilettes publiques Gare de Lyon',
      type: 'toilet',
      address: 'Place Louis-Armand, 75012 Paris',
      description: 'Toilettes accessibles aux cyclistes',
      coordinates: { lat: 48.8447, lng: 2.3737 },
    },
    {
      id: '4',
      name: 'Atelier vélo participatif - La Rustine',
      type: 'repair',
      address: '12 Rue de la Solidarité, 75019 Paris',
      description: 'Atelier associatif pour apprendre à réparer son vélo',
      coordinates: { lat: 48.8840, lng: 2.3824 },
    },
    {
      id: '5',
      name: 'Station de réparation Canal Saint-Martin',
      type: 'repair',
      address: 'Quai de Jemmapes, 75010 Paris',
      description: 'Outils et pompe disponibles le long du canal',
      coordinates: { lat: 48.8719, lng: 2.3650 },
    },
  ];

  const routes: BikeRoute[] = [
    {
      id: '1',
      name: 'Balade le long de la Seine',
      distance: '8 km',
      duration: '35 min',
      difficulty: 'Facile',
      description: 'Parcours sécurisé le long des berges de la Seine, idéal pour débuter',
      highlights: ['Voie dédiée', 'Vue panoramique', 'Peu de dénivelé'],
    },
    {
      id: '2',
      name: 'Canal Saint-Martin - Canal de l\'Ourcq',
      distance: '12 km',
      duration: '50 min',
      difficulty: 'Facile',
      description: 'Itinéraire tranquille le long des canaux, sans circulation',
      highlights: ['100% sécurisé', 'Pas de voitures', 'Ombragé'],
    },
    {
      id: '3',
      name: 'Tour des parcs parisiens',
      distance: '15 km',
      duration: '1h10',
      difficulty: 'Moyen',
      description: 'Découverte des principaux parcs de Paris avec quelques passages en ville',
      highlights: ['Verdoyant', 'Culturel', 'Quelques montées'],
    },
    {
      id: '4',
      name: 'Coulée verte René-Dumont',
      distance: '4.5 km',
      duration: '20 min',
      difficulty: 'Facile',
      description: 'Ancienne voie ferrée transformée en promenade verte, entièrement protégée',
      highlights: ['Sans voitures', 'Nature en ville', 'Adapté familles'],
    },
    {
      id: '5',
      name: 'Bois de Vincennes',
      distance: '18 km',
      duration: '1h30',
      difficulty: 'Moyen',
      description: 'Grand tour du bois avec lacs et châteaux, pistes cyclables larges',
      highlights: ['Nature', 'Grandes pistes', 'Dénivelé modéré'],
    },
    {
      id: '6',
      name: 'Châtelet - La Défense par les quais',
      distance: '10 km',
      duration: '40 min',
      difficulty: 'Moyen',
      description: 'Trajet utilitaire vers La Défense, mixte voies dédiées et ville',
      highlights: ['Vélotaf', 'Rapide', 'Bien balisé'],
    },
  ];

  const getServiceIcon = (type: Service['type']) => {
    switch (type) {
      case 'repair':
        return <Wrench className="size-4" />;
      case 'water':
        return <Droplet className="size-4" />;
      case 'toilet':
        return <Toilet className="size-4" />;
    }
  };

  const getServiceLabel = (type: Service['type']) => {
    switch (type) {
      case 'repair':
        return 'Réparation';
      case 'water':
        return 'Eau';
      case 'toilet':
        return 'Toilettes';
    }
  };

  const getDifficultyColor = (difficulty: BikeRoute['difficulty']) => {
    switch (difficulty) {
      case 'Facile':
        return 'bg-green-100 text-green-800 border-green-300';
      case 'Moyen':
        return 'bg-orange-100 text-orange-800 border-orange-300';
      case 'Difficile':
        return 'bg-red-100 text-red-800 border-red-300';
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pb-24 md:pb-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Carte interactive</h1>
        <p className="text-lg text-gray-600">
          Découvrez des itinéraires sécurisés adaptés à votre niveau et repérez les services 
          (réparation, eau, toilettes) autour de vous.
        </p>
      </div>

      <Tabs defaultValue="routes" className="space-y-6">
        <TabsList className="grid w-full grid-cols-2 max-w-md">
          <TabsTrigger value="routes" className="gap-2">
            <Route className="size-4" />
            Itinéraires
          </TabsTrigger>
          <TabsTrigger value="services" className="gap-2">
            <MapPin className="size-4" />
            Services
          </TabsTrigger>
        </TabsList>

        {/* Routes Tab */}
        <TabsContent value="routes" className="space-y-6">
          {/* Info Card */}
          <Card className="bg-orange-50 border-orange-200">
            <CardContent className="pt-6">
              <div className="flex gap-3">
                <Navigation className="size-6 text-orange-600 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-orange-900 mb-1">Itinéraires adaptés à tous</p>
                  <p className="text-sm text-orange-800">
                    Nous avons sélectionné des parcours en fonction de votre niveau. Les itinéraires 
                    faciles privilégient les pistes cyclables et évitent le trafic dense.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Map Placeholder */}
          <Card className="overflow-hidden">
            <div className="bg-gradient-to-br from-blue-100 to-green-100 h-[400px] flex items-center justify-center relative">
              <Map className="size-16 text-gray-400" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white/90 backdrop-blur-sm p-6 rounded-lg shadow-lg text-center max-w-md">
                  <Info className="size-12 text-blue-600 mx-auto mb-3" />
                  <p className="font-semibold mb-2">Carte interactive</p>
                  <p className="text-sm text-gray-600">
                    Visualisez les itinéraires sur une carte interactive avec guidage GPS
                  </p>
                </div>
              </div>
            </div>
          </Card>

          {/* Routes List */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Itinéraires recommandés</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {routes.map((route) => (
                <Card key={route.id} className="hover:shadow-lg transition-shadow cursor-pointer">
                  <CardHeader>
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <CardTitle className="text-lg">{route.name}</CardTitle>
                      <Badge className={getDifficultyColor(route.difficulty)}>
                        {route.difficulty}
                      </Badge>
                    </div>
                    <CardDescription className="text-base">{route.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex gap-4 text-sm">
                      <div className="flex items-center gap-1">
                        <Navigation className="size-4 text-gray-500" />
                        <span className="font-medium">{route.distance}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Route className="size-4 text-gray-500" />
                        <span className="font-medium">{route.duration}</span>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {route.highlights.map((highlight, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {highlight}
                        </Badge>
                      ))}
                    </div>
                    <Button className="w-full gap-2">
                      <Navigation className="size-4" />
                      Voir l'itinéraire
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </TabsContent>

        {/* Services Tab */}
        <TabsContent value="services" className="space-y-6">
          {/* Info Card */}
          <Card className="bg-blue-50 border-blue-200">
            <CardContent className="pt-6">
              <div className="flex gap-3">
                <MapPin className="size-6 text-blue-600 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-blue-900 mb-1">Services essentiels</p>
                  <p className="text-sm text-blue-800">
                    Repérez les points de réparation, fontaines d'eau et toilettes le long de vos trajets. 
                    Ne restez jamais bloqué en cas de problème.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Map Placeholder */}
          <Card className="overflow-hidden">
            <div className="bg-gradient-to-br from-blue-100 to-green-100 h-[400px] flex items-center justify-center relative">
              <Map className="size-16 text-gray-400" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white/90 backdrop-blur-sm p-6 rounded-lg shadow-lg text-center max-w-md">
                  <Info className="size-12 text-blue-600 mx-auto mb-3" />
                  <p className="font-semibold mb-2">Carte des services</p>
                  <p className="text-sm text-gray-600">
                    Tous les services à proximité affichés sur une carte avec filtres
                  </p>
                </div>
              </div>
            </div>
          </Card>

          {/* Services List */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Services disponibles</h2>
            <div className="space-y-3">
              {services.map((service) => (
                <Card 
                  key={service.id} 
                  className={`hover:shadow-md transition-shadow cursor-pointer ${
                    selectedService === service.id ? 'ring-2 ring-blue-500' : ''
                  }`}
                  onClick={() => setSelectedService(service.id)}
                >
                  <CardContent className="pt-6">
                    <div className="flex gap-4">
                      <div className={`size-12 flex-shrink-0 rounded-lg flex items-center justify-center ${
                        service.type === 'repair' ? 'bg-blue-100' :
                        service.type === 'water' ? 'bg-cyan-100' :
                        'bg-purple-100'
                      }`}>
                        <div className={
                          service.type === 'repair' ? 'text-blue-600' :
                          service.type === 'water' ? 'text-cyan-600' :
                          'text-purple-600'
                        }>
                          {getServiceIcon(service.type)}
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-2 mb-2">
                          <h3 className="font-semibold leading-tight">{service.name}</h3>
                          <Badge variant="secondary" className="gap-1 flex-shrink-0">
                            {getServiceIcon(service.type)}
                            {getServiceLabel(service.type)}
                          </Badge>
                        </div>
                        <p className="text-sm text-gray-600 mb-2">{service.description}</p>
                        <div className="flex items-center gap-2 text-sm text-gray-500">
                          <MapPin className="size-3" />
                          <span>{service.address}</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
