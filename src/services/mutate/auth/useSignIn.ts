import { queryClient } from "@/src/lib/ReactQuery"
import { supabase } from "@/src/lib/supabase/client"
import { ISignInForm } from "@/src/models/auth"
import { useMutation } from "@tanstack/react-query"
import { useRouter } from "next/router"

export const useSignIn = () => {
  const router = useRouter()
  return useMutation({
    mutationFn: async (authData: ISignInForm) => {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: authData.email,
        password: authData.password,
      })
      if (error) {
        throw error
      }
      return data
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["me"] })
      router.push("/")
    },
  })
}
