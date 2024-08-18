import { supabase } from "@/src/lib/Supabase"
import { Tables } from "@/src/models/supabase"
import { queryOptions } from "@tanstack/react-query"

export const subCategoryQuery = {
  queryKey: ["sub_category"],
  queryOptions: (parentCategoryId?: number) =>
    queryOptions<Tables<"sub_category">[]>({
      queryKey: ["sub_category"],
      queryFn: async () => {
        const { data } = await supabase.from("sub_category").select("*")
        // .eq("parent_category_id", parentCategoryId)
        return data as Tables<"sub_category">[]
      },
      staleTime: Infinity,
    }),
}
