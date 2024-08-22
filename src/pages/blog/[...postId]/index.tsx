import { useQuery } from "@tanstack/react-query"
import { useRouter } from "next/router"
import { postQuery } from "@/src/services/queries/post/postQuery"
import { AppLayout } from "@/src/components/layout/AppLayout"
import { Footer } from "@/src/components/layout/Footer"
import { Header } from "@/src/components/layout/Header"
import { Post } from "@/src/components/feature/post/Post"
import { categoryQuery } from "@/src/services/queries/category/categoryQuery"

const PostPage = () => {
  const router = useRouter()
  const { postId } = router.query
  const { data } = useQuery(postQuery.postDetail(Number(postId?.[0])))
  const post = data?.[0]
  const { data: categoryList } = useQuery(categoryQuery.parentCategory())
  const [postCategory] =
    categoryList?.filter((category) => category.id === Number(post?.parent_category_id)) || []

  if (!post) return null

  return (
    <AppLayout Header={<Header />} Footer={<Footer />}>
      <Post post={post} icon={postCategory.icon!} />
    </AppLayout>
  )
}

export default PostPage
