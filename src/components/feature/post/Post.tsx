import Image from "next/image"
import dynamic from "next/dynamic"
import { useRouter } from "next/router"

import { useModal } from "@/src/store/useModal"
import { useDeletePost } from "@/src/services/mutate/post/useDeletePost"
import { IOption } from "@/src/models/blog/post"
import { Tables } from "@/src/models/supabase"
import { useStatusChange } from "@/src/hooks/useStatusChange"
import { formatDateToYMD } from "@/src/utils/formatDate"
import { KEBAB_CARD_OPTION } from "@/src/constants/options"
import { validateCategoryBeforeRender } from "@/src/utils/validateCategoryDepth"

import { Container } from "../../layout/Container"
import { Title } from "../../shared/Title"
import { Button } from "../../shared/Button"
import { KebabIcon } from "../../icon/KebabIcon"
import { DropDownList } from "../../shared/DropDown/DropDownList"
import { Text } from "../../shared/Text"
import { Line } from "../../shared/Line"
import { Tags } from "../../shared/Tags"

const Markdown = dynamic(() => import("@/src/components/shared/Markdown/Markdown"), { ssr: false })

interface Props {
  post: Tables<"post">
  icon: string
}

export const Post = ({ post, icon }: Props) => {
  const [targetRef, statusRef, handleStatusChange] = useStatusChange<
    HTMLButtonElement,
    HTMLUListElement
  >()
  const router = useRouter()
  const { mutate: deletePost } = useDeletePost()
  const { openModal } = useModal()

  const handleOptionClick = (menu: IOption) => {
    if (menu.name === "삭제하기") {
      openModal("alert", {
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

  const handleTagClick = () => {
    // 태그 클릭시 해당 태그가 등록된 게시물 자동 검색
  }

  return (
    <Container variant="post">
      {post.image && (
        <div className="relative h-80">
          <Image src={post.image} alt="포스트이미지" fill className="rounded-3xl object-cover" />
        </div>
      )}

      <div className="relative mt-4 size-20">
        <Image src={icon} alt="카테고리 아이콘" fill className="object-contain" />
      </div>
      <div className="relative mt-4 flex w-full justify-between">
        <Title variant="post">{post?.name}</Title>
        <Button ref={targetRef} onClick={handleStatusChange} variant="icon" className="h-fit">
          <KebabIcon size={20} className="rotate-90" />
        </Button>
        <DropDownList
          ref={statusRef}
          itemList={KEBAB_CARD_OPTION}
          onClick={handleOptionClick}
          className="right-2 top-10"
        />
      </div>
      <div className="mt-4 flex flex-col gap-4">
        <Text variant="description">{validateCategoryBeforeRender(post)}</Text>
      </div>
      <div className="flex gap-12">
        <Text variant="description">{formatDateToYMD(post.created_at)}</Text>
      </div>
      {post?.tags?.length !== 0 && (
        <div className="flex gap-2">
          <Tags tags={post.tags || []} onClick={handleTagClick} />
        </div>
      )}
      <Line className="my-4" />
      <Text>
        <Markdown text={post?.content} />
      </Text>
    </Container>
  )
}
