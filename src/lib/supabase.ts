
import { createClient } from '@supabase/supabase-js';

// Uses dummy values if env is missing
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || "https://dummy-project.supabase.co";
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || "dummy-anon-key-123";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
