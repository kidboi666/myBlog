import { queryClient } from "@/src/lib/ReactQuery"
import { supabase } from "@/src/lib/Supabase"
import { useMutation } from "@tanstack/react-query"

export const useSignOut = () => {
  return useMutation({
    mutationFn: async () => {
      queryClient.resetQueries({ queryKey: ["me"] })
      const { error } = await supabase.auth.signOut()
      return error || null
    },
  })
}
