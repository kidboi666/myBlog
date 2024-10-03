import { useQuery } from "@tanstack/react-query"
import { postQuery } from "@/src/services/queries/post/postQuery"
import { useDeletePost } from "@/src/services/mutate/post/useDeletePost"
import { AppLayout } from "@/src/components/layout/AppLayout"
import { Header } from "@/src/components/feature//nav/Header"
import { Footer } from "@/src/components/layout/Footer"
import { Container } from "@/src/components/layout/Container"
import { Introduce } from "@/src/components/feature/intro/Introduce"
import { PostCard } from "@/src/components/feature/post/PostCard"
import { Tables } from "../models/supabase"
import { categoryQuery } from "../services/queries/category/categoryQuery"

const Home = () => {
  const { data: postList } = useQuery(postQuery.totalPost())
  const { mutate: deletePost } = useDeletePost()
  const { data: categoryList } = useQuery(categoryQuery.parentCategory())
  return (
    <AppLayout Header={<Header />} Footer={<Footer />}>
      <Introduce />
      <Container className="mt-0">
        {postList?.map((card) => {
          const [postCategory] =
            categoryList?.filter(
              (category: Tables<"category">) => category.id === Number(card?.parent_category_id),
            ) || []
          return (
            <PostCard
              key={card.id}
              card={card}
              icon={postCategory?.icon || ""}
              onDelete={(id) => deletePost(id)}
            />
          )
        })}
      </Container>
    </AppLayout>
  )
}

export default Home
