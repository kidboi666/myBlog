import { DeleteBlogPost } from "@/src/components/feature/admin/DeleteBlogPost"
import { DeleteCategory } from "@/src/components/feature/admin/DeleteCategory"
import { PostBlog } from "@/src/components/feature/admin/PostBlog"
import { PostCategory } from "@/src/components/feature/admin/PostCategory"
import { AppLayout } from "@/src/components/layout/AppLayout"
import { Container } from "@/src/components/layout/Container"
import { Content } from "@/src/components/layout/Content"
import { Header } from "@/src/components/layout/Header"

const Admin = () => {
  return (
    <AppLayout Header={<Header />} className="flex h-screen gap-4 overflow-scroll">
      <Container className="mt-20 items-start justify-start gap-2">
        <Content title="블로그 포스팅">
          <PostBlog className="flex flex-col gap-2" />
        </Content>
        <Content title="카테고리 추가">
          <PostCategory className="flex flex-col gap-2" />
        </Content>
        <Content title="카테고리 삭제">
          <DeleteCategory className="flex flex-col gap-2" />
        </Content>
        <Content title="포스트 삭제">
          <DeleteBlogPost className="flex flex-col gap-2" />
        </Content>
      </Container>
    </AppLayout>
  )
}

export default Admin
