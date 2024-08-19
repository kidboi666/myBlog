import { useState } from "react"
import { Tables } from "../models/supabase"

interface Props {
  subCategories?: Tables<"sub_category">[]
}

export const useCategorySelector = ({ subCategories }: Props) => {
  const [selectedCategory, setSelectedCategory] = useState({ id: 0, name: "" })
  const [selectedSubCategory, setSelectedSubCategory] = useState({
    id: 0,
    name: "",
  })

  const subCategoryList = subCategories?.filter(
    (category) => category.parent_category_id === selectedCategory.id,
  ) as Tables<"sub_category">[]

  const handleCategoryChange = (selectCategory: { id: number; name: string }) => {
    setSelectedCategory({ id: selectCategory.id, name: selectCategory.name })
  }
  const handleSubCategoryChange = (selectCategory: { id: number; name: string }) => {
    setSelectedSubCategory({ id: selectCategory.id, name: selectCategory.name })
  }

  return {
    selectedCategory,
    selectedSubCategory,
    handleCategoryChange,
    handleSubCategoryChange,
    subCategoryList,
  }
}
