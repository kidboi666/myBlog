import { DeleteBlogPost } from "@/src/components/feature/admin/DeleteBlogPost"
import { DeleteCategory } from "@/src/components/feature/admin/DeleteCategory"
import { PostBlog } from "@/src/components/feature/admin/PostBlog"
import { PostCategory } from "@/src/components/feature/admin/PostCategory"
import { AppLayout } from "@/src/components/layout/AppLayout"
import { Container } from "@/src/components/layout/Container"
import { Content } from "@/src/components/layout/Content"
import { Footer } from "@/src/components/layout/Footer"
import { Header } from "@/src/components/layout/Header"

const Admin = () => {
  return (
    <AppLayout Header={<Header />} Footer={<Footer />}>
      <Container className="mt-20 grid grid-cols-1 items-start gap-4 xl:grid-cols-2">
        <Content title="블로그 포스팅">
          <PostBlog className="flex flex-col gap-4" />
        </Content>
        <Content title="카테고리 추가">
          <PostCategory className="flex flex-col gap-4" />
        </Content>
        <Content title="카테고리 삭제">
          <DeleteCategory className="flex flex-col gap-4" />
        </Content>
        <Content title="포스트 삭제">
          <DeleteBlogPost className="flex flex-col gap-4" />
        </Content>
      </Container>
    </AppLayout>
  )
}

export default Admin
