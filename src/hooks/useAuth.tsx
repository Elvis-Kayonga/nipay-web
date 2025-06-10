
import { useState, useEffect } from 'react';
import { User, Session } from '@supabase/supabase-js';
import { supabase } from '@/integrations/supabase/client';

interface AuthState {
  user: User | null;
  session: Session | null;
  loading: boolean;
  isAdmin: boolean;
}

export const useAuth = () => {
  const [authState, setAuthState] = useState<AuthState>({
    user: null,
    session: null,
    loading: true,
    isAdmin: false
  });

  useEffect(() => {
    // Set up auth state listener
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        console.log('Auth state changed:', event, session?.user?.email);
        
        let isAdmin = false;
        if (session?.user?.email) {
          // Check if user is admin by comparing with founder email in site_config
          try {
            const { data: config } = await supabase
              .from('site_config')
              .select('founder_email')
              .single();
            
            isAdmin = config?.founder_email === session.user.email;
          } catch (error) {
            console.error('Error checking admin status:', error);
          }
        }

        setAuthState({
          user: session?.user ?? null,
          session,
          loading: false,
          isAdmin
        });
      }
    );

    // Check for existing session
    supabase.auth.getSession().then(({ data: { session } }) => {
      const checkAdminStatus = async () => {
        let isAdmin = false;
        if (session?.user?.email) {
          try {
            const { data: config } = await supabase
              .from('site_config')
              .select('founder_email')
              .single();
            
            isAdmin = config?.founder_email === session.user.email;
          } catch (error) {
            console.error('Error checking admin status:', error);
          }
        }

        setAuthState({
          user: session?.user ?? null,
          session,
          loading: false,
          isAdmin
        });
      };

      checkAdminStatus();
    });

    return () => subscription.unsubscribe();
  }, []);

  const signIn = async (email: string, password: string) => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password
    });
    return { data, error };
  };

  const signUp = async (email: string, password: string) => {
    const redirectUrl = `${window.location.origin}/`;
    
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: redirectUrl
      }
    });
    return { data, error };
  };

  const signOut = async () => {
    const { error } = await supabase.auth.signOut();
    return { error };
  };

  return {
    ...authState,
    signIn,
    signUp,
    signOut
  };
};
