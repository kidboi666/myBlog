import { queryClient } from "@/src/lib/ReactQuery"
import { supabase } from "@/src/lib/supabase/client"
import { IComment } from "@/src/models/blog/comment"
import { useToast } from "@/src/store/useToast"
import { useMutation } from "@tanstack/react-query"

export const useAddComment = () => {
  const { openToast } = useToast()

  return useMutation({
    mutationFn: async (params: IComment) => {
      return supabase
        .from("comment")
        .insert({
          nickname: params.nickname,
          password: params.password,
          content: params.content,
          post_id: params.postId || null,
          comment_id: params.commentId || null,
        })
        .select()
    },
    onSuccess: ({ data }) => {
      queryClient.invalidateQueries({ queryKey: ["comment", data?.[0]?.post_id] })
      openToast("success", { title: "댓글 등록", text: "댓글 등록에 성공하였습니다!" })
    },
  })
}
