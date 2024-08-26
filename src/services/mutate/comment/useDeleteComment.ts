import { queryClient } from "@/src/lib/ReactQuery"
import { supabase } from "@/src/lib/supabase/client"
import { useModal } from "@/src/store/useModal"
import { useToast } from "@/src/store/useToast"
import { useMutation } from "@tanstack/react-query"

export const useDeleteComment = () => {
  const { openToast } = useToast()
  const { closeModal } = useModal()

  return useMutation({
    mutationFn: async (params: { commentId: number; postId: number }) => {
      await supabase.from("comment").delete().eq("id", params.commentId)
      return { postId: params.postId }
    },
    onSuccess: ({ postId }) => {
      queryClient.invalidateQueries({ queryKey: ["comment", postId] })
      openToast("success", { title: "댓글 삭제", text: "댓글 삭제에 성공하였습니다!" })
      closeModal()
    },
  })
}
