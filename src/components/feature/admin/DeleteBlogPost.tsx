import { ChangeEvent, FormEvent, useState } from "react"
import { useQuery } from "@tanstack/react-query"
import cn from "@/src/lib/cn"
import { Tables } from "@/src/models/supabase"
import { useDeletePost } from "@/src/services/mutate/post/useDeletePost"
import { postQuery } from "@/src/services/queries/post/postQuery"
import { Button } from "../../shared/Button"
import { DropDown } from "../../shared/DropDown"

export const DeleteBlogPost = ({ className }: { className: string }) => {
  const [selectedPost, setSelectedPost] = useState<Tables<"post">>()
  const { data: posts } = useQuery(postQuery.queryOptions())
  const { mutate, isPending } = useDeletePost()

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (selectedPost) {
      mutate(selectedPost.id)
    }
  }
  const handleCategoryChange = (post: Tables<"post">) => {
    setSelectedPost(post)
  }

  return (
    <form onSubmit={(e) => handleSubmit(e)} className={cn(className)}>
      <DropDown
        itemList={posts}
        selectedItem={selectedPost?.name}
        listName="포스트를 선택하세요."
        onClick={handleCategoryChange}
      />
      <Button isSubmit isLoading={isPending} className="w-full">
        포스트 삭제
      </Button>
    </form>
  )
}
