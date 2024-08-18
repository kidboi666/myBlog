import { KebabIcon } from "@/src/components/icon/KebabIcon"
import { AppLayout } from "@/src/components/layout/AppLayout"
import { Container } from "@/src/components/layout/Container"
import { Footer } from "@/src/components/layout/Footer"
import { Header } from "@/src/components/layout/Header"
import { Button } from "@/src/components/shared/Button"
import { Card } from "@/src/components/shared/Card"
import { DropDownList } from "@/src/components/shared/DropDown/DropDowList"
import { Text } from "@/src/components/shared/Text"
import { Title } from "@/src/components/shared/Title"
import { useStatusChange } from "@/src/hooks/useStatusChange"
import { postQuery } from "@/src/services/queries/post/postQuery"
import { useQuery } from "@tanstack/react-query"
import { usePathname } from "next/navigation"
import { useRouter } from "next/router"

const Post = () => {
  const router = useRouter()
  const pathname = router.query
  const { data } = useQuery(postQuery.postDetail(Number(pathname)))
  const [targetRef, statusRef, handleStatusChange] = useStatusChange()
  console.log(pathname)
  return (
    <AppLayout Header={<Header />} Footer={<Footer />}>
      <Container>
        {/* <Card key={card?.id} className="bg-blue-50">
        <Card.Image src={card?.image ?? ""} alt="카드 이미지" className="h-52 md:w-52" />
        <Card.Content className="flex flex-1 flex-col gap-2">
          <div className="flex justify-between">
            <Title>{card.name}</Title>
            <Button
              variant="icon"
              ref={targetRef}
              onClick={handleStatusChange}
              className="relative text-slate-400 hover:bg-slate-300"
            >
              <KebabIcon size={20} />
            </Button>
            <DropDownList
              ref={statusRef}
              itemList={options}
              onClick={handlePostChange}
              className="right-4 top-12 w-fit"
            />
          </div>
          <Text className="line-clamp-6 flex-1">{card.content}</Text>
          <div className="flex justify-between">
            <Text variant="description">{validateCategoryBeforeRender(card)}</Text>
            <div className="flex gap-4 self-end">
              <Text variant="caption">{formatDate(card.created_at)}</Text>
              <Text variant="caption">{formatDateToYMD(card.created_at)}</Text>
            </div>
          </div>
        </Card.Content>
      </Card> */}
      </Container>
    </AppLayout>
  )
}

export default Post
