import { supabase } from "@/src/lib/supabase/client"
import { queryOptions } from "@tanstack/react-query"

export const meQuery = {
  queryKey: ["me"],
  queryOptions: () =>
    queryOptions({
      queryKey: ["me"],
      queryFn: async () => {
        const {
          data: { session },
        } = await supabase.auth.getSession()

        return session
      },
      staleTime: 0,
    }),
}
