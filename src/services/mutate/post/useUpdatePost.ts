import { queryClient } from "@/src/lib/ReactQuery"
import { supabase } from "@/src/lib/supabase/client"
import { IPost } from "@/src/models/blog/post"
import { useMutation } from "@tanstack/react-query"

export const useUpdatePost = () => {
  return useMutation({
    mutationFn: async (params: { id: number; body: IPost }) => {
      await supabase
        .from("post")
        .update({
          name: params.body.name,
          content: params.body.content,
          sub_category_id: params.body.selectedSubCategory.id,
          sub_category_name: params.body.selectedSubCategory.name,
          parent_category_id: params.body.selectedCategory.id,
          parent_category_name: params.body.selectedCategory.name,
          image: params.body.image,
          tags: params.body.tags,
        })
        .eq("id", params.id)
      return params.id
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["post", data] })
      queryClient.invalidateQueries({ queryKey: ["post"] })
    },
  })
}
