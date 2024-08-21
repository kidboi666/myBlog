import { useQuery } from "@tanstack/react-query"
import Image from "next/image"
import { useRouter } from "next/router"
import dynamic from "next/dynamic"

import { KEBAB_CARD_OPTION } from "@/src/constants/options"
import { useStatusChange } from "@/src/hooks/useStatusChange"
import { IOption } from "@/src/models/blog/post"
import { useDeletePost } from "@/src/services/mutate/post/useDeletePost"
import { postQuery } from "@/src/services/queries/post/postQuery"
import { useModal } from "@/src/store/useModal"
import { formatDate, formatDateToYMD } from "@/src/utils/formatDate"

import { KebabIcon } from "@/src/components/icon/KebabIcon"
import { AppLayout } from "@/src/components/layout/AppLayout"
import { Container } from "@/src/components/layout/Container"
import { Footer } from "@/src/components/layout/Footer"
import { Header } from "@/src/components/layout/Header"
import { Button } from "@/src/components/shared/Button"
import { DropDownList } from "@/src/components/shared/DropDown/DropDowList"
import { Text } from "@/src/components/shared/Text"
import { Title } from "@/src/components/shared/Title"
import { Line } from "@/src/components/shared/Line"
import { Tag } from "@/src/components/shared/Tag"

const Markdown = dynamic(() => import("@/src/components/shared/Markdown/Markdown"), { ssr: false })

const Post = () => {
  const [targetRef, statusRef, handleStatusChange] = useStatusChange<
    HTMLButtonElement,
    HTMLUListElement
  >()
  const router = useRouter()
  const { postId } = router.query
  const { data } = useQuery(postQuery.postDetail(Number(postId?.[0])))
  const post = data?.[0]
  const { mutate: deletePost } = useDeletePost()
  const { setOpen } = useModal()

  const handleOptionClick = (menu: IOption) => {
    if (menu.name === "삭제하기") {
      setOpen("alert", {
        title: "포스팅 삭제",
        text: "정말 해당 포스팅을 삭제하시겠습니까?",
        yes: "삭제하기",
        no: "취소",
        onClick: () => deletePost(post!.id),
      })
    }
    if (menu.name === "수정하기") {
      router.push({ pathname: "/write", query: { postId: post?.id } })
    }
  }

  if (!post) return null

  return (
    <AppLayout Header={<Header />} Footer={<Footer />}>
      <Container variant="post">
        {post.image && (
          <div className="relative h-80 w-full">
            <Image src={post.image} alt="포스트이미지" fill className="rounded-3xl object-cover" />
          </div>
        )}
        <div className="relative mt-12 flex w-full justify-between">
          <Title className="text-6xl text-slate-600">{post?.name}</Title>
          <Button ref={targetRef} variant="icon">
            <KebabIcon size={20} className="rotate-90" />
          </Button>
          <DropDownList
            ref={statusRef}
            itemList={KEBAB_CARD_OPTION}
            onClick={handleOptionClick}
            className="right-2 top-10"
          />
        </div>
        <div className="flex gap-2">
          {post.tags?.map((tag, idx) => <Tag key={`${tag + idx}`} tag={tag} />)}
        </div>
        <div className="mt-4">
          <Text variant="description">
            {post?.parent_category_name}&nbsp;
            <Text as="span" className="text-sm">
              {" "}
              ➡️{" "}
            </Text>
            &nbsp;
            {post?.sub_category_name} 카테고리
          </Text>
        </div>
        <div className="flex gap-12">
          <Text variant="description">{formatDateToYMD(post.created_at)}</Text>
          <Text variant="description">{formatDate(post.created_at)}</Text>
        </div>
        <Line />
        <div className="mt-4">
          <Text>
            <Markdown text={post?.content} />
          </Text>
        </div>
      </Container>
    </AppLayout>
  )
}

export default Post
