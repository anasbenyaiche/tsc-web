import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface User {
  id: string;
  email: string;
  role: string;
  name: string;
}

interface AuthState {
  user: User | null;
  token: string | null;
  isLoading: boolean;
  error: string | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  setUser: (user: User) => void;
}

export const useAuth = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      token: null,
      isLoading: false,
      error: null,
      login: async (email: string, password: string) => {
        set({ isLoading: true, error: null });
        try {
          // Replace with your Strapi login endpoint
          const response = await fetch('http://localhost:1337/api/auth/local', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              identifier: email,
              password,
            }),
          });

          const data = await response.json();

          if (!response.ok) {
            throw new Error(data.error?.message || 'Authentication failed');
          }

          set({
            user: {
              id: data.user.id,
              email: data.user.email,
              role: data.user.role.name,
              name: data.user.username,
            },
            token: data.jwt,
            isLoading: false,
          });
        } catch (error) {
          set({ error: (error as Error).message, isLoading: false });
        }
      },
      logout: () => {
        set({ user: null, token: null });
      },
      setUser: (user: User) => {
        set({ user });
      },
    }),
    {
      name: 'auth-storage',
    }
  )
); 