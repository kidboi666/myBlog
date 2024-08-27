import { queryClient } from "@/src/lib/ReactQuery"
import { supabaseAdmin } from "@/src/lib/supabase/client"
import { useMutation } from "@tanstack/react-query"

export const useAddSubCategory = () => {
  return useMutation({
    mutationFn: async (params: { subCategoryName: string; targetCategoryId: number }) => {
      return supabaseAdmin
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
