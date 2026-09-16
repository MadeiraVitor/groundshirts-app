import { createContext, useContext } from "react";

export type User = {
  id: string;
  email: string;
  fullName?: string;
};

export type Credentials = {
  email: string;
  password: string;
};

export type RegisterInput = Credentials & {
  fullName: string;
};

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  signIn: (credentials: Credentials) => Promise<void>;
  signUp: (data: RegisterInput) => Promise<void>;
  signOut: () => Promise<void>;
}

export const AuthContext = createContext({} as AuthContextType);

export function useAuth() {
  return useContext(AuthContext);
}
