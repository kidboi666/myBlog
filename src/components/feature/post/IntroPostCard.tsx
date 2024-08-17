import { Tables } from "@/src/models/supabase"
import { formatDate, formatDateToYMD } from "@/src/utils/formatDate"
import { useStatusChange } from "@/src/hooks/useStatusChange"
import { KebabIcon } from "../../icon/KebabIcon"
import { Button } from "../../shared/Button"
import { Card } from "../../shared/Card"
import { DropDownList } from "../../shared/DropDown"
import { Text } from "../../shared/Text"
import { Title } from "../../shared/Title"

const options = [
  { name: "삭제하기", id: 0 },
  { name: "수정하기", id: 1 },
]

interface Props {
  card: Tables<"post">
  onDelete: (id: number) => void
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onUpdate: (arg: { id: number; body: any }) => void
}

export const IntroPostCard = ({ card, onDelete, onUpdate }: Props) => {
  const [targetRef, statusRef, handleStatusChange] = useStatusChange<
    HTMLButtonElement,
    HTMLUListElement
  >()

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handlePostChange = (menu: Record<string, any>) => {
    if (menu.name === "삭제하기") {
      onDelete(card.id)
    }
    if (menu.name === "수정하기") {
      // 수정 모달 띄우기
    }
  }

  return (
    <Card key={card?.id} className="bg-blue-50">
      <Card.Image src={card?.image ?? ""} alt="카드 이미지" className="h-52 md:w-52" />
      <Card.Content className="flex flex-1 flex-col gap-2">
        <div className="flex justify-between">
          <Title>{card.name}</Title>
          <Button
            variant="icon"
            ref={targetRef}
            onClick={handleStatusChange}
            className="relative size-6 text-slate-400 hover:bg-slate-300"
          >
            <KebabIcon size={20} />
          </Button>
          <DropDownList
            ref={statusRef}
            itemList={options}
            onClick={handlePostChange}
            className="right-4 top-12 w-fit"
          />
        </div>
        <Text className="line-clamp-6 flex-1">{card.content}</Text>
        <div className="flex justify-between">
          <Text variant="description">{card.categoryName} 카테고리</Text>
          <div className="flex gap-4 self-end">
            <Text variant="caption">{formatDate(card.createdAt)}</Text>
            <Text variant="caption">{formatDateToYMD(card.createdAt)}</Text>
          </div>
        </div>
      </Card.Content>
    </Card>
  )
}
