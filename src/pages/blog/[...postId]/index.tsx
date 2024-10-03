import { dehydrate, useQuery } from "@tanstack/react-query"
import { postQuery } from "@/src/services/queries/post/postQuery"
import { AppLayout } from "@/src/components/layout/AppLayout"
import { Footer } from "@/src/components/layout/Footer"
import { Header } from "@/src/components/feature/nav/Header"
import { Post } from "@/src/components/feature/post/Post"
import { categoryQuery } from "@/src/services/queries/category/categoryQuery"
import { CommentWrapper } from "@/src/components/feature/comment/CommentWrapper"
import { CommentQuery } from "@/src/services/queries/comment/commentQuery"
import { queryClient } from "@/src/lib/ReactQuery"
import { GetServerSidePropsContext } from "next"
import { useParams } from "next/navigation"

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
  const { postId } = context.query

  await queryClient.prefetchQuery(postQuery.postDetail(Number(postId?.[0])))

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  }
}

const PostPage = () => {
  const { postId } = useParams()
  const { data: post } = useQuery(postQuery.postDetail(Number(postId?.[0])))
  const { data: categoryList } = useQuery(categoryQuery.parentCategory())
  const [postCategory] =
    categoryList?.filter((category) => category.id === Number(post?.parent_category_id)) || []
  const { data: comments } = useQuery(CommentQuery.commentForPost(Number(postId)))

  if (!post || !postCategory) return null

  return (
    <AppLayout Header={<Header />} Footer={<Footer />}>
      <Post post={post} icon={postCategory.icon!} />
      <CommentWrapper postId={post?.id} comments={comments ?? []} />
    </AppLayout>
  )
}

export default PostPage
