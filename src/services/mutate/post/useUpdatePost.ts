import { queryClient } from "@/src/lib/ReactQuery"
import { supabase } from "@/src/lib/supabase/client"
import { IPost } from "@/src/models/blog/post"
import { useToast } from "@/src/store/useToast"
import { useMutation } from "@tanstack/react-query"
import { useRouter } from "next/router"

export const useUpdatePost = () => {
  const { setOpen } = useToast()
  const router = useRouter()
  return useMutation({
    mutationFn: async (params: { id: number; body: IPost }) => {
      const { data } = await supabase
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
        .select()
      return data
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["post", data] })
      queryClient.invalidateQueries({ queryKey: ["post"] })
      setOpen("success", { title: "포스팅 성공", text: "포스팅에 성공하였습니다!" })
      router.push({
        pathname: "/blog",
        query: { categoryId: data?.[0]?.parent_category_id, name: data?.[0].parent_category_name },
      })
    },
  })
}
