import { Introduce } from "@/src/components/feature/Introduce"
import { Card } from "@/src/components/shared/Card"
import CardImage from "@/src/assets/card_image.png"
import { AppLayout } from "@/src/components/layout/AppLayout"
import { Header } from "@/src/components/layout/Header"
import { Footer } from "@/src/components/layout/Footer"
import { Title } from "@/src/components/shared/Title"
import { Text } from "@/src/components/shared/Text"
import { Container } from "@/src/components/layout/Container"

const Home = () => {
  return (
    <AppLayout Header={<Header />} Footer={<Footer />}>
      <Introduce />
      <Container as="article" className="mb-28 gap-4 py-14">
        <Card className="w-80 bg-blue-50">
          <Card.Image src={CardImage} alt="임시" className="h-28" />
          <Card.Content className="flex flex-col gap-2">
            <Title>항상 새로운걸 배웁니다.</Title>
            <Text>
              새로운걸 배우는데 별다른 노력이 필요하지 않습니다. 원래 새로운걸 좋아합니다.
            </Text>
          </Card.Content>
        </Card>
        <Card className="w-80 bg-blue-50">
          <Card.Image src={CardImage} alt="임시" className="h-28" />
          <Card.Content className="flex flex-col gap-2">
            <Title>항상 도전합니다.</Title>
            <Text>무언가를 도전하는데 큰 두려움을 가지질 않습니다.</Text>
          </Card.Content>
        </Card>
      </Container>
    </AppLayout>
  )
}

export default Home
