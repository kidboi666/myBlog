import Image from "next/image"
import dynamic from "next/dynamic"
import { useRouter } from "next/router"
import { useQuery, useSuspenseQuery } from "@tanstack/react-query"

import { meQuery } from "@/src/services/queries/auth/meQuery"
import { useModal } from "@/src/store/useModal"
import { useDeletePost } from "@/src/services/mutate/post/useDeletePost"
import { IOption } from "@/src/models/blog/post"
import { postQuery } from "@/src/services/queries/post/postQuery"
import { formatDateToYMD } from "@/src/utils/formatDate"
import { KEBAB_CARD_OPTION } from "@/src/constants/options"
import { validateCategoryBeforeRender } from "@/src/utils/validateCategoryDepth"
import { useStateChange } from "@/src/hooks/useStateChange"
import { useClickOutside } from "@/src/hooks/useClickOutside"
import { categoryQuery } from "@/src/services/queries/category/categoryQuery"

import { Container } from "../../layout/Container"
import { Title } from "../../shared/Title"
import { Button } from "../../shared/Button"
import { KebabIcon } from "../../icon/KebabIcon"
import { DropDownList } from "../../shared/DropDown/DropDownList"
import { Text } from "../../shared/Text"
import { Line } from "../../shared/Line"
import { Tags } from "../../shared/Tags"
import { Spinner } from "../../shared/Spinner"

const Markdown = dynamic(() => import("@/src/components/shared/Markdown/Markdown"), {
  ssr: false,
  loading: () => <Spinner size={60} />,
})

interface Props {
  postId: number
}

export const Post = ({ postId }: Props) => {
  const { ref, close, onClick, onTransitionEnd } = useStateChange<HTMLUListElement>()
  const buttonRef = useClickOutside<HTMLButtonElement>(close)
  const router = useRouter()
  const { data: post } = useQuery(postQuery.postDetail(Number(postId)))
  const { data: categoryList } = useQuery(categoryQuery.parentCategory())
  const [postCategory] =
    categoryList?.filter((category) => category.id === Number(post?.parent_category_id)) || []
  const { data: admin } = useQuery(meQuery.getUserInfo())
  const isLoggedIn = admin?.id ? admin.id : null
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
      {post?.image && (
        <div className="relative h-80">
          <Image src={post.image} alt="포스트이미지" fill className="rounded-3xl object-cover" />
        </div>
      )}

      {postCategory?.icon && (
        <div className="relative mt-4 size-20">
          <Image src={postCategory!.icon!} alt="카테고리 아이콘" fill className="object-contain" />
        </div>
      )}
      <div className="relative mt-4 flex w-full justify-between">
        <Title variant="post">{post?.name}</Title>
        {isLoggedIn && (
          <>
            <Button ref={buttonRef} onClick={onClick} variant="icon" className="h-fit">
              <KebabIcon size={20} className="rotate-90" />
            </Button>
            <DropDownList
              ref={ref}
              onTransitionEnd={onTransitionEnd}
              itemList={KEBAB_CARD_OPTION}
              onClick={handleOptionClick}
              className="right-2 top-10 origin-top-right"
            />
          </>
        )}
      </div>
      <div className="mt-4 flex flex-col gap-4">
        <Text variant="description">{validateCategoryBeforeRender(post!)}</Text>
      </div>
      <div className="flex gap-12">
        <Text variant="description">{formatDateToYMD(post?.created_at)}</Text>
      </div>
      {post?.tags?.length !== 0 && (
        <div className="flex gap-2">
          <Tags tags={post?.tags || []} onClick={handleTagClick} />
        </div>
      )}
      <Line className="my-4" />
      <Text>{post && <Markdown text={post.content} />}</Text>
    </Container>
  )
}
