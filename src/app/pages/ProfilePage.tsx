import { useState } from 'react';
import { User, Users, Route as RouteIcon, ParkingCircle, Award, Edit, Save } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Badge } from '../components/ui/badge';
import { RadioGroup, RadioGroupItem } from '../components/ui/radio-group';
import { useUser, SkillLevel } from '../context/UserContext';
import { toast } from 'sonner';
import { Progress } from '../components/ui/progress';

export function ProfilePage() {
  const { user, setUser, updateUser } = useUser();
  const [isEditing, setIsEditing] = useState(!user);
  const [name, setName] = useState(user?.name || '');
  const [level, setLevel] = useState<SkillLevel>(user?.level || 'beginner');

  const skillLevels = [
    {
      value: 'beginner' as SkillLevel,
      label: 'Grand débutant',
      description: 'Je n\'ai jamais ou très peu roulé à vélo',
    },
    {
      value: 'resuming' as SkillLevel,
      label: 'En reprise',
      description: 'J\'ai déjà roulé mais ça fait longtemps',
    },
    {
      value: 'comfortable' as SkillLevel,
      label: 'À l\'aise',
      description: 'Je suis à l\'aise sur le vélo mais pas en ville',
    },
    {
      value: 'experienced' as SkillLevel,
      label: 'Expérimenté',
      description: 'Je roule régulièrement, y compris en ville',
    },
  ];

  const handleSave = () => {
    if (!name.trim()) {
      toast.error('Veuillez entrer votre nom');
      return;
    }

    if (user) {
      updateUser({ name, level });
      toast.success('Profil mis à jour');
    } else {
      setUser({
        name,
        level,
        joinedGroups: [],
        completedRoutes: [],
        parkingReservations: [],
      });
      toast.success("Bienvenue sur L'AntreCyclistes !");
    }
    setIsEditing(false);
  };

  const getProgressStats = () => {
    if (!user) return { groups: 0, routes: 0, reservations: 0 };
    return {
      groups: user.joinedGroups.length,
      routes: user.completedRoutes.length,
      reservations: user.parkingReservations.length,
    };
  };

  const stats = getProgressStats();

  const achievements = [
    {
      id: '1',
      title: 'Premier pas',
      description: 'Créer son profil',
      unlocked: !!user,
      icon: User,
    },
    {
      id: '2',
      title: 'Sociable',
      description: 'Rejoindre un groupe',
      unlocked: stats.groups > 0,
      icon: Users,
    },
    {
      id: '3',
      title: 'Explorateur',
      description: 'Compléter 3 itinéraires',
      unlocked: stats.routes >= 3,
      icon: RouteIcon,
    },
    {
      id: '4',
      title: 'Organisé',
      description: 'Réserver une place de parking',
      unlocked: stats.reservations > 0,
      icon: ParkingCircle,
    },
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pb-24 md:pb-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Mon profil</h1>
        <p className="text-lg text-gray-600">
          Suivez vos progrès et personnalisez votre expérience L'AntreCyclistes
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Profile Form */}
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Informations personnelles</CardTitle>
                  <CardDescription>
                    {user ? 'Gérez vos informations' : 'Créez votre profil pour commencer'}
                  </CardDescription>
                </div>
                {user && !isEditing && (
                  <Button variant="outline" size="sm" onClick={() => setIsEditing(true)} className="gap-2">
                    <Edit className="size-4" />
                    Modifier
                  </Button>
                )}
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <Label htmlFor="name">Nom</Label>
                <Input
                  id="name"
                  placeholder="Ex: Sophie Martin"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  disabled={!isEditing}
                  className="mt-2"
                />
              </div>

              <div>
                <Label className="mb-3 block">Niveau de pratique</Label>
                <RadioGroup
                  value={level}
                  onValueChange={(value) => setLevel(value as SkillLevel)}
                  disabled={!isEditing}
                  className="space-y-3"
                >
                  {skillLevels.map((skillLevel) => (
                    <div
                      key={skillLevel.value}
                      className={`flex items-start space-x-3 p-4 rounded-lg border-2 transition-colors ${
                        level === skillLevel.value
                          ? 'border-blue-500 bg-blue-50'
                          : 'border-gray-200 hover:border-gray-300'
                      } ${!isEditing ? 'opacity-75' : ''}`}
                    >
                      <RadioGroupItem value={skillLevel.value} id={skillLevel.value} className="mt-1" />
                      <div className="flex-1">
                        <Label
                          htmlFor={skillLevel.value}
                          className="font-semibold cursor-pointer"
                        >
                          {skillLevel.label}
                        </Label>
                        <p className="text-sm text-gray-600 mt-1">{skillLevel.description}</p>
                      </div>
                    </div>
                  ))}
                </RadioGroup>
              </div>

              {isEditing && (
                <Button onClick={handleSave} className="w-full gap-2">
                  <Save className="size-4" />
                  {user ? 'Enregistrer les modifications' : 'Créer mon profil'}
                </Button>
              )}
            </CardContent>
          </Card>

          {/* Achievements */}
          {user && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="size-5" />
                  Mes réalisations
                </CardTitle>
                <CardDescription>Débloquez des badges en utilisant la plateforme</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid sm:grid-cols-2 gap-4">
                  {achievements.map((achievement) => {
                    const Icon = achievement.icon;
                    return (
                      <div
                        key={achievement.id}
                        className={`p-4 rounded-lg border-2 ${
                          achievement.unlocked
                            ? 'border-green-500 bg-green-50'
                            : 'border-gray-200 bg-gray-50'
                        }`}
                      >
                        <div className="flex items-start gap-3">
                          <div
                            className={`size-10 rounded-full flex items-center justify-center ${
                              achievement.unlocked
                                ? 'bg-green-500 text-white'
                                : 'bg-gray-300 text-gray-500'
                            }`}
                          >
                            <Icon className="size-5" />
                          </div>
                          <div className="flex-1">
                            <p className="font-semibold text-sm">{achievement.title}</p>
                            <p className="text-xs text-gray-600 mt-1">{achievement.description}</p>
                            {achievement.unlocked && (
                              <Badge variant="default" className="mt-2 text-xs bg-green-600">
                                Débloqué
                              </Badge>
                            )}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          )}
        </div>

        {/* Stats Sidebar */}
        {user && (
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Mes statistiques</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2 text-sm font-medium">
                      <Users className="size-4 text-blue-600" />
                      Groupes rejoints
                    </div>
                    <span className="text-2xl font-bold text-blue-600">{stats.groups}</span>
                  </div>
                  <Progress value={Math.min(stats.groups * 20, 100)} className="h-2" />
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2 text-sm font-medium">
                      <RouteIcon className="size-4 text-green-600" />
                      Itinéraires complétés
                    </div>
                    <span className="text-2xl font-bold text-green-600">{stats.routes}</span>
                  </div>
                  <Progress value={Math.min(stats.routes * 10, 100)} className="h-2" />
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2 text-sm font-medium">
                      <ParkingCircle className="size-4 text-purple-600" />
                      Réservations
                    </div>
                    <span className="text-2xl font-bold text-purple-600">{stats.reservations}</span>
                  </div>
                  <Progress value={Math.min(stats.reservations * 25, 100)} className="h-2" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Niveau actuel</CardTitle>
              </CardHeader>
              <CardContent>
                <Badge className="text-base py-2 px-4">
                  {skillLevels.find(sl => sl.value === user.level)?.label}
                </Badge>
                <p className="text-sm text-gray-600 mt-3">
                  {skillLevels.find(sl => sl.value === user.level)?.description}
                </p>
              </CardContent>
            </Card>

            {stats.reservations > 0 && (
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Prochaines réservations</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {user.parkingReservations.slice(-2).reverse().map((reservation) => (
                    <div key={reservation.id} className="border-l-4 border-blue-500 pl-3 py-2">
                      <p className="font-semibold text-sm">{reservation.location}</p>
                      <p className="text-xs text-gray-600 mt-1">
                        {new Date(reservation.date).toLocaleDateString('fr-FR')} à {reservation.time}
                      </p>
                    </div>
                  ))}
                </CardContent>
              </Card>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
