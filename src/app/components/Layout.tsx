import { Outlet, Link, useLocation } from 'react-router';
import { Bike, Building2, Users, Video, MessageSquare, Map, ParkingCircle, User } from 'lucide-react';
import { Button } from './ui/button';

export function Layout() {
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Accueil', icon: Bike },
    { path: '/groups', label: 'Groupes', icon: Users },
    { path: '/videos', label: 'Vidéos', icon: Video },
    { path: '/forum', label: 'Forum', icon: MessageSquare },
    { path: '/map', label: 'Carte', icon: Map },
    { path: '/parking', label: 'Parking', icon: ParkingCircle },
    { path: '/entreprise', label: 'Entreprise', icon: Building2 },
    { path: '/profile', label: 'Profil', icon: User },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center gap-2">
              <Bike className="size-8 text-blue-600" />
              <span className="font-bold text-xl text-gray-900">VéloConfiance</span>
            </Link>

            <nav className="hidden md:flex items-center gap-1">
              {navItems.slice(1).map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.path;
                return (
                  <Link key={item.path} to={item.path}>
                    <Button
                      variant={isActive ? 'default' : 'ghost'}
                      size="sm"
                      className="gap-2"
                    >
                      <Icon className="size-4" />
                      {item.label}
                    </Button>
                  </Link>
                );
              })}
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Mobile Navigation */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t shadow-lg">
        <div className="flex gap-1 overflow-x-auto p-2">
          {navItems.slice(1).map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex min-w-20 flex-col items-center justify-center p-2 rounded-lg transition-colors ${
                  isActive 
                    ? 'bg-blue-100 text-blue-600' 
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <Icon className="size-5" />
                <span className="text-xs mt-1">{item.label}</span>
              </Link>
            );
          })}
        </div>
      </nav>
    </div>
  );
}
