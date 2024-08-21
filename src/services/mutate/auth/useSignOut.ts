import { queryClient } from "@/src/lib/ReactQuery"
import { supabase } from "@/src/lib/supabase/client"
import { useMutation } from "@tanstack/react-query"
import { useRouter } from "next/router"

export const useSignOut = () => {
  const router = useRouter()
  return useMutation({
    mutationFn: async () => {
      // eslint-disable-next-line no-alert
      await supabase.auth.signOut()
      queryClient.removeQueries({ queryKey: ["me"] })
      alert("로그아웃 하였습니다.")
      router.reload()
    },
  })
}
