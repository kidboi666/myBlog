import { useMutation } from "@tanstack/react-query"
import { supabase } from "@/src/lib/supabase/client"
import { ISignUpForm } from "@/src/models/auth"
import { useRouter } from "next/router"
import { queryClient } from "@/src/lib/ReactQuery"

export const useSignUp = () => {
  const router = useRouter()
  return useMutation({
    mutationFn: async (authData: ISignUpForm) => {
      const { data, error } = await supabase.auth.signUp({
        email: authData.email,
        password: authData.password,
        options: {
          data: {
            nickname: authData.nickname,
            avatar_url: "",
          },
        },
      })

      if (error) {
        throw error
      }
      return data
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["me"] })
      router.replace("/")
    },
  })
}
