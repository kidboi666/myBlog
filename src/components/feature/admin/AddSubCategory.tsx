import { FormEvent, useState } from "react"
import { useQuery } from "@tanstack/react-query"
import cn from "@/src/lib/cn"

import { useAddSubCategory } from "@/src/services/mutate/category/useAddSubCategory"
import { categoryQuery } from "@/src/services/queries/category/categoryQuery"
import { Tables } from "@/src/models/supabase"
import { useInput } from "@/src/hooks/useInput"

import { Button } from "../../shared/Button"
import { DropDown } from "../../shared/DropDown"
import { TextInput } from "../../shared/TextInput"

export const AddSubCategory = ({ className }: { className: string }) => {
  const [selectedCategory, setSelectedCategory] = useState<Tables<"category">>()
  const [subCategoryName, onChangeSubCategoryName] = useInput("")
  const { data: posts } = useQuery(categoryQuery.parentCategory())
  const { mutate, isPending } = useAddSubCategory()

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (selectedCategory) {
      mutate({ subCategoryName, targetCategoryId: selectedCategory.id })
    }
  }
  const handleCategoryChange = (category: Tables<"category">) => {
    setSelectedCategory(category)
  }

  return (
    <form onSubmit={(e) => handleSubmit(e)} className={cn(className)}>
      <DropDown
        itemList={posts}
        selectedItem={selectedCategory?.name}
        listName="카테고리를 선택하세요."
        onClick={handleCategoryChange}
      />
      <TextInput
        variant="secondary"
        placeholder="추가할 카테고리 이름"
        value={subCategoryName}
        onChange={onChangeSubCategoryName}
      />
      <Button
        isSubmit
        isLoading={isPending}
        disabled={!selectedCategory || !subCategoryName}
        className="w-full"
      >
        서브 카테고리 추가
      </Button>
    </form>
  )
}
