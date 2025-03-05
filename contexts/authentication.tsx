import { useContext, createContext, type PropsWithChildren } from 'react';
import { useStorageState } from './storage';
import { auth } from '@/configs/firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

const AuthContext = createContext<{
  signIn: (email: string, password: string) => void;
  signUp: (email: string, password: string) => void;
  signOut: () => void;
  session?: string | null;
  isLoading: boolean;
}>({
  signIn: (email: string, password: string) => null,
  signUp: (email: string, password: string) => null,
  signOut: () => null,
  session: null,
  isLoading: false,
});

// This hook can be used to access the user info.
export function useSession() {
  const value = useContext(AuthContext);
  if (process.env.NODE_ENV !== 'production') {
    if (!value) {
      throw new Error('useSession must be wrapped in a <SessionProvider />');
    }
  }

  return value;
}

export function SessionProvider({ children }: PropsWithChildren) {
  const [[isLoading, session], setSession] = useStorageState('session');
  

  return (
    <AuthContext.Provider
      value={{
        signIn: async (email: string, password: string) => {
          // Perform sign-in logic here
          try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            console.log('userCredential:', userCredential);
            const userCredentialString = JSON.stringify(userCredential);
            setSession(userCredentialString);
            // setSession('user-id');
          } catch(error: any) {
            alert('Error signing in:' + error);
          }
        },
        signUp: async (email: string, password: string) => {
          try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const userCredentialString = JSON.stringify(userCredential);
            setSession(userCredentialString);
          } catch(error: any) {
            alert('Error signing up:' + error);
          }
        },
        signOut: async () => {
          try {
            // Perform sign-out logic here
            await auth.signOut();
            setSession(null);
          }
          catch(error: any) {
            alert('Error signing out:' + error);
          }
        },
        session,
        isLoading,
      }}>
      {children}
    </AuthContext.Provider>
  );
}
