import { useState } from 'react';
import { Video, Clock, Wrench, Shield, Route } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

interface VideoTutorial {
  id: string;
  title: string;
  description: string;
  duration: string;
  category: string;
  difficulty: 'Débutant' | 'Intermédiaire' | 'Avancé';
  thumbnail: string;
}

export function VideosPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const videos: VideoTutorial[] = [
    {
      id: '1',
      title: 'Réparer une crevaison',
      description: 'Apprenez à changer une chambre à air et réparer une crevaison en 10 minutes',
      duration: '8 min',
      category: 'Réparation',
      difficulty: 'Débutant',
      thumbnail: 'https://images.unsplash.com/photo-1675798227643-da319f8ee8f7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJzb24lMjBiaWtlJTIwcmVwYWlyJTIwd29ya3Nob3B8ZW58MXx8fHwxNzgyMjgyNzMzfDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: '2',
      title: 'Régler ses freins',
      description: 'Comment ajuster vos freins pour un freinage optimal et sécurisé',
      duration: '6 min',
      category: 'Réparation',
      difficulty: 'Débutant',
      thumbnail: 'https://images.unsplash.com/photo-1675798227643-da319f8ee8f7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJzb24lMjBiaWtlJTIwcmVwYWlyJTIwd29ya3Nob3B8ZW58MXx8fHwxNzgyMjgyNzMzfDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: '3',
      title: 'Remettre une chaîne',
      description: 'Que faire quand votre chaîne saute ? Gestes simples pour la remettre',
      duration: '5 min',
      category: 'Réparation',
      difficulty: 'Débutant',
      thumbnail: 'https://images.unsplash.com/photo-1675798227643-da319f8ee8f7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJzb24lMjBiaWtlJTIwcmVwYWlyJTIwd29ya3Nob3B8ZW58MXx8fHwxNzgyMjgyNzMzfDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: '4',
      title: 'Bien positionner sa selle',
      description: 'Réglez la hauteur et l\'inclinaison de votre selle pour plus de confort',
      duration: '7 min',
      category: 'Utilisation',
      difficulty: 'Débutant',
      thumbnail: 'https://images.unsplash.com/photo-1675798227643-da319f8ee8f7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJzb24lMjBiaWtlJTIwcmVwYWlyJTIwd29ya3Nob3B8ZW58MXx8fHwxNzgyMjgyNzMzfDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: '5',
      title: 'Circuler en sécurité en ville',
      description: 'Les bons réflexes pour rouler sereinement dans le trafic urbain',
      duration: '12 min',
      category: 'Sécurité',
      difficulty: 'Débutant',
      thumbnail: 'https://images.unsplash.com/photo-1772859022889-1a6b1b5fa237?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiaWtlJTIwcGF0aCUyMHNhZmUlMjBjeWNsaW5nJTIwcm91dGV8ZW58MXx8fHwxNzgyMjgyNzM0fDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: '6',
      title: 'Choisir son antivol',
      description: 'Quel type d\'antivol pour quelle situation ? Guide complet',
      duration: '9 min',
      category: 'Sécurité',
      difficulty: 'Débutant',
      thumbnail: 'https://images.unsplash.com/photo-1758486611631-7a28ba31faa3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiaWtlJTIwcGFya2luZyUyMHN0YXRpb24lMjBzZWN1cmV8ZW58MXx8fHwxNzgyMjgyNzM0fDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: '7',
      title: 'Entretien mensuel de base',
      description: 'Les gestes simples pour garder votre vélo en bon état',
      duration: '10 min',
      category: 'Réparation',
      difficulty: 'Intermédiaire',
      thumbnail: 'https://images.unsplash.com/photo-1675798227643-da319f8ee8f7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJzb24lMjBiaWtlJTIwcmVwYWlyJTIwd29ya3Nob3B8ZW58MXx8fHwxNzgyMjgyNzMzfDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: '8',
      title: 'Planifier son itinéraire',
      description: 'Comment utiliser la carte pour trouver les meilleurs trajets sécurisés',
      duration: '8 min',
      category: 'Utilisation',
      difficulty: 'Débutant',
      thumbnail: 'https://images.unsplash.com/photo-1772859022889-1a6b1b5fa237?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiaWtlJTIwcGF0aCUyMHNhZmUlMjBjeWNsaW5nJTIwcm91dGV8ZW58MXx8fHwxNzgyMjgyNzM0fDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
  ];

  const categories = [
    { key: 'all', label: 'Toutes les vidéos', icon: Video },
    { key: 'Réparation', label: 'Réparation', icon: Wrench },
    { key: 'Utilisation', label: 'Utilisation', icon: Route },
    { key: 'Sécurité', label: 'Sécurité', icon: Shield },
  ];

  const filteredVideos = selectedCategory === 'all' 
    ? videos 
    : videos.filter(v => v.category === selectedCategory);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pb-24 md:pb-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Vidéos explicatives</h1>
        <p className="text-lg text-gray-600">
          Des tutoriels courts et pratiques pour bien utiliser votre vélo et le réparer vous-même. 
          Levez la peur de la panne qui décourage tant de débutants.
        </p>
      </div>

      {/* Category Filter */}
      <div className="mb-8">
        <h2 className="font-semibold mb-4">Catégories</h2>
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <Button
                key={category.key}
                variant={selectedCategory === category.key ? 'default' : 'outline'}
                onClick={() => setSelectedCategory(category.key)}
                size="sm"
                className="gap-2"
              >
                <Icon className="size-4" />
                {category.label}
              </Button>
            );
          })}
        </div>
      </div>

      {/* Info Card */}
      <Card className="mb-8 bg-green-50 border-green-200">
        <CardContent className="pt-6">
          <div className="flex gap-3">
            <Video className="size-6 text-green-600 flex-shrink-0" />
            <div>
              <p className="font-semibold text-green-900 mb-1">Tutoriels pratiques et accessibles</p>
              <p className="text-sm text-green-800">
                Nos vidéos sont conçues pour les débutants. Chaque geste est expliqué clairement, 
                sans jargon technique. Regardez, mettez en pause, répétez : vous apprenez à votre rythme.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Videos Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredVideos.map((video) => (
          <Card key={video.id} className="hover:shadow-lg transition-shadow overflow-hidden group cursor-pointer">
            <div className="relative aspect-video overflow-hidden">
              <ImageWithFallback
                src={video.thumbnail}
                alt={video.title}
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="size-16 bg-white rounded-full flex items-center justify-center">
                  <div className="size-0 border-l-[16px] border-l-blue-600 border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent ml-1" />
                </div>
              </div>
              <div className="absolute bottom-2 right-2 bg-black/80 text-white px-2 py-1 rounded text-sm flex items-center gap-1">
                <Clock className="size-3" />
                {video.duration}
              </div>
            </div>
            <CardHeader>
              <div className="flex items-start justify-between gap-2 mb-2">
                <CardTitle className="text-lg leading-tight">{video.title}</CardTitle>
              </div>
              <div className="flex gap-2">
                <Badge variant="secondary" className="text-xs">{video.category}</Badge>
                <Badge variant="outline" className="text-xs">{video.difficulty}</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription>{video.description}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredVideos.length === 0 && (
        <div className="text-center py-12">
          <Video className="size-12 text-gray-400 mx-auto mb-4" />
          <p className="text-gray-600">Aucune vidéo dans cette catégorie pour le moment.</p>
        </div>
      )}
    </div>
  );
}
