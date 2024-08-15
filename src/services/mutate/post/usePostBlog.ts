import { supabase } from "@/src/lib/Supabase"
import { useMutation } from "@tanstack/react-query"

interface IPost {
  title: string
  content: string
  category: {
    id: number
    name: string
  }
  image?: string
}

export const usePostBlog = () => {
  return useMutation({
    mutationFn: async (params: IPost) => {
      return supabase
        .from("post")
        .insert({
          title: params.title,
          content: params.content,
          categoryId: params.category.id,
          categoryName: params.category.name,
          image: params.image,
        })
        .select()
    },
  })
}
