import { ChangeEvent, FormEvent, useState } from "react"
import { useQuery } from "@tanstack/react-query"
import cn from "@/src/lib/cn"
import { categoryQuery } from "@/src/services/queries/category/categoryQuery"
import { useDeleteCategory } from "@/src/services/mutate/category/useDeleteCategory"
import { Button } from "../../shared/Button"
import { DropDown } from "../../shared/DropDown/DropDown"

export const DeleteCategory = ({ className }: { className: string }) => {
  const [selectedCategory, setSelectedCategory] = useState({ id: 0, name: "" })
  const { data: categories } = useQuery(categoryQuery.queryOptions())
  const { mutate, isPending } = useDeleteCategory()

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    mutate(selectedCategory.id)
  }
  const handleCategoryChange = (selectCategory: Record<string, any>) => {
    setSelectedCategory({ id: selectCategory.id, name: selectCategory.name })
  }

  return (
    <form onSubmit={(e) => handleSubmit(e)} className={cn(className)}>
      <DropDown
        onClick={handleCategoryChange}
        itemList={categories}
        selectedItem={selectedCategory.name}
        listName="카테고리를 선택하세요."
      />
      <Button isSubmit isLoading={isPending} className="w-full">
        카테고리 삭제
      </Button>
    </form>
  )
}
