import { supabase } from "@/src/lib/Supabase"
import { Tables } from "@/src/models/supabase"
import { queryOptions } from "@tanstack/react-query"

export const postQuery = {
  queryKey: ["post"],
  queryOptions: () =>
    queryOptions<Tables<"post">[]>({
      queryKey: ["post"],
      queryFn: async () => {
        const { data } = await supabase.from("post").select()
        return data as Tables<"post">[]
      },
    }),
}
