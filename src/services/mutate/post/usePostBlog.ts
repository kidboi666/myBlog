import { queryClient } from "@/src/lib/ReactQuery"
import { supabase } from "@/src/lib/supabase/client"
import { IPost } from "@/src/models/blog/post"
import { useToast } from "@/src/store/useToast"
import { useMutation } from "@tanstack/react-query"
import { useRouter } from "next/router"

export const usePostBlog = () => {
  const { setOpen } = useToast()
  const router = useRouter()

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
    onSuccess: ({ data }) => {
      queryClient.invalidateQueries({ queryKey: ["post"] })
      setOpen("success", { title: "포스팅 성공", text: "포스팅에 성공하였습니다!" })
      router.push({
        pathname: "/blog",
        query: { categoryId: data?.[0]?.parent_category_id, name: data?.[0].parent_category_name },
      })
    },
  })
}
