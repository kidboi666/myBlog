import { supabase } from "@/src/lib/Supabase"
import { Tables } from "@/src/models/supabase"
import { queryOptions } from "@tanstack/react-query"

export const categoryQuery = {
  queryKey: ["category"],
  queryOptions: () =>
    queryOptions<Tables<"category">[]>({
      queryKey: ["category"],
      queryFn: async () => {
        const { data } = await supabase.from("category").select()
        return data as Tables<"category">[]
      },
    }),
}
