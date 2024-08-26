import { supabase } from "@/src/lib/supabase/client"
import { queryOptions } from "@tanstack/react-query"

export const CommentQuery = {
  queryKey: ["comment"],
  commentForPost: (postId: number) =>
    queryOptions({
      queryKey: ["comment", postId],
      queryFn: async () => {
        const { data } = await supabase.from("comment").select().eq("post_id", postId)

        return data
      },
      enabled: !!postId,
    }),
  commentForComment: (postId: number | null, commentId: number) =>
    queryOptions({
      queryKey: ["comment", postId, commentId],
      queryFn: async () => {
        const { data } = await supabase.from("comment").select().eq("comment_id", commentId)

        return data
      },
      enabled: !!commentId,
    }),
  countForComment: (postId: number) =>
    queryOptions({
      queryKey: ["comment_count", postId],
      queryFn: async () => {
        const { data } = await supabase
          .from("comment")
          .select("*", { count: "exact", head: true })
          .eq("post_id", postId)

        return data
      },
    }),
}
