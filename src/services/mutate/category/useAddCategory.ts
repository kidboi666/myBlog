import { queryClient } from "@/src/lib/ReactQuery"
import { supabase } from "@/src/lib/Supabase"
import { useMutation } from "@tanstack/react-query"

export const useAddCategory = () => {
  return useMutation({
    mutationFn: async (name: string) => {
      return supabase.from("category").insert({ name }).select()
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["category"] })
    },
  })
}
