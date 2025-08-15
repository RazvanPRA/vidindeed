import { createContext, useState, useEffect, type ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import type { User } from '../types';
import { users as fakeUsers } from '../fakedata';

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => void;
  logout: () => void;
}

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext<AuthContextType>({} as AuthContextType);

const HOME_BY_ROLE: Record<User['role'], string> = {
  Admin: '/admin',
  Worker: '/worker',
  Customer: '/customer',
};

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const navigate = useNavigate();

  // Reîncarcă sesiunea din localStorage (persistență ușoară)
  useEffect(() => {
    const saved = localStorage.getItem('auth_user');
    if (saved) {
      try {
        setUser(JSON.parse(saved) as User);
      } catch { /* empty */ }
    }
  }, []);

  // Salvează/șterge sesiunea și du utilizatorul pe home-ul rolului
  useEffect(() => {
    if (user) {
      localStorage.setItem('auth_user', JSON.stringify(user));
      navigate(HOME_BY_ROLE[user.role], { replace: true });
    } else {
      localStorage.removeItem('auth_user');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  const login = (email: string, password: string) => {
    const found = fakeUsers.find((u) => u.email === email && u.password === password);
    if (found) {
      setUser(found);
      // navigarea se face din useEffect pe baza rolului
    } else {
      alert('Invalid credentials');
    }
  };

  const logout = () => {
    setUser(null);
    navigate('/login', { replace: true });
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};