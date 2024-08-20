export interface IOption {
  id?: number
  name?: string
}

export interface IPost {
  name: string
  content: string
  selectedSubCategory: {
    id: number
    name: string
  }
  selectedCategory: {
    id: number
    name: string
  }
  image?: string
  tags?: string[]
}
