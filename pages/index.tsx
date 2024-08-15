import Image from "next/image"
import { ChangeEvent, useEffect, useState } from "react"
import { supabase } from "@/src/lib/Supabase"
import { v4 as uuidv4 } from "uuid"
import { formatDate, formatDateToYMD } from "@/src/utils/formatDate"
import { useInput } from "@/src/hooks/useInput"
import { Tables } from "@/src/models/supabase"
import { AppLayout } from "@/src/components/layout/AppLayout"
import { Header } from "@/src/components/layout/Header"
import { Footer } from "@/src/components/layout/Footer"
import { Title } from "@/src/components/shared/Title"
import { Text } from "@/src/components/shared/Text"
import { Container } from "@/src/components/layout/Container"
import { Introduce } from "@/src/components/feature/intro/Introduce"
import { Card } from "@/src/components/shared/Card"
import { Button } from "@/src/components/shared/Button"
import { TextInput } from "@/src/components/shared/TextInput"

const Home = () => {
  const [title, onChangeTitle] = useInput("")
  const [content, onChangeContent] = useInput("")
  const [category, onChangeCategory] = useInput("REACT")
  const [image, setImage] = useState<File | null>()
  const [preview, setPreview] = useState("")
  const [postList, setPostList] = useState<Tables<"post">[]>()
  const [me, setMe] = useState<any>(null)

  const checkLogin = async () => {
    const authInfo = supabase.auth.getSession()
    const { session } = (await authInfo).data
    setMe(session)
  }

  const getAllPost = async () => {
    const { data: cardList } = await supabase.from("post").select()
    if (!cardList) return

    setPostList(cardList)
  }

  const addPost = async () => {
    const { data } = await supabase.storage
      .from("postImage")
      .upload(`public/${category}/${uuidv4()}${image!.name}`, image!)
    const imageUrl = `${process.env.NEXT_PUBLIC_SUPABASE_IMAGE_BASE_URL!}${data?.fullPath}`
    await supabase.from("post").insert({ title, content, category, image: imageUrl }).select()
  }

  const handleChangeFile = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setPreview(URL.createObjectURL(file))
      setImage(file)
    }
  }

  useEffect(() => {
    getAllPost()
    checkLogin()
  }, [])

  return (
    <AppLayout Header={<Header />} Footer={<Footer />}>
      <Introduce />
      <Container className="mb-40">
        <div className="flex flex-col gap-4">
          {preview && <Image src={preview} alt="sdf" width={200} height={200} />}
          <input onChange={handleChangeFile} type="file" accept="image/*" />
          <TextInput name="title" value={title} onChange={onChangeTitle} className="bg-slate-300" />
          <TextInput
            name="content"
            value={content}
            onChange={onChangeContent}
            className="bg-slate-300"
          />
          <select value={category} onChange={onChangeCategory}>
            <option value="REACT">REACT</option>
            <option value="JAVASCRIPT">JAVASCRIPT</option>
            <option value="TYPESCRIPT">TYPESCRIPT</option>
            <option value="SUPABASE">SUPABASE</option>
            <option value="DB">DB</option>
          </select>
          <Button isLoading disabled={!title || !content || !image || !category} onClick={addPost}>
            데이터보내기
          </Button>
        </div>
      </Container>
      <Container
        as="article"
        className="relative grid grid-cols-1 items-start gap-14 2xl:grid-cols-2"
      >
        {postList?.map((card) => (
          <Card key={card.title} className="bg-blue-50">
            <Card.Image src={card?.image ?? ""} alt="나의 각오 이미지" className="h-52 md:w-52" />
            <Card.Content className="flex flex-1 flex-col gap-2">
              <Title>{card.title}</Title>
              <Text className="line-clamp-6 flex-1">{card.content}</Text>
              <div className="flex justify-between">
                <Text variant="description">{card.category} 카테고리</Text>
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
