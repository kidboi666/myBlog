import { queryClient } from "@/src/lib/ReactQuery"
import { supabase } from "@/src/lib/Supabase"
import { Tables } from "@/src/models/supabase"
import { useMutation } from "@tanstack/react-query"

export const useUpdatePost = () => {
  return useMutation({
    mutationFn: async (params: { id: number; body: Tables<"post"> }) => {
      await supabase
        .from("post")
        .update({ ...params.body })
        .eq("id", params.id)
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["post"] })
    },
  })
}
