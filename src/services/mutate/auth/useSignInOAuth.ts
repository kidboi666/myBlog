import { supabase } from "@/src/lib/supabase/client"
import { useMutation } from "@tanstack/react-query"

export const useSignInOAuth = () => {
  return useMutation({
    mutationFn: async () => {
      const { data } = await supabase.auth.signInWithOAuth({
        provider: "github",
        options: {
          redirectTo: "http://localhost:3000",
        },
      })
      return data
    },
  })
}
