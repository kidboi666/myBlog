import { queryClient } from "@/src/lib/ReactQuery"
import { supabase } from "@/src/lib/supabase/client"
import { useMutation } from "@tanstack/react-query"

export const useDeleteCategory = () => {
  return useMutation({
    mutationFn: async (id: number) => {
      return supabase.from("category").delete().eq("id", id)
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["category"] })
    },
  })
}
