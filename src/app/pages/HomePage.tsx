import { Link } from 'react-router';
import { Users, Video, MessageSquare, Map, ParkingCircle, User, ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function HomePage() {
  const features = [
    {
      icon: Users,
      title: 'Rejoindre un groupe',
      description: 'Trouvez des personnes de votre niveau pour rouler ensemble sans pression',
      link: '/groups',
      color: 'text-green-600',
      bgColor: 'bg-green-100',
    },
    {
      icon: Video,
      title: 'Vidéos explicatives',
      description: 'Apprenez à réparer votre vélo et à maîtriser les gestes essentiels',
      link: '/videos',
      color: 'text-green-600',
      bgColor: 'bg-green-100',
    },
    {
      icon: MessageSquare,
      title: 'Forum d\'entraide',
      description: 'Posez vos questions et obtenez des conseils de la communauté',
      link: '/forum',
      color: 'text-purple-600',
      bgColor: 'bg-purple-100',
    },
    {
      icon: Map,
      title: 'Carte interactive',
      description: 'Découvrez des itinéraires sécurisés et les services autour de vous',
      link: '/map',
      color: 'text-orange-600',
      bgColor: 'bg-orange-100',
    },
    {
      icon: ParkingCircle,
      title: 'Réservation parking',
      description: 'Réservez une place sécurisée pour stationner votre vélo en toute tranquillité',
      link: '/parking',
      color: 'text-red-600',
      bgColor: 'bg-red-100',
    },
    {
      icon: User,
      title: 'Profil personnel',
      description: 'Suivez vos progrès et gardez trace de vos activités',
      link: '/profile',
      color: 'text-indigo-600',
      bgColor: 'bg-indigo-100',
    },
  ];

  const benefits = [
    'Roulez en sécurité grâce aux itinéraires adaptés',
    'Progressez à votre rythme avec des groupes de votre niveau',
    'Devenez autonome avec nos tutoriels de réparation',
    'Ne restez jamais bloqué grâce à la communauté',
  ];

  return (
    <div className="pb-20 md:pb-8">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-600 to-green-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Franchissez le pas avec confiance
              </h1>
              <p className="text-xl mb-8 text-green-100">
                Votre vélo prend la poussière au garage ? VéloConfiance vous accompagne pour 
                rouler sereinement, progresser entouré, et découvrir le plaisir du vélo.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/profile">
                  <Button size="lg" variant="secondary" className="gap-2 w-full sm:w-auto">
                    Créer mon profil
                    <ArrowRight className="size-5" />
                  </Button>
                </Link>
                <Link to="/groups">
                  <Button size="lg" variant="outline" className="gap-2 w-full sm:w-auto bg-white/10 border-white/30 text-white hover:bg-white/20">
                    Découvrir les groupes
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative hidden md:block">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1628440167042-197d8eb88929?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncm91cCUyMGN5Y2xpc3RzJTIwcmlkaW5nJTIwdG9nZXRoZXIlMjBjaXR5fGVufDF8fHx8MTc4MjI4MjczM3ww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Groupe de cyclistes roulant ensemble"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Combler le vide entre « j'ai un vélo » et « je roule sereinement »
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Ce n'est pas le vélo qui bloque, c'est tout ce qui tourne autour. VéloConfiance 
              réunit au même endroit tout ce dont vous avez besoin pour franchir le pas.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 max-w-3xl mx-auto mb-16">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex gap-3 items-start">
                <CheckCircle className="size-6 text-green-600 flex-shrink-0 mt-1" />
                <p className="text-gray-700">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Six outils pour lever vos freins</h2>
            <p className="text-lg text-gray-600">
              Chaque fonctionnalité répond à un blocage précis identifié auprès des cyclistes
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <Card key={feature.title} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className={`size-12 ${feature.bgColor} rounded-lg flex items-center justify-center mb-4`}>
                      <Icon className={`size-6 ${feature.color}`} />
                    </div>
                    <CardTitle>{feature.title}</CardTitle>
                    <CardDescription>{feature.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Link to={feature.link}>
                      <Button variant="ghost" className="gap-2 w-full">
                        Découvrir
                        <ArrowRight className="size-4" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Personas Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Ils ont franchi le pas</h2>
            <p className="text-lg text-gray-600">Découvrez comment VéloConfiance les aide au quotidien</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Sophie, 42 ans</CardTitle>
                <CardDescription>En reprise après des années</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  "Mon vélo prenait la poussière depuis que j'ai eu mes enfants. Grâce à la carte 
                  interactive, j'ai trouvé un itinéraire tranquille pour aller au travail et j'ai 
                  rejoint un groupe de mon secteur pour me lancer."
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Karim, 19 ans</CardTitle>
                <CardDescription>Étudiant débutant en ville</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  "Je n'avais jamais roulé en ville. Les vidéos m'ont rassuré, le forum m'a aidé à 
                  choisir mon antivol, et maintenant je réserve ma place de parking près du campus."
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Mireille, 68 ans</CardTitle>
                <CardDescription>Reprise en douceur</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  "Je roulais il y a quelques années mais j'avais peur de remonter en selle. Le 
                  groupe débutant m'a redonné confiance et j'ai vérifié mon vélo avec les tutoriels 
                  avant ma première sortie."
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-green-600 to-green-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Prêt à rouler sereinement ?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Créez votre profil en quelques secondes et commencez votre parcours vélo dès aujourd'hui
          </p>
          <Link to="/profile">
            <Button size="lg" variant="secondary" className="gap-2">
              Commencer maintenant
              <ArrowRight className="size-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
