import { useQuery } from "@tanstack/react-query"
import { postQuery } from "@/src/services/queries/post/postQuery"
import { useDeletePost } from "@/src/services/mutate/post/useDeletePost"
import { useUpdatePost } from "@/src/services/mutate/post/useUpdatePost"
import { AppLayout } from "@/src/components/layout/AppLayout"
import { Header } from "@/src/components/layout/Header"
import { Footer } from "@/src/components/layout/Footer"
import { Container } from "@/src/components/layout/Container"
import { Introduce } from "@/src/components/feature/intro/Introduce"
import { IntroPostList } from "@/src/components/feature/post/IntroPostList"
import { Button } from "@/src/components/shared/Button"
import { useRouter } from "next/router"

const Home = () => {
  const { data: postList } = useQuery(postQuery.totalPost())
  const { mutate: deletePost } = useDeletePost()
  const router = useRouter()

  return (
    <AppLayout Header={<Header />} Footer={<Footer />}>
      <Introduce />
      <Container
        as="article"
        className="relative mb-12 mt-28 grid grid-cols-1 items-start gap-14 2xl:grid-cols-2"
      >
        <Button variant="secondary" onClick={() => router.push("/write")}>
          새 포스트 쓰기
        </Button>
        {postList?.map((card) => (
          <IntroPostList key={card.id} card={card} onDelete={(id) => deletePost(id)} />
        ))}
      </Container>
    </AppLayout>
  )
}

export default Home
