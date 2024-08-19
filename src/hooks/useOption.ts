import { IOption } from "../models/blog/post"
import { useModal } from "../store/useModal"

export const useOption = () => {
  const { setOpen } = useModal()
  const handlePostChange = (menu: IOption) => {
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
}
