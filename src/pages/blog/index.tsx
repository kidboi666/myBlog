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
import { Header } from "@/src/components/feature/nav/Header"
import { Underbar } from "@/src/components/feature/intro/Underbar"
import { Title } from "@/src/components/shared/Title"
import { EmptyCategory } from "@/src/components/feature/fallback/EmptyCategory"
import { queryClient } from "@/src/lib/ReactQuery"
import { Tables } from "@/src/models/supabase"

const BlogPage = () => {
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
  const categoryList = queryClient.getQueryData<Tables<"category">[]>(["category"])
  const categoryIcon = categoryList?.filter((category) => category.id === Number(categoryId))

  useEffect(() => {
    setText(stringOrFirstString(name))
  }, [name])

  return (
    <AppLayout Header={<Header />} Footer={<Footer />}>
      <Container variant="main" as="article">
        <Title
          as="h2"
          className="absolute -top-20 ml-4 text-4xl text-slate-800 md:ml-12 xl:text-5xl"
        >
          <Underbar>{renderText}</Underbar>
        </Title>
        {isSuccess && postList?.length === 0 && <EmptyCategory />}
        {postList?.map((card) => (
          <PostCard
            key={card.id}
            card={card}
            icon={categoryIcon?.[0].icon ?? ""}
            onDelete={(id) => deletePost(id)}
          />
        ))}
      </Container>
    </AppLayout>
  )
}

export default BlogPage
