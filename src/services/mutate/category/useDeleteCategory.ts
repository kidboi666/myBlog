import { queryClient } from "@/src/lib/ReactQuery"
import { supabaseAdmin } from "@/src/lib/supabase/client"
import { useMutation } from "@tanstack/react-query"

export const useDeleteCategory = () => {
  return useMutation({
    mutationFn: async (id: number) => {
      return supabaseAdmin.from("category").delete().eq("id", id)
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["category"] })
    },
  })
}
