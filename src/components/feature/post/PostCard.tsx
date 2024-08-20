/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRouter } from "next/router"
import { Tables } from "@/src/models/supabase"
import { MouseEvent } from "react"

import { useModal } from "@/src/store/useModal"
import { formatDate, formatDateToYMD } from "@/src/utils/formatDate"
import { IOption } from "@/src/models/blog/post"
import { useStatusChange } from "@/src/hooks/useStatusChange"
import { KEBAB_CARD_OPTION } from "@/src/constants/options"

import { KebabIcon } from "../../icon/KebabIcon"
import { Button } from "../../shared/Button"
import { Card } from "../../shared/Card"
import { Text } from "../../shared/Text"
import { Title } from "../../shared/Title"
import { DropDownList } from "../../shared/DropDown/DropDowList"

interface Props {
  card: Tables<"post">
  onDelete: (id: number) => void
}

export const PostCard = ({ card, onDelete }: Props) => {
  const { setOpen } = useModal()
  const router = useRouter()
  const [targetRef, statusRef, handleStatusChange] = useStatusChange<
    HTMLButtonElement,
    HTMLUListElement
  >()

  const validateCategoryBeforeRender = (post: Tables<"post">) => {
    const baseCategory = `${post.parent_category_name}`
    if (post.sub_category_id) {
      return `${baseCategory} > ${post.sub_category_name} 카테고리`
    }
    return `${baseCategory} 카테고리`
  }

  const handleOptionClick = (menu: IOption) => {
    if (menu.name === "삭제하기") {
      setOpen("alert", {
        title: "포스팅 삭제",
        text: "정말 해당 포스팅을 삭제하시겠습니까?",
        yes: "삭제하기",
        no: "취소",
        onClick: () => onDelete(card.id),
      })
    }
    if (menu.name === "수정하기") {
      router.push({ pathname: "/write", query: { postId: card.id } })
    }
  }

  const handleKebabMenuClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation()
    handleStatusChange(e)
  }

  return (
    <Card key={card?.id} className="bg-blue-50" onClick={() => router.push(`/blog/${card.id}`)}>
      <Card.Image src={card?.image ?? ""} alt="카드 이미지" className="h-52 md:w-52" />
      <Card.Content className="flex flex-1 flex-col gap-2">
        <div className="flex justify-between">
          <Title>{card.name}</Title>
          <Button
            variant="icon"
            ref={targetRef}
            onClick={handleKebabMenuClick}
            className="relative text-slate-400 hover:bg-slate-300"
          >
            <KebabIcon size={20} />
            <DropDownList
              ref={statusRef}
              itemList={KEBAB_CARD_OPTION}
              onClick={handleOptionClick}
              className="right-0 top-5"
            />
          </Button>
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
    </Card>
  )
}
