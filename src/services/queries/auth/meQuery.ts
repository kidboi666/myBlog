import { supabase } from "@/src/lib/supabase/client"
import { UserMetadata } from "@supabase/supabase-js"
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
          userInfo = session.user.user_metadata as UserMetadata
          id = session.user.id as string
        }

        return { userInfo, id }
      },
    }),
}
