import { AppLayout } from "@/src/components/layout/AppLayout"
import { Container } from "@/src/components/layout/Container"
import { Footer } from "@/src/components/layout/Footer"
import { Header } from "@/src/components/layout/Header"
import { Card } from "@/src/components/shared/Card"

import { Text } from "@/src/components/shared/Text"
import { Title } from "@/src/components/shared/Title"
import { useStatusChange } from "@/src/hooks/useStatusChange"
import { Tables } from "@/src/models/supabase"
import { postQuery } from "@/src/services/queries/post/postQuery"
import { formatDate, formatDateToYMD } from "@/src/utils/formatDate"
import { useQuery } from "@tanstack/react-query"
import { useRouter } from "next/router"

const Post = () => {
  const router = useRouter()
  const pathname = router.query
  const { data: post } = useQuery(postQuery.postDetail(Number(pathname)))
  const [targetRef, statusRef, handleStatusChange] = useStatusChange()
  console.log(post)

  const validateCategoryBeforeRender = (post: Tables<"post">) => {
    const baseCategory = `${post?.parent_category_name}`
    if (post?.sub_category_id) {
      return `${baseCategory} > ${post?.sub_category_name} 카테고리`
    }
    return `${baseCategory} 카테고리`
  }

  return (
    <AppLayout Header={<Header />} Footer={<Footer />}>
      <Container>
        <Card key={post?.id} className="bg-blue-50">
          <Card.Image src={post?.image ?? ""} alt="카드 이미지" className="h-52 md:w-52" />
          <Card.Content className="flex flex-1 flex-col gap-2">
            <div className="flex justify-between">
              <Title>{post?.name}</Title>
              {/* <Button
                variant="icon"
                ref={targetRef}
                onClick={handleStatusChange}
                className="relative text-slate-400 hover:bg-slate-300"
              >
                <KebabIcon size={20} />
              </Button> */}
              {/* <DropDownList
                ref={statusRef}
                itemList={options}
                onClick={handlePostChange}
                className="right-4 top-12 w-fit"
              /> */}
            </div>
            <Text className="line-clamp-6 flex-1">{post?.content}</Text>
            <div className="flex justify-between">
              <Text variant="description">{validateCategoryBeforeRender(post)}</Text>
              <div className="flex gap-4 self-end">
                <Text variant="caption">{formatDate(post?.created_at)}</Text>
                <Text variant="caption">{formatDateToYMD(post?.created_at)}</Text>
              </div>
            </div>
          </Card.Content>
        </Card>
      </Container>
    </AppLayout>
  )
}

export default Post
