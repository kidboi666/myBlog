import { queryClient } from "@/src/lib/ReactQuery"
import { supabase } from "@/src/lib/Supabase"
import { useMutation } from "@tanstack/react-query"

export const useDeletePost = () => {
  return useMutation({
    mutationFn: async (id: number) => {
      await supabase.from("post").delete().eq("id", id)
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["post"] })
    },
  })
}
