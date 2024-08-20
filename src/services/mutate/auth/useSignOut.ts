import { supabase } from "@/src/lib/Supabase"
import { useMutation } from "@tanstack/react-query"

export const useSignOut = () => {
  return useMutation({
    mutationFn: async () => {
      const { error } = await supabase.auth.signOut()
      return error
    },
  })
}
