import { queryClient } from "@/src/lib/ReactQuery"
import { supabase } from "@/src/lib/Supabase"
import { useMutation } from "@tanstack/react-query"

export const useDeleteSubCategory = () => {
  return useMutation({
    mutationFn: async (id: number) => {
      return supabase.from("sub_category").delete().eq("id", id)
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["sub_category"] })
    },
  })
}
