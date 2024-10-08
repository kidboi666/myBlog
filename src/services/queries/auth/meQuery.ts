import { supabase } from "@/src/lib/supabase/client"
import { queryOptions } from "@tanstack/react-query"

export const meQuery = {
  getUserInfo: () =>
    queryOptions({
      queryKey: ["me_info"],
      queryFn: async () => {
        let userInfo
        let id

        const {
          data: { session },
        } = await supabase.auth.getSession()

        if (session) {
          userInfo = session.user.user_metadata
          id = session.user.id
        }

        return { userInfo, id }
      },
    }),
}
