import {
  ArrowRight,
  BarChart3,
  Bike,
  Building2,
  Calendar,
  CheckCircle,
  Crown,
  Leaf,
  Lock,
  Users,
  Wrench,
} from 'lucide-react';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Progress } from '../components/ui/progress';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../components/ui/table';

export function EnterprisePage() {
  const premiumFeatures = [
    'Groupes privés par entreprise, site ou niveau',
    'Accès à des groupes inter-entreprises pour le vélotaf',
    'Ateliers de réparation organisés sur le lieu de travail',
    'Tableaux de bord RSE avec CO2 total et CO2 par employé',
  ];

  const dashboardStats = [
    {
      label: 'Employés inscrits',
      value: '184',
      detail: '+28 ce mois-ci',
      icon: Users,
      color: 'text-blue-600',
      bgColor: 'bg-blue-100',
    },
    {
      label: 'Trajets vélo suivis',
      value: '1 246',
      detail: 'sur les 30 derniers jours',
      icon: Bike,
      color: 'text-green-600',
      bgColor: 'bg-green-100',
    },
    {
      label: 'CO2 économisé',
      value: '1,84 t',
      detail: 'estimation collective',
      icon: Leaf,
      color: 'text-emerald-600',
      bgColor: 'bg-emerald-100',
    },
    {
      label: 'CO2 par employé',
      value: '10 kg',
      detail: 'moyenne mensuelle',
      icon: BarChart3,
      color: 'text-indigo-600',
      bgColor: 'bg-indigo-100',
    },
  ];

  const privateGroups = [
    {
      name: 'Vélotaf siège',
      members: '46 membres',
      description: 'Groupe privé pour les trajets domicile-travail du site principal.',
    },
    {
      name: 'Inter-entreprises quartier',
      members: '83 membres',
      description: 'Communauté partagée avec les entreprises voisines pour rouler ensemble.',
    },
    {
      name: 'Reprise encadrée',
      members: '18 membres',
      description: 'Groupe Premium pour les salariés qui reprennent le vélo progressivement.',
    },
  ];

  const workshops = [
    {
      title: 'Diagnostic vélo sur site',
      date: 'Jeudi 2 juillet',
      details: 'Contrôle freins, pneus, éclairage et conseils sécurité.',
    },
    {
      title: 'Réparation express',
      date: 'Mardi 7 juillet',
      details: 'Réglages simples et petites réparations pendant la pause déjeuner.',
    },
    {
      title: 'Atelier autonomie',
      date: 'Vendredi 10 juillet',
      details: 'Apprendre à réparer une crevaison et régler ses freins au bureau.',
    },
  ];

  const employeeImpact = [
    { name: 'Sarah M.', trips: 22, distance: '214 km', co2: '25,7 kg' },
    { name: 'Karim B.', trips: 18, distance: '168 km', co2: '20,2 kg' },
    { name: 'Mireille D.', trips: 12, distance: '84 km', co2: '10,1 kg' },
    { name: 'Equipe support', trips: 96, distance: '732 km', co2: '87,8 kg' },
  ];

  const siteProgress = [
    { site: 'Paris 11e', progress: 78, co2: '820 kg' },
    { site: 'La Défense', progress: 64, co2: '610 kg' },
    { site: 'Lyon 7e', progress: 42, co2: '410 kg' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pb-24 md:pb-8">
      <div className="mb-8 grid lg:grid-cols-[1fr_380px] gap-6 items-stretch">
        <div>
          <Badge className="mb-4 gap-2 bg-amber-100 text-amber-900 border-amber-200" variant="outline">
            <Crown className="size-3" />
            Abonnement Premium Entreprise
          </Badge>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Espace entreprise</h1>
          <p className="text-lg text-gray-600 max-w-3xl">
            Donnez aux salariés un cadre simple pour venir au travail à vélo : groupes privés,
            ateliers de réparation sur site et suivi RSE du CO2 économisé par équipe et par employé.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <Button className="gap-2 w-full sm:w-auto">
              Activer Premium
              <ArrowRight className="size-4" />
            </Button>
            <Button variant="outline" className="gap-2 w-full sm:w-auto" asChild>
              <a href="#dashboard-rse">
                Voir le tableau RSE
                <BarChart3 className="size-4" />
              </a>
            </Button>
          </div>
        </div>

        <Card className="border-amber-200 bg-amber-50">
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="size-11 rounded-lg bg-amber-100 flex items-center justify-center">
                <Building2 className="size-5 text-amber-700" />
              </div>
              <div>
                <CardTitle>Pack mobilité durable</CardTitle>
                <CardDescription>Offre dédiée RH, RSE et QVT</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-3">
            {premiumFeatures.map((feature) => (
              <div key={feature} className="flex gap-2 text-sm text-amber-950">
                <CheckCircle className="size-4 text-amber-700 flex-shrink-0 mt-0.5" />
                <span>{feature}</span>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      <section id="dashboard-rse" className="space-y-6 mb-10">
        <div className="flex items-center justify-between gap-4 flex-wrap">
          <div>
            <h2 className="text-2xl font-semibold mb-2">Tableau de bord RSE</h2>
            <p className="text-gray-600">
              Suivi des trajets déclarés, du CO2 économisé et de la progression par site.
            </p>
          </div>
          <Badge variant="secondary" className="gap-2">
            <Leaf className="size-3" />
            Données mensuelles
          </Badge>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {dashboardStats.map((stat) => {
            const Icon = stat.icon;
            return (
              <Card key={stat.label}>
                <CardContent className="pt-6">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="text-sm text-gray-600 mb-1">{stat.label}</p>
                      <p className="text-3xl font-bold">{stat.value}</p>
                      <p className="text-xs text-gray-500 mt-1">{stat.detail}</p>
                    </div>
                    <div className={`size-10 rounded-lg ${stat.bgColor} flex items-center justify-center`}>
                      <Icon className={`size-5 ${stat.color}`} />
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="grid lg:grid-cols-[1.4fr_0.8fr] gap-6">
          <Card>
            <CardHeader>
              <CardTitle>CO2 économisé par employé</CardTitle>
              <CardDescription>
                Vue exploitable pour les bilans RSE, challenges internes et communications RH.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Employé ou équipe</TableHead>
                    <TableHead>Trajets</TableHead>
                    <TableHead>Distance</TableHead>
                    <TableHead>CO2 économisé</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {employeeImpact.map((row) => (
                    <TableRow key={row.name}>
                      <TableCell className="font-medium">{row.name}</TableCell>
                      <TableCell>{row.trips}</TableCell>
                      <TableCell>{row.distance}</TableCell>
                      <TableCell>{row.co2}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Objectifs par site</CardTitle>
              <CardDescription>Progression vers l'objectif CO2 mensuel.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-5">
              {siteProgress.map((site) => (
                <div key={site.site} className="space-y-2">
                  <div className="flex items-center justify-between gap-3 text-sm">
                    <span className="font-medium">{site.site}</span>
                    <span className="text-gray-600">{site.co2}</span>
                  </div>
                  <Progress value={site.progress} />
                  <p className="text-xs text-gray-500">{site.progress}% de l'objectif atteint</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="grid lg:grid-cols-2 gap-6 mb-10">
        <Card>
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="size-11 rounded-lg bg-blue-100 flex items-center justify-center">
                <Lock className="size-5 text-blue-600" />
              </div>
              <div>
                <CardTitle>Groupes privés Premium</CardTitle>
                <CardDescription>Pour votre entreprise et les réseaux inter-entreprises.</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-3">
            {privateGroups.map((group) => (
              <div key={group.name} className="rounded-lg border p-4">
                <div className="flex items-start justify-between gap-3 mb-2">
                  <h3 className="font-semibold">{group.name}</h3>
                  <Badge variant="outline">{group.members}</Badge>
                </div>
                <p className="text-sm text-gray-600">{group.description}</p>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="size-11 rounded-lg bg-green-100 flex items-center justify-center">
                <Wrench className="size-5 text-green-600" />
              </div>
              <div>
                <CardTitle>Ateliers sur le lieu de travail</CardTitle>
                <CardDescription>Réparation, prévention et autonomie directement au bureau.</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-3">
            {workshops.map((workshop) => (
              <div key={workshop.title} className="rounded-lg border p-4">
                <div className="flex items-start gap-3">
                  <Calendar className="size-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold">{workshop.title}</h3>
                    <p className="text-sm text-gray-500 mb-1">{workshop.date}</p>
                    <p className="text-sm text-gray-600">{workshop.details}</p>
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </section>

      <Card className="bg-blue-50 border-blue-200">
        <CardContent className="pt-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <p className="font-semibold text-blue-950 mb-1">Prêt pour un pilote Premium ?</p>
              <p className="text-sm text-blue-800">
                Lancez un site test, invitez les salariés et suivez les premiers gains CO2 dès le premier mois.
              </p>
            </div>
            <Button className="gap-2 w-full md:w-auto">
              Créer l'espace entreprise
              <Building2 className="size-4" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
