import { useRouter } from "next/router"
import { useQuery } from "@tanstack/react-query"

import { useDeletePost } from "@/src/services/mutate/post/useDeletePost"
import { postQuery } from "@/src/services/queries/post/postQuery"

import { PostCard } from "@/src/components/feature/post/PostCard"
import { AppLayout } from "@/src/components/layout/AppLayout"
import { Container } from "@/src/components/layout/Container"
import { Footer } from "@/src/components/layout/Footer"
import { Header } from "@/src/components/layout/Header"

const Blog = () => {
  const router = useRouter()
  const { categoryId, subCategoryId } = router.query
  const { data: postList } = useQuery(
    postQuery.subCategoryPost(Number(categoryId), Number(subCategoryId)),
  )
  const { mutate: deletePost } = useDeletePost()

  return (
    <AppLayout Header={<Header />} Footer={<Footer />}>
      <Container
        as="article"
        className="relative mb-12 mt-28 grid grid-cols-1 items-start gap-14 2xl:grid-cols-2"
      >
        {postList?.map((card) => (
          <PostCard key={card.id} card={card} onDelete={(id) => deletePost(id)} />
        ))}
      </Container>
    </AppLayout>
  )
}

export default Blog
