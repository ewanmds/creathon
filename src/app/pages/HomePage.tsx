import { Link } from 'react-router';
import {
  ArrowRight,
  Bike,
  Building2,
  CheckCircle,
  Leaf,
  Map,
  MessageSquare,
  ParkingCircle,
  ShieldCheck,
  Sparkles,
  User,
  Users,
  Video,
} from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function HomePage() {
  const features = [
    {
      icon: Users,
      title: 'Rejoindre un groupe',
      description: 'Trouvez des personnes de votre niveau pour rouler ensemble sans pression.',
      link: '/groups',
      tone: 'bg-emerald-100 text-emerald-700',
    },
    {
      icon: Video,
      title: 'Vidéos explicatives',
      description: 'Apprenez les gestes utiles pour entretenir votre vélo et gagner en autonomie.',
      link: '/videos',
      tone: 'bg-sky-100 text-sky-700',
    },
    {
      icon: MessageSquare,
      title: 'Forum d\'entraide',
      description: 'Posez vos questions et profitez de conseils simples de la communauté.',
      link: '/forum',
      tone: 'bg-violet-100 text-violet-700',
    },
    {
      icon: Map,
      title: 'Carte interactive',
      description: 'Découvrez des itinéraires sécurisés et les services autour de vous.',
      link: '/map',
      tone: 'bg-amber-100 text-amber-700',
    },
    {
      icon: ParkingCircle,
      title: 'Stationnement vélo',
      description: 'Réservez une place sécurisée pour arriver l\'esprit tranquille.',
      link: '/parking',
      tone: 'bg-rose-100 text-rose-700',
    },
    {
      icon: Building2,
      title: 'Espace entreprise',
      description: 'Activez Premium avec groupes privés, ateliers et tableau de bord RSE.',
      link: '/entreprise',
      tone: 'bg-blue-100 text-blue-700',
    },
    {
      icon: User,
      title: 'Profil personnel',
      description: 'Suivez vos progrès et gardez trace de vos activités vélo.',
      link: '/profile',
      tone: 'bg-indigo-100 text-indigo-700',
    },
  ];

  const benefits = [
    'Itinéraires pensés pour rouler sereinement',
    'Groupes bienveillants adaptés à votre niveau',
    'Ateliers et tutoriels pour devenir autonome',
    'Services utiles repérés avant le départ',
  ];

  const impactStats = [
    { value: '7', label: 'outils pour lever les freins' },
    { value: '24/7', label: 'ressources et carte accessibles' },
  ];

  const testimonials = [
    {
      name: 'Sophie, 42 ans',
      context: 'En reprise après des années',
      quote:
        "Mon vélo prenait la poussière depuis que j'ai eu mes enfants. La carte m'a aidée à choisir un trajet calme, puis un groupe local m'a donné le déclic.",
    },
    {
      name: 'Karim, 19 ans',
      context: 'Étudiant débutant en ville',
      quote:
        "Je n'avais jamais roulé en ville. Les vidéos m'ont rassuré, le forum m'a aidé à choisir mon antivol et je réserve mon stationnement près du campus.",
    },
    {
      name: 'Mireille, 68 ans',
      context: 'Reprise en douceur',
      quote:
        "Le groupe débutant m'a redonné confiance. J'ai vérifié mon vélo avec les tutoriels avant ma première sortie, sans pression.",
    },
  ];

  return (
    <div className="pb-24 md:pb-10">
      <section className="relative isolate overflow-hidden text-white">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1628440167042-197d8eb88929?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncm91cCUyMGN5Y2xpc3RzJTIwcmlkaW5nJTIwdG9nZXRoZXIlMjBjaXR5fGVufDF8fHx8MTc4MjI4MjczM3ww&ixlib=rb-4.1.0&q=80&w=1600"
          alt="Groupe de cyclistes roulant ensemble en ville"
          className="absolute inset-0 -z-20 h-full w-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(8,31,23,0.92)_0%,rgba(8,31,23,0.76)_46%,rgba(8,31,23,0.34)_100%)]" />

        <div className="eco-container flex min-h-[calc(100dvh-9rem)] items-center py-14 md:py-20">
          <div className="max-w-3xl eco-rise">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/14 px-3 py-1 text-sm font-medium text-white shadow-sm backdrop-blur-md">
              <Leaf className="size-4" />
              Mobilité douce, confiance réelle
            </div>
            <h1 className="max-w-3xl text-4xl font-bold leading-tight md:text-6xl">
              Franchissez le pas avec confiance
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-emerald-50 md:text-xl">
              Votre vélo prend la poussière au garage ? L'AntreCyclistes vous accompagne pour
              rouler sereinement, progresser entouré et retrouver le plaisir des trajets simples.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link to="/profile">
                <Button size="lg" variant="secondary" className="w-full gap-2 bg-white text-emerald-950 hover:bg-emerald-50 sm:w-auto">
                  Créer mon profil
                  <ArrowRight className="size-5" />
                </Button>
              </Link>
              <Link to="/groups">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full gap-2 border-white/35 bg-white/10 text-white hover:bg-white/20 hover:text-white sm:w-auto"
                >
                  Découvrir les groupes
                </Button>
              </Link>
            </div>
          </div>
        </div>

        <div className="eco-container pb-6">
          <div className="grid gap-3 sm:grid-cols-2">
            {impactStats.map((stat, index) => (
              <div
                key={stat.label}
                className={`eco-rise eco-rise-delay-${index + 1} rounded-lg border border-white/15 bg-white/12 p-4 backdrop-blur-md`}
              >
                <p className="text-2xl font-bold md:text-3xl">{stat.value}</p>
                <p className="mt-1 text-sm text-emerald-50">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-14 md:py-18">
        <div className="eco-container">
          <div className="mx-auto max-w-3xl text-center">
            <span className="eco-kicker">
              <ShieldCheck className="size-4" />
              Une progression sans pression
            </span>
            <h2 className="mt-5 text-3xl font-bold leading-tight text-emerald-950 md:text-4xl">
              Combler le vide entre « j'ai un vélo » et « je roule sereinement »
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              Ce n'est pas le vélo qui bloque, c'est tout ce qui tourne autour. L'AntreCyclistes
              réunit au même endroit tout ce dont vous avez besoin pour franchir le pas.
            </p>
          </div>

          <div className="mx-auto mt-10 grid max-w-4xl gap-4 sm:grid-cols-2">
            {benefits.map((benefit) => (
              <div key={benefit} className="eco-card-hover rounded-lg border border-emerald-900/10 bg-emerald-50/70 p-5">
                <div className="flex gap-3">
                  <CheckCircle className="mt-0.5 size-6 flex-shrink-0 text-emerald-700" />
                  <p className="text-slate-700">{benefit}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 md:py-18">
        <div className="eco-container">
          <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <span className="eco-kicker">
                <Sparkles className="size-4" />
                Système complet
              </span>
              <h2 className="mt-5 text-3xl font-bold text-emerald-950 md:text-4xl">Sept outils pour lever vos freins</h2>
            </div>
            <p className="max-w-xl text-slate-600">
              Chaque fonctionnalité répond à un blocage concret : peur de la ville, manque de repères,
              stationnement, réparation ou besoin de soutien collectif.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <Card key={feature.title} className="eco-card-hover">
                  <CardHeader>
                    <div className={`mb-2 flex size-12 items-center justify-center rounded-lg ${feature.tone}`}>
                      <Icon className="size-6" />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                    <CardDescription className="text-base leading-7">{feature.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Link to={feature.link}>
                      <Button variant="ghost" className="w-full justify-between text-emerald-900 hover:bg-emerald-50">
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

      <section className="bg-white py-14 md:py-18">
        <div className="eco-container">
          <div className="mb-10 text-center">
            <span className="eco-kicker">
              <Bike className="size-4" />
              Des parcours qui rassurent
            </span>
            <h2 className="mt-5 text-3xl font-bold text-emerald-950 md:text-4xl">Ils ont franchi le pas</h2>
            <p className="mt-3 text-lg text-slate-600">Découvrez comment L'AntreCyclistes les aide au quotidien.</p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.name} className="eco-card-hover">
                <CardHeader>
                  <CardTitle>{testimonial.name}</CardTitle>
                  <CardDescription>{testimonial.context}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="leading-7 text-slate-600">"{testimonial.quote}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 md:py-18">
        <div className="eco-container">
          <div className="overflow-hidden rounded-lg border border-emerald-900/10 bg-emerald-950 p-8 text-white shadow-[0_24px_70px_rgba(16,35,27,0.18)] md:p-10">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div className="max-w-2xl">
                <p className="text-sm font-medium uppercase tracking-[0.16em] text-emerald-200">Premier trajet</p>
                <h2 className="mt-3 text-3xl font-bold md:text-4xl">Prêt à rouler sereinement ?</h2>
                <p className="mt-4 text-lg leading-8 text-emerald-50">
                  Créez votre profil en quelques secondes et commencez votre parcours vélo dès aujourd'hui.
                </p>
              </div>
              <Link to="/profile">
                <Button size="lg" variant="secondary" className="w-full gap-2 bg-white text-emerald-950 hover:bg-emerald-50 md:w-auto">
                  Commencer maintenant
                  <ArrowRight className="size-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
