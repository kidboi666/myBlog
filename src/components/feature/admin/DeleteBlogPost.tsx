import { useQuery } from "@tanstack/react-query"
import cn from "@/src/lib/cn"
import { ChangeEvent, FormEvent, useState } from "react"
import { useDeletePost } from "@/src/services/mutate/post/useDeletePost"
import { postQuery } from "@/src/services/queries/post/postQuery"
import { Button } from "../../shared/Button"

export const DeleteBlogPost = ({ className }) => {
  const [categoryId, setCategoryId] = useState(0)
  const { data: posts } = useQuery(postQuery.queryOptions())
  const { mutate, isPending } = useDeletePost()

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    mutate(categoryId)
  }
  const handleCategoryChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setCategoryId(parseInt(e.target.value, 10))
  }

  return (
    <form onSubmit={(e) => handleSubmit(e)} className={cn(className)}>
      <select onChange={handleCategoryChange}>
        <option>포스트 선택</option>
        {posts?.map((post) => (
          <option key={post.id} value={post.id}>
            {post.title}
          </option>
        ))}
      </select>
      <Button isSubmit isLoading={isPending} className="w-full">
        포스트 삭제
      </Button>
    </form>
  )
}
