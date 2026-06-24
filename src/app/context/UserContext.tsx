import React, { createContext, useContext, useState, ReactNode } from 'react';

export type SkillLevel = 'beginner' | 'resuming' | 'comfortable' | 'experienced';

export interface UserProfile {
  name: string;
  level: SkillLevel;
  joinedGroups: string[];
  completedRoutes: string[];
  parkingReservations: Reservation[];
}

export interface Reservation {
  id: string;
  location: string;
  date: string;
  time: string;
}

interface UserContextType {
  user: UserProfile | null;
  setUser: (user: UserProfile | null) => void;
  updateUser: (updates: Partial<UserProfile>) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export function UserProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<UserProfile | null>(null);

  const updateUser = (updates: Partial<UserProfile>) => {
    setUser(prev => prev ? { ...prev, ...updates } : null);
  };

  return (
    <UserContext.Provider value={{ user, setUser, updateUser }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
}
