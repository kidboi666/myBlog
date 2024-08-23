import { queryClient } from "@/src/lib/ReactQuery"
import { supabase } from "@/src/lib/supabase/client"
import { useMutation } from "@tanstack/react-query"
import { useRouter } from "next/router"

export const useSignInOAuth = () => {
  const router = useRouter()

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
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["me"] })
      router.replace("/")
    },
  })
}
