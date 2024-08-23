import { Tables } from "../models/supabase"

export const validateCategoryBeforeRender = (post: Tables<"post">) => {
  const baseCategory = `${post.parent_category_name}`
  if (post.sub_category_id) {
    return `${baseCategory} > ${post.sub_category_name} 카테고리`
  }
  return `${baseCategory} 카테고리`
}
