import { create } from 'zustand';

type AuthState = {
  username: string;
  password: string;
  cover : string;
  setCredentials: (username: string, password: string) => void;
  clearCredentials: () => void;
};

export const useAuthStore = create<AuthState>((set) => ({
  username: '',
  password: '',
  setCredentials: (username, password) => set({ username, password }),
  clearCredentials: () => set({ username: '', password: '' }),
}));
