import { formatDate, formatDateToYMD } from "@/src/utils/formatDate"
import { AppLayout } from "@/src/components/layout/AppLayout"
import { Header } from "@/src/components/layout/Header"
import { Footer } from "@/src/components/layout/Footer"
import { Title } from "@/src/components/shared/Title"
import { Text } from "@/src/components/shared/Text"
import { Container } from "@/src/components/layout/Container"
import { Introduce } from "@/src/components/feature/intro/Introduce"
import { Card } from "@/src/components/shared/Card"
import { useQuery } from "@tanstack/react-query"
import { postQuery } from "@/src/services/queries/post/postQuery"

const Home = () => {
  const { data: postList } = useQuery(postQuery.queryOptions())

  return (
    <AppLayout Header={<Header />} Footer={<Footer />}>
      <Introduce />
      <Container
        as="article"
        className="relative grid grid-cols-1 items-start gap-14 2xl:grid-cols-2"
      >
        {postList?.map((card) => (
          <Card key={card?.id} className="bg-blue-50">
            <Card.Image src={card?.image ?? ""} alt="나의 각오 이미지" className="h-52 md:w-52" />
            <Card.Content className="flex flex-1 flex-col gap-2">
              <Title>{card.title}</Title>
              <Text className="line-clamp-6 flex-1">{card.content}</Text>
              <div className="flex justify-between">
                <Text variant="description">{card.categoryName} 카테고리</Text>
                <div className="flex gap-4 self-end">
                  <Text variant="caption">{formatDate(card.createdAt)}</Text>
                  <Text variant="caption">{formatDateToYMD(card.createdAt)}</Text>
                </div>
              </div>
            </Card.Content>
          </Card>
        ))}
      </Container>
    </AppLayout>
  )
}

export default Home
