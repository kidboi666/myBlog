import { useQuery } from "@tanstack/react-query"
import { postQuery } from "@/src/services/queries/post/postQuery"
import { AppLayout } from "@/src/components/layout/AppLayout"
import { Header } from "@/src/components/layout/Header"
import { Footer } from "@/src/components/layout/Footer"
import { Container } from "@/src/components/layout/Container"
import { Introduce } from "@/src/components/feature/intro/Introduce"
import { IntroPostCard } from "@/src/components/feature/post/IntroPostCard"
import { useDeletePost } from "@/src/services/mutate/post/useDeletePost"
import { useUpdatePost } from "@/src/services/mutate/post/useUpdatePost"

const Home = () => {
  const { data: postList } = useQuery(postQuery.queryOptions())
  const { mutate: deletePost } = useDeletePost()
  const { mutate: updatePost } = useUpdatePost()

  return (
    <AppLayout Header={<Header />} Footer={<Footer />}>
      <Introduce />
      <Container
        as="article"
        className="relative grid grid-cols-1 items-start gap-14 2xl:grid-cols-2"
      >
        {postList?.map((card) => (
          <IntroPostCard
            key={card.id}
            card={card}
            onDelete={(id) => deletePost(id)}
            onUpdate={(params) => updatePost(params)}
          />
        ))}
      </Container>
    </AppLayout>
  )
}

export default Home
