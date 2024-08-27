import { Database } from "@/src/models/supabase"
import { createBrowserClient } from "@supabase/ssr"
import { createClient } from "@supabase/supabase-js"

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
const supabaseRoleKey = process.env.NEXT_PUBLIC_SUPABASE_ROLE_KEY!

export const supabase = createBrowserClient<Database>(supabaseUrl, supabaseKey)

export const supabaseAdmin = createClient(supabaseUrl, supabaseRoleKey, {
  auth: {
    autoRefreshToken: false,
    persistSession: false,
  },
})

export const adminClient = supabaseAdmin.auth.admin
