import { supabase } from "@/src/lib/supabase/client"
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
  subCategory: () =>
    queryOptions<Tables<"sub_category">[]>({
      queryKey: ["sub_category"],
      queryFn: async () => {
        const { data } = await supabase.from("sub_category").select()
        return data as Tables<"sub_category">[]
      },
    }),
}
