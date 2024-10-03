import { supabase } from "@/src/lib/supabase/client"
import { Tables } from "@/src/models/supabase"
import { queryOptions } from "@tanstack/react-query"

export const postQuery = {
  queryKey: ["post"],
  totalPost: () =>
    queryOptions<Tables<"post">[]>({
      queryKey: ["post"],
      queryFn: async () => {
        const { data } = await supabase.from("post").select()
        return data as Tables<"post">[]
      },
    }),
  categoryPost: (categoryId: number, subCategoryId?: number) =>
    queryOptions({
      queryKey: ["post", categoryId, subCategoryId ?? null],
      queryFn: async () => {
        let response
        if (subCategoryId) {
          const { data } = await supabase.from("post").select().eq("sub_category_id", subCategoryId)
          response = data
        } else {
          const { data } = await supabase.from("post").select().eq("parent_category_id", categoryId)
          response = data
        }
        return response as Tables<"post">[]
      },
    }),
  postDetail: (postId: number) =>
    queryOptions({
      queryKey: ["post", postId],
      queryFn: async () => {
        const { data } = await supabase.from("post").select().eq("id", postId).single()
        return data as Tables<"post">
      },
      enabled: !!postId,
    }),
  countPostsByCategory: (categoryId: number) =>
    queryOptions({
      queryKey: ["post_count"],
      queryFn: async () => {
        const { data } = await supabase
          .from("post")
          .select("*", { count: "exact", head: true })
          .eq("parent_category_id", categoryId)
        return data
      },
    }),
}
