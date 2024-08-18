import { queryClient } from "@/src/lib/ReactQuery"
import { supabase } from "@/src/lib/Supabase"
import { useMutation } from "@tanstack/react-query"

export const useAddSubCategory = () => {
  return useMutation({
    mutationFn: async (params: { subCategoryName: string; targetCategoryId: number }) => {
      return supabase
        .from("sub_category")
        .insert({
          name: params.subCategoryName,
          parent_category_id: params.targetCategoryId,
        })
        .select()
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["sub_category"] })
    },
  })
}
