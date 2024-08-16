import { ChangeEvent, FormEvent, useState } from "react"
import { useQuery } from "@tanstack/react-query"
import cn from "@/src/lib/cn"
import { categoryQuery } from "@/src/services/queries/category/categoryQuery"
import { useDeleteCategory } from "@/src/services/mutate/category/useDeleteCategory"
import { Button } from "../../shared/Button"

export const DeleteCategory = ({ className }: { className: string }) => {
  const [categoryId, setCategoryId] = useState(0)
  const { data: categories } = useQuery(categoryQuery.queryOptions())
  const { mutate, isPending } = useDeleteCategory()

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
        {categories?.map((category) => (
          <option key={category.id} value={category.id}>
            {category.name}
          </option>
        ))}
      </select>
      <Button isSubmit isLoading={isPending} className="w-full">
        카테고리 삭제
      </Button>
    </form>
  )
}
