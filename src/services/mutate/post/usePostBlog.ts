import { queryClient } from "@/src/lib/ReactQuery"
import { supabase } from "@/src/lib/Supabase"
import { useModal } from "@/src/store/useModal"
import { useToast } from "@/src/store/useToast"
import { useMutation } from "@tanstack/react-query"

interface IPost {
  name: string
  content: string
  category: {
    id: number
    name: string
  }
  image?: string
}

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
          categoryId: params.category.id,
          categoryName: params.category.name,
          image: params.image,
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
