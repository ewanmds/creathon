import { useState } from 'react';
import { Users, MapPin, Calendar, Clock, CheckCircle } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { useUser } from '../context/UserContext';
import { toast } from 'sonner';

interface Group {
  id: string;
  name: string;
  level: string;
  levelKey: string;
  members: number;
  maxMembers: number;
  description: string;
  location: string;
  nextRide: string;
  time: string;
}

export function GroupsPage() {
  const { user, updateUser } = useUser();
  const [selectedLevel, setSelectedLevel] = useState<string>('all');

  const groups: Group[] = [
    {
      id: '1',
      name: 'Les Débutants Sereins',
      level: 'Grand débutant',
      levelKey: 'beginner',
      members: 8,
      maxMembers: 12,
      description: 'Pour ceux qui n\'ont jamais ou très peu roulé. On prend le temps, sans pression.',
      location: 'Paris 13e',
      nextRide: 'Samedi 28 juin',
      time: '10h00',
    },
    {
      id: '2',
      name: 'Reprise en Douceur',
      level: 'En reprise',
      levelKey: 'resuming',
      members: 12,
      maxMembers: 15,
      description: 'Vous avez déjà roulé mais ça fait longtemps. On se remet en selle ensemble.',
      location: 'Lyon 7e',
      nextRide: 'Dimanche 29 juin',
      time: '9h30',
    },
    {
      id: '3',
      name: 'Cyclistes Urbains',
      level: 'À l\'aise',
      levelKey: 'comfortable',
      members: 15,
      maxMembers: 20,
      description: 'À l\'aise sur le vélo mais pas encore en ville. Apprenons ensemble les bons réflexes.',
      location: 'Paris 11e',
      nextRide: 'Samedi 28 juin',
      time: '14h00',
    },
    {
      id: '4',
      name: 'Vélotaf Confirmé',
      level: 'Expérimenté',
      levelKey: 'experienced',
      members: 10,
      maxMembers: 15,
      description: 'Pour les cyclistes réguliers qui veulent partager leurs trajets quotidiens.',
      location: 'Bordeaux Centre',
      nextRide: 'Lundi 30 juin',
      time: '8h00',
    },
    {
      id: '5',
      name: 'Seniors Cyclistes',
      level: 'Grand débutant',
      levelKey: 'beginner',
      members: 6,
      maxMembers: 10,
      description: 'Groupe spécial pour les seniors qui veulent (re)découvrir le vélo en toute sérénité.',
      location: 'Toulouse Sud',
      nextRide: 'Mercredi 2 juillet',
      time: '10h30',
    },
    {
      id: '6',
      name: 'Famille à Vélo',
      level: 'À l\'aise',
      levelKey: 'comfortable',
      members: 9,
      maxMembers: 12,
      description: 'Pour les parents qui veulent rouler avec leurs enfants sur des parcours adaptés.',
      location: 'Nantes Ouest',
      nextRide: 'Samedi 28 juin',
      time: '15h00',
    },
  ];

  const levels = [
    { key: 'all', label: 'Tous les niveaux' },
    { key: 'beginner', label: 'Grand débutant' },
    { key: 'resuming', label: 'En reprise' },
    { key: 'comfortable', label: 'À l\'aise' },
    { key: 'experienced', label: 'Expérimenté' },
  ];

  const filteredGroups = selectedLevel === 'all' 
    ? groups 
    : groups.filter(g => g.levelKey === selectedLevel);

  const handleJoinGroup = (group: Group) => {
    if (!user) {
      toast.error('Veuillez d\'abord créer votre profil');
      return;
    }

    if (user.joinedGroups.includes(group.id)) {
      toast.info('Vous avez déjà rejoint ce groupe');
      return;
    }

    updateUser({
      joinedGroups: [...user.joinedGroups, group.id],
    });

    toast.success(`Vous avez rejoint ${group.name} !`);
  };

  const isGroupJoined = (groupId: string) => {
    return user?.joinedGroups.includes(groupId) || false;
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pb-24 md:pb-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Rejoindre un groupe</h1>
        <p className="text-lg text-gray-600">
          Trouvez des personnes de votre niveau pour rouler ensemble, progresser sans pression 
          et partager le plaisir du vélo.
        </p>
      </div>

      {/* Level Filter */}
      <div className="mb-8">
        <h2 className="font-semibold mb-4">Filtrer par niveau</h2>
        <div className="flex flex-wrap gap-2">
          {levels.map((level) => (
            <Button
              key={level.key}
              variant={selectedLevel === level.key ? 'default' : 'outline'}
              onClick={() => setSelectedLevel(level.key)}
              size="sm"
            >
              {level.label}
            </Button>
          ))}
        </div>
      </div>

      {/* Info Card */}
      <Card className="mb-8 bg-blue-50 border-blue-200">
        <CardContent className="pt-6">
          <div className="flex gap-3">
            <Users className="size-6 text-blue-600 flex-shrink-0" />
            <div>
              <p className="font-semibold text-blue-900 mb-1">Comment ça marche ?</p>
              <p className="text-sm text-blue-800">
                Choisissez un groupe selon votre niveau. Vous recevrez les informations pour les 
                prochaines sorties et pourrez échanger avec les membres. Pas de jugement, pas de 
                compétition, juste le plaisir de rouler ensemble.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Groups Grid */}
      <div className="grid md:grid-cols-2 gap-6">
        {filteredGroups.map((group) => (
          <Card key={group.id} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-start justify-between mb-2">
                <CardTitle className="text-xl">{group.name}</CardTitle>
                {isGroupJoined(group.id) && (
                  <Badge variant="default" className="gap-1">
                    <CheckCircle className="size-3" />
                    Membre
                  </Badge>
                )}
              </div>
              <Badge variant="secondary" className="w-fit">{group.level}</Badge>
            </CardHeader>
            <CardContent>
              <CardDescription className="mb-4 text-base">
                {group.description}
              </CardDescription>

              <div className="space-y-2 mb-4">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <MapPin className="size-4" />
                  <span>{group.location}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Calendar className="size-4" />
                  <span>Prochaine sortie : {group.nextRide}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Clock className="size-4" />
                  <span>{group.time}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Users className="size-4" />
                  <span>{group.members}/{group.maxMembers} membres</span>
                </div>
              </div>

              <Button
                className="w-full"
                onClick={() => handleJoinGroup(group)}
                disabled={isGroupJoined(group.id)}
                variant={isGroupJoined(group.id) ? 'secondary' : 'default'}
              >
                {isGroupJoined(group.id) ? 'Déjà membre' : 'Rejoindre ce groupe'}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredGroups.length === 0 && (
        <div className="text-center py-12">
          <Users className="size-12 text-gray-400 mx-auto mb-4" />
          <p className="text-gray-600">Aucun groupe ne correspond à ce niveau pour le moment.</p>
        </div>
      )}
    </div>
  );
}
