export interface IOption {
  id?: number
  name?: string
}

export interface IPost {
  name: string
  content: string
  selectedSubCategory: {
    id: number | null
    name: string | null
  }
  selectedCategory: {
    id: number
    name: string
  }
  image?: string | null
  tags?: string[]
}
