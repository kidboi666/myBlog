import { useEffect, useState } from "react"
import { Tables } from "../models/supabase"

interface Props {
  subCategories?: Tables<"sub_category">[]
}

export const useCategorySelector = ({ subCategories }: Props) => {
  const [selectedCategory, setSelectedCategory] = useState({ id: 0, name: "" })
  const [selectedSubCategory, setSelectedSubCategory] = useState<{
    id: number | null
    name: string | null
  }>({
    id: null,
    name: null,
  })

  const subCategoryList = subCategories?.filter(
    (category) => category.parent_category_id === selectedCategory.id,
  ) as Tables<"sub_category">[]

  const handleCategoryChange = (selectCategory: { id: number; name: string }) => {
    setSelectedCategory({ id: selectCategory.id, name: selectCategory.name })
  }
  const handleSubCategoryChange = (selectCategory: { id: number | null; name: string | null }) => {
    setSelectedSubCategory({ id: selectCategory.id, name: selectCategory.name })
  }

  useEffect(() => {
    setSelectedSubCategory({ id: null, name: null })
  }, [selectedCategory])

  return {
    selectedCategory,
    selectedSubCategory,
    handleCategoryChange,
    handleSubCategoryChange,
    subCategoryList,
  }
}
