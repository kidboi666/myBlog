import { queryClient } from "@/src/lib/ReactQuery"
import { supabaseAdmin } from "@/src/lib/supabase/client"
import { useMutation } from "@tanstack/react-query"

export const useAddCategory = () => {
  return useMutation({
    mutationFn: async (params: { name: string; icon: string }) => {
      return supabaseAdmin
        .from("category")
        .insert({ ...params })
        .select()
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["category"] })
    },
  })
}
