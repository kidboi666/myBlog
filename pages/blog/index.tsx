import { useQuery } from "@tanstack/react-query"
import { useDeletePost } from "@/src/services/mutate/post/useDeletePost"
import { useUpdatePost } from "@/src/services/mutate/post/useUpdatePost"
import { useModal } from "@/src/store/useModal"

import { IntroPostList } from "@/src/components/feature/post/IntroPostList"
import { AppLayout } from "@/src/components/layout/AppLayout"
import { Container } from "@/src/components/layout/Container"
import { Footer } from "@/src/components/layout/Footer"
import { Header } from "@/src/components/layout/Header"
import { Button } from "@/src/components/shared/Button"
import { useRouter } from "next/router"
import { postQuery } from "@/src/services/queries/post/postQuery"

const Blog = () => {
  const router = useRouter()
  const { categoryId, subCategoryId } = router.query
  const { data: postList } = useQuery(
    postQuery.subCategoryPost(Number(categoryId), Number(subCategoryId)),
  )
  const { mutate: deletePost } = useDeletePost()
  const { mutate: updatePost } = useUpdatePost()
  const { setOpen } = useModal()

  return (
    <AppLayout Header={<Header />} Footer={<Footer />}>
      <Container
        as="article"
        className="relative mb-12 mt-28 grid grid-cols-1 items-start gap-14 2xl:grid-cols-2"
      >
        <Button variant="secondary" onClick={() => setOpen("newPost")}>
          새 포스트 쓰기
        </Button>
        {postList?.map((card) => (
          <IntroPostList
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

export default Blog
