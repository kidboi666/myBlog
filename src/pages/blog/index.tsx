import { useRouter } from "next/router"
import { useQuery } from "@tanstack/react-query"
import { useEffect, useState } from "react"

import { useDeletePost } from "@/src/services/mutate/post/useDeletePost"
import { postQuery } from "@/src/services/queries/post/postQuery"
import { useStrTypingEffect } from "@/src/hooks/useStrTypingEffect"
import { stringOrFirstString } from "@/src/utils/stringOrFirstString"

import { PostCard } from "@/src/components/feature/post/PostCard"
import { AppLayout } from "@/src/components/layout/AppLayout"
import { Container } from "@/src/components/layout/Container"
import { Footer } from "@/src/components/layout/Footer"
import { Header } from "@/src/components/layout/Header"
import { Underbar } from "@/src/components/feature/intro/Underbar"
import { Title } from "@/src/components/shared/Title"
import { EmptyCategory } from "@/src/components/feature/fallback/EmptyCategory"

const Blog = () => {
  const router = useRouter()
  const [text, setText] = useState("")
  const { categoryId, subCategoryId, name } = router.query
  const renderText = useStrTypingEffect(text)
  const { data: postList, isSuccess } = useQuery(
    postQuery.categoryPost(
      stringOrFirstString(Number(categoryId)),
      stringOrFirstString(Number(subCategoryId)),
    ),
  )
  const { mutate: deletePost } = useDeletePost()

  useEffect(() => {
    setText(stringOrFirstString(name))
  }, [name])

  return (
    <AppLayout Header={<Header />} Footer={<Footer />}>
      <Container as="article">
        <Title
          as="h2"
          className="absolute -top-20 text-center text-2xl text-slate-800 md:text-4xl xl:text-5xl"
        >
          <Underbar>{renderText}</Underbar>
        </Title>
        {isSuccess && postList?.length === 0 && <EmptyCategory />}
        {postList?.map((card) => (
          <PostCard key={card.id} card={card} onDelete={(id) => deletePost(id)} />
        ))}
      </Container>
    </AppLayout>
  )
}

export default Blog
