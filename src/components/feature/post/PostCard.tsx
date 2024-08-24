/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRouter } from "next/router"
import { Tables } from "@/src/models/supabase"
import { MouseEvent } from "react"
import cn from "@/src/lib/cn"

import { useModal } from "@/src/store/useModal"
import { formatDate, formatDateToYMD } from "@/src/utils/formatDate"
import { IOption } from "@/src/models/blog/post"
import { useStatusChange } from "@/src/hooks/useStatusChange"
import { KEBAB_CARD_OPTION } from "@/src/constants/options"
import { validateCategoryBeforeRender } from "@/src/utils/validateCategoryDepth"
import { useToast } from "@/src/store/useToast"

import { KebabIcon } from "../../icon/KebabIcon"
import { Button } from "../../shared/Button"
import { Text } from "../../shared/Text"
import { Title } from "../../shared/Title"
import { DropDownList } from "../../shared/DropDown/DropDownList"
import { Tags } from "../../shared/Tags"
import { Card } from "../../layout/Card"

interface Props {
  card: Tables<"post">
  icon: string
  onDelete: (id: number) => void
}

export const PostCard = ({ card, icon, onDelete }: Props) => {
  const { openModal } = useModal()
  const { openToast } = useToast()
  const router = useRouter()
  const [targetRef, statusRef, handleStatusChange] = useStatusChange<
    HTMLButtonElement,
    HTMLUListElement
  >()

  const handleOptionClick = (menu: IOption) => {
    if (menu.name === "삭제하기") {
      openModal("alert", {
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

  const handleTagClick = (e: MouseEvent, tag: string) => {
    e.stopPropagation()
    openToast("success", { title: "태그", text: tag })
  }
  return (
    <Card
      key={card?.id}
      className="flex h-full cursor-pointer flex-col gap-6 rounded-2xl p-6 opacity-0 shadow-md ring-1 ring-slate-200 transition-fast hover:-translate-y-2 hover:bg-slate-200 hover:shadow-lg md:flex-row dark:bg-slate-800 dark:shadow-md dark:ring-slate-700 dark:hover:bg-slate-700"
      onClick={() => router.push(`/blog/${card.id}`)}
    >
      {card?.image ? (
        <Card.Image
          src={card?.image ?? icon}
          alt="카드 이미지"
          className={cn("h-20 flex-shrink-0 md:h-40 md:w-40")}
          innerClassName="object-cover"
        />
      ) : (
        <Card.Image
          src={icon}
          alt="카드 이미지"
          className={cn("h-20 md:h-40 md:w-40")}
          innerClassName="object-contain"
        />
      )}
      <Card.Content className="flex flex-1 flex-col justify-between gap-2">
        <div className="flex justify-between">
          <Title>{card.name}</Title>
          <Button
            variant="icon"
            ref={targetRef}
            onClick={handleKebabMenuClick}
            className="relative p-1"
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
        <div className="h-18">
          <Text className="line-clamp-1 flex-1">{card.content}</Text>
        </div>
        <Tags tags={card?.tags || []} onClick={handleTagClick} />
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
