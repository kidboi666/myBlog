import { AddSubCategory } from "@/src/components/feature/admin/AddSubCategory"
import { DeleteBlogPost } from "@/src/components/feature/admin/DeleteBlogPost"
import { DeleteCategory } from "@/src/components/feature/admin/DeleteCategory"
import { PostBlog } from "@/src/components/feature/admin/PostBlog"
import { PostCategory } from "@/src/components/feature/admin/PostCategory"
import { Toast } from "@/src/components/feature/admin/Toast"
import { AppLayout } from "@/src/components/layout/AppLayout"
import { Container } from "@/src/components/layout/Container"
import { Content } from "@/src/components/layout/Content"
import { Footer } from "@/src/components/layout/Footer"
import { Header } from "@/src/components/feature/nav/Header"

const Admin = () => {
  return (
    <AppLayout Header={<Header />} Footer={<Footer />}>
      <Container className="mb-12 mt-28 grid grid-cols-1 items-start gap-12 xl:grid-cols-2">
        <Content title="토스트띄우기" className="flex flex-col">
          <Toast />
        </Content>
        <Content title="블로그 포스팅">
          <PostBlog className="flex flex-col gap-4" />
        </Content>
        <Content title="포스트 삭제">
          <DeleteBlogPost className="flex flex-col gap-4" />
        </Content>
        <Content title="카테고리 추가">
          <PostCategory className="flex flex-col gap-4" />
        </Content>
        <Content title="서브 카테고리 추가">
          <AddSubCategory className="flex flex-col gap-4" />
        </Content>
        <Content title="카테고리 삭제">
          <DeleteCategory className="flex flex-col gap-4" />
        </Content>
        <Content title="카테고리 아이콘 추가">
          <PostCategory className="flex flex-col gap-4" />
        </Content>
      </Container>
    </AppLayout>
  )
}

export default Admin
