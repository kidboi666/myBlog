import { queryClient } from "@/src/lib/ReactQuery"
import { supabase } from "@/src/lib/supabase/client"
import { useMutation } from "@tanstack/react-query"

export const useAddCategory = () => {
  return useMutation({
    mutationFn: async (params: { name: string; icon: string }) => {
      return supabase
        .from("category")
        .insert({ ...params })
        .select()
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["category"] })
    },
  })
}
