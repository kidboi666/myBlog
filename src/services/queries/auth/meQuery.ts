import { supabase } from "@/src/lib/Supabase"
import { queryOptions } from "@tanstack/react-query"

export const meQuery = {
  queryKey: ["me"],
  queryOptions: () =>
    queryOptions({
      queryKey: ["me"],
      queryFn: async () => {
        const authInfo = await supabase.auth.getSession()
        const { session } = authInfo.data

        return session
      },
    }),
}
