import { supabase } from "@/src/lib/Supabase"
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
  parentCategoryPost: (categoryId: number) =>
    queryOptions({
      queryKey: ["post", categoryId],
      queryFn: async () => {
        const { data } = await supabase.from("post").select().eq("parent_category_id", categoryId)
        return data as Tables<"post">[]
      },
    }),
  subCategoryPost: (categoryId: number, subCategoryId: number) =>
    queryOptions({
      queryKey: ["post", categoryId, subCategoryId],
      queryFn: async () => {
        const { data } = await supabase.from("post").select().eq("sub_category_id", subCategoryId)
        return data as Tables<"post">[]
      },
    }),
  postDetail: (postId: number) =>
    queryOptions({
      queryKey: ["post", postId],
      queryFn: async () => {
        const { data } = await supabase.from("post").select().eq("id", postId)
        return data as Tables<"post">[]
      },
      enabled: !!postId,
    }),
}
