import { queryClient } from "@/src/lib/ReactQuery"
import { supabaseAdmin } from "@/src/lib/supabase/client"
import { useModal } from "@/src/store/useModal"
import { useToast } from "@/src/store/useToast"
import { useMutation } from "@tanstack/react-query"
import { useRouter } from "next/router"

export const useDeletePost = () => {
  const { openToast } = useToast()
  const { closeModal } = useModal()
  const router = useRouter()

  return useMutation({
    mutationFn: async (id: number) => {
      await supabaseAdmin.from("post").delete().eq("id", id)
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["post"] })
      openToast("success", { title: "포스팅 삭제", text: "포스팅 삭제에 성공하였습니다!" })
      closeModal()
      router.back()
    },
  })
}
