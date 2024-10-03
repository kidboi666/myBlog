import { useQuery } from "@tanstack/react-query"
import { AppLayout } from "@/src/components/layout/AppLayout"
import { Footer } from "@/src/components/layout/Footer"
import { Header } from "@/src/components/feature/nav/Header"
import { Post } from "@/src/components/feature/post/Post"
import { Comment } from "@/src/components/feature/comment/Comment"
import { CommentQuery } from "@/src/services/queries/comment/commentQuery"
import { useRouter } from "next/router"

const PostPage = () => {
  const router = useRouter()
  const postId = Array.isArray(router.query.postId) ? router.query.postId[0] : router.query.postId
  const { data: comments } = useQuery(CommentQuery.commentForPost(Number(postId)))

  return (
    <AppLayout Header={<Header />} Footer={<Footer />}>
      <Post postId={Number(postId)} />
      <Comment postId={Number(postId)} comments={comments ?? []} />
    </AppLayout>
  )
}

export default PostPage
