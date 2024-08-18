import { supabase } from "@/src/lib/Supabase"
import { Tables } from "@/src/models/supabase"
import { queryOptions } from "@tanstack/react-query"

export const categoryQuery = {
  queryKey: ["category"],
  parentCategory: () =>
    queryOptions<Tables<"category">[]>({
      queryKey: ["category"],
      queryFn: async () => {
        const { data } = await supabase.from("category").select()
        return data as Tables<"category">[]
      },
    }),
  subCategory: (parentCategoryId: number) =>
    queryOptions({
      queryKey: ["category", parentCategoryId],
      queryFn: async () => {
        const { data } = await supabase
          .from("sub_category")
          .select()
          .eq("parent_category_id", parentCategoryId)
        return data as Tables<"sub_category">[]
      },
    }),
}
