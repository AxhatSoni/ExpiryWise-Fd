import React, { createContext, useContext, useState, useEffect } from 'react';

interface AuthContextType {
  isAuthenticated: boolean;
  hasCompletedWalkthrough: boolean;
  login: (email: string, password: string) => Promise<void>;
  signup: (name: string, email: string, password: string) => Promise<void>;
  logout: () => void;
  resetPassword: (email: string) => Promise<void>;
  completeWalkthrough: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [hasCompletedWalkthrough, setHasCompletedWalkthrough] = useState(false);

  useEffect(() => {
    // Check local storage for auth state and walkthrough completion
    const authState = localStorage.getItem('isAuthenticated');
    const walkthroughState = localStorage.getItem('hasCompletedWalkthrough');
    
    if (authState) setIsAuthenticated(JSON.parse(authState));
    if (walkthroughState) setHasCompletedWalkthrough(JSON.parse(walkthroughState));
  }, []);

  const login = async (email: string, password: string) => {
    // TODO: Implement your login logic here
    // Example API call:
    // const response = await api.auth.login({ email, password });
    // if (response.ok) {
    //   const { token } = await response.json();
    //   localStorage.setItem('token', token);
    setIsAuthenticated(true);
    localStorage.setItem('isAuthenticated', 'true');
  };

  const signup = async (name: string, email: string, password: string) => {
    // TODO: Implement your signup logic here
    // Example API call:
    // const response = await api.auth.signup({ name, email, password });
    // if (response.ok) {
    //   const { token } = await response.json();
    //   localStorage.setItem('token', token);
    setIsAuthenticated(true);
    localStorage.setItem('isAuthenticated', 'true');
  };

  const resetPassword = async (email: string) => {
    // TODO: Implement your password reset logic here
    // Example API call:
    // await api.auth.resetPassword({ email });
    console.log('Password reset email sent to:', email);
  };

  const logout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('isAuthenticated');
    // TODO: Clear any auth tokens or user data
    // localStorage.removeItem('token');
  };

  const completeWalkthrough = () => {
    setHasCompletedWalkthrough(true);
    localStorage.setItem('hasCompletedWalkthrough', 'true');
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        hasCompletedWalkthrough,
        login,
        signup,
        logout,
        resetPassword,
        completeWalkthrough,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}