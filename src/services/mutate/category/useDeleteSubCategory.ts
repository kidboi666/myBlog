import { queryClient } from "@/src/lib/ReactQuery"
import { supabaseAdmin } from "@/src/lib/supabase/client"
import { useMutation } from "@tanstack/react-query"

export const useDeleteSubCategory = () => {
  return useMutation({
    mutationFn: async (id: number) => {
      return supabaseAdmin.from("sub_category").delete().eq("id", id)
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["sub_category"] })
    },
  })
}
