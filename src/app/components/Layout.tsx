import { Outlet, Link, useLocation } from 'react-router';
import { Bike, Building2, Users, Video, MessageSquare, Map, ParkingCircle, User } from 'lucide-react';
import { Button } from './ui/button';
import logoMark from '../assets/antre-cyclistes-mark.png';

export function Layout() {
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Accueil', icon: Bike },
    { path: '/groups', label: 'Groupes', icon: Users },
    { path: '/videos', label: 'Vidéos', icon: Video },
    { path: '/forum', label: 'Forum', icon: MessageSquare },
    { path: '/map', label: 'Carte', icon: Map },
    { path: '/parking', label: 'Stationnement', icon: ParkingCircle },
    { path: '/entreprise', label: 'Entreprise', icon: Building2 },
    { path: '/profile', label: 'Profil', icon: User },
  ];

  return (
    <div className="eco-shell min-h-screen flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-emerald-900/10 bg-white/85 shadow-[0_8px_30px_rgba(16,35,27,0.06)] backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex min-h-16 items-center justify-between gap-4 py-2">
            <Link to="/" className="group flex items-center gap-3 rounded-lg focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50">
              <span className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-[#fbf8e3] shadow-[0_12px_28px_rgba(15,107,69,0.18)] ring-1 ring-emerald-900/10 transition-transform duration-200 group-hover:scale-105">
                <img
                  src={logoMark}
                  alt=""
                  aria-hidden="true"
                  className="h-8 w-10 object-contain"
                />
              </span>
              <span className="leading-tight">
                <span className="block font-bold text-xl text-emerald-950">L'AntreCyclistes</span>
                <span className="hidden text-xs font-medium text-emerald-800 sm:block">Mobilité douce, ensemble</span>
              </span>
            </Link>

            <nav className="hidden md:flex items-center gap-1.5">
              {navItems.slice(1).map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.path;
                return (
                  <Link key={item.path} to={item.path}>
                    <Button
                      variant={isActive ? 'secondary' : 'ghost'}
                      size="sm"
                      className={`gap-2 ${
                        isActive
                          ? 'bg-emerald-100 text-emerald-950 shadow-sm hover:bg-emerald-100'
                          : 'text-emerald-950/75 hover:bg-emerald-50 hover:text-emerald-950'
                      }`}
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
      <nav className="fixed bottom-0 left-0 right-0 z-50 border-t border-emerald-900/10 bg-white/90 shadow-[0_-14px_40px_rgba(16,35,27,0.12)] backdrop-blur-xl md:hidden">
        <div className="flex gap-2 overflow-x-auto px-3 pb-[calc(0.5rem+env(safe-area-inset-bottom))] pt-2">
          {navItems.slice(1).map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex min-w-20 flex-col items-center justify-center rounded-lg px-3 py-2 text-xs font-medium transition-[transform,color,background-color,box-shadow] duration-200 active:scale-[0.98] ${
                  isActive
                    ? 'bg-emerald-100 text-emerald-900 shadow-sm'
                    : 'text-emerald-950/65 hover:bg-emerald-50 hover:text-emerald-950'
                }`}
              >
                <Icon className="size-5" />
                <span className="mt-1">{item.label}</span>
              </Link>
            );
          })}
        </div>
      </nav>
    </div>
  );
}
