/* eslint-disable @typescript-eslint/no-explicit-any */
import { FormEvent, useState } from "react"
import { useQuery } from "@tanstack/react-query"
import cn from "@/src/lib/cn"
import { categoryQuery } from "@/src/services/queries/category/categoryQuery"
import { useDeleteCategory } from "@/src/services/mutate/category/useDeleteCategory"
import { useDeleteSubCategory } from "@/src/services/mutate/category/useDeleteSubCategory"
import { Button } from "../../shared/Button"
import { DropDown } from "../../shared/DropDown/DropDown"

export const DeleteCategory = ({ className }: { className: string }) => {
  const [selectedCategory, setSelectedCategory] = useState({ id: 0, name: "" })
  const [selectedSubCategory, setSelectedSubCategory] = useState({ id: 0, name: "" })
  const { data: categories } = useQuery(categoryQuery.parentCategory())
  const { data: subCategories } = useQuery(categoryQuery.subCategory())
  const { mutate: deleteSubCategory, isPending: deletePending } = useDeleteSubCategory()
  const { mutate: deleteCategory, isPending: deleteSubPending } = useDeleteCategory()

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!selectedSubCategory.id) {
      deleteCategory(selectedCategory.id)
    }
    deleteSubCategory(selectedSubCategory.id)
  }
  const handleCategoryChange = (selectCategory: Record<string, any>) => {
    setSelectedCategory({ id: selectCategory.id, name: selectCategory.name })
  }
  const handleSubCategoryChange = (selectSubCategory: Record<string, any>) => {
    setSelectedSubCategory({ id: selectSubCategory.id, name: selectSubCategory.name })
  }

  return (
    <form onSubmit={(e) => handleSubmit(e)} className={cn(className)}>
      <DropDown
        onClick={handleCategoryChange}
        itemList={categories}
        selectedItem={selectedCategory.name}
        listName="카테고리를 선택하세요."
      />
      {subCategories?.[0] && (
        <DropDown
          onClick={handleSubCategoryChange}
          itemList={subCategories}
          selectedItem={selectedSubCategory.name}
          listName="카테고리를 선택하세요."
        />
      )}
      <Button isSubmit isLoading={deletePending || deleteSubPending} className="w-full">
        카테고리 삭제
      </Button>
    </form>
  )
}
