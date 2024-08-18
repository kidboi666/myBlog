import { supabase } from "@/src/lib/Supabase"
import { ISignInForm } from "@/src/models/auth"
import { useMutation } from "@tanstack/react-query"

export const useSignIn = () => {
  return useMutation({
    mutationFn: async (authData: ISignInForm) => {
      const { data } = await supabase.auth.signInWithPassword({
        email: authData.email,
        password: authData.password,
      })
      return data
    },
  })
}
