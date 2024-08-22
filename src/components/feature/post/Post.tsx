import Image from "next/image"
import dynamic from "next/dynamic"
import { useRouter } from "next/router"
import { useModal } from "@/src/store/useModal"
import { useDeletePost } from "@/src/services/mutate/post/useDeletePost"
import { IOption } from "@/src/models/blog/post"
import { Tables } from "@/src/models/supabase"
import { useStatusChange } from "@/src/hooks/useStatusChange"
import { formatDate, formatDateToYMD } from "@/src/utils/formatDate"
import { KEBAB_CARD_OPTION } from "@/src/constants/options"
import { Container } from "../../layout/Container"
import { Title } from "../../shared/Title"
import { Button } from "../../shared/Button"
import { KebabIcon } from "../../icon/KebabIcon"
import { DropDownList } from "../../shared/DropDown/DropDownList"
import { Text } from "../../shared/Text"
import { Line } from "../../shared/Line"
import { Tag } from "../../shared/Tag"

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

  return (
    <Container variant="post">
      {post.image ? (
        <div className="relative h-80">
          <Image src={post.image} alt="포스트이미지" fill className="rounded-3xl object-cover" />
        </div>
      ) : (
        <div className="relative size-20">
          <Image src={icon} alt="포스트이미지" fill className="rounded-3xl object-contain" />
        </div>
      )}
      <div className="relative mt-12 flex w-full justify-between">
        <Title variant="post">{post?.name}</Title>
        <Button ref={targetRef} onClick={handleStatusChange} variant="icon">
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
          <Text as="span" variant="description">
            {" > "}
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
  )
}
