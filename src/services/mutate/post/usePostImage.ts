import { supabase } from "@/src/lib/supabase/client"
import { useMutation } from "@tanstack/react-query"
import { v4 as uuidv4 } from "uuid"

interface IPost {
  category: number
  image?: File | null
}

export const usePostImage = () => {
  return useMutation({
    mutationFn: async (params: IPost) => {
      const { data } = await supabase.storage
        .from("postImage")
        .upload(`public/${params.category}/${uuidv4()}${params.image!.name}`, params.image!)

      return `${process.env.NEXT_PUBLIC_SUPABASE_IMAGE_BASE_URL!}${data?.fullPath}`
    },
  })
}
