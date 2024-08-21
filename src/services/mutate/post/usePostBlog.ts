import { queryClient } from "@/src/lib/ReactQuery"
import { supabase } from "@/src/lib/supabase/client"
import { IPost } from "@/src/models/blog/post"
import { useModal } from "@/src/store/useModal"
import { useToast } from "@/src/store/useToast"
import { useMutation } from "@tanstack/react-query"

export const usePostBlog = () => {
  const { setOpen } = useToast()
  const { setClose } = useModal()

  return useMutation({
    mutationFn: async (params: IPost) => {
      return supabase
        .from("post")
        .insert({
          name: params.name,
          content: params.content,
          sub_category_id: params.selectedSubCategory.id,
          sub_category_name: params.selectedSubCategory.name,
          parent_category_id: params.selectedCategory.id,
          parent_category_name: params.selectedCategory.name,
          image: params.image,
          tags: params.tags,
        })
        .select()
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["post"] })
      setOpen("success", { title: "포스팅 성공", text: "포스팅에 성공하였습니다!" })
      setClose()
    },
  })
}
