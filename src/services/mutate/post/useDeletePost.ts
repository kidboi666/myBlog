import { queryClient } from "@/src/lib/ReactQuery"
import { supabase } from "@/src/lib/supabase/client"
import { useModal } from "@/src/store/useModal"
import { useToast } from "@/src/store/useToast"
import { useMutation } from "@tanstack/react-query"

export const useDeletePost = () => {
  const { openToast } = useToast()
  const { closeModal } = useModal()

  return useMutation({
    mutationFn: async (id: number) => {
      await supabase.from("post").delete().eq("id", id)
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["post"] })
      openToast("success", { title: "포스팅 삭제", text: "포스팅 삭제에 성공하였습니다!" })
      closeModal()
    },
  })
}
