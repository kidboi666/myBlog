export interface Post {
  category: Category
  content: string
  createdAt: string
  id: number
  image?: string
  title: string
}

export type Category = "REACT" | "JAVASCRIPT" | "TYPESCRIPT" | "SUPABASE" | "DB"
