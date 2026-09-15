import { createClient } from '@supabase/supabase-js';

// Supabase project credentials provided
const rawUrl = 'https://sirifvmuhcnfuzdoipwl.supabase.co/rest/v1/';
// Format clean base URL for the Supabase JS Client
export const SUPABASE_URL = rawUrl.includes('/rest/v1') 
  ? rawUrl.replace(/\/rest\/v1\/?$/, '') 
  : rawUrl.replace(/\/+$/, '');

export const SUPABASE_ANON_KEY =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNpcmlmdm11aGNuZnV6ZG9pcHdsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODkxMjQzNTgsImV4cCI6MjEwNDcwMDM1OH0.Uw6d_9gEa_j4gCM7ZZEwuBXPH35Q_m_DXNpbD3B3A_s';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
    detectSessionInUrl: true,
  },
  realtime: {
    params: {
      eventsPerSecond: 10,
    },
  },
});
