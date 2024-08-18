import { useMutation } from "@tanstack/react-query"
import { supabase } from "@/src/lib/Supabase"
import { ISignUpForm } from "@/src/models/auth"

export const useSignUp = () => {
  return useMutation({
    mutationFn: async (authData: ISignUpForm) => {
      const { data } = await supabase.auth.signUp({
        email: authData.email,
        password: authData.password,
        options: {
          data: {
            nickname: authData.nickname,
          },
        },
      })
      return data
    },
  })
}
