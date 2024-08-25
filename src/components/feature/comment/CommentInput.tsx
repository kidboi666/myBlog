import { Line } from "../../shared/Line"
import { Title } from "../../shared/Title"
import { TextAreaInput } from "../../shared/TextAreaInput"
import { Button } from "../../shared/Button"

export const CommentInput = () => {
  return (
    <>
      <Title>현재 달린 댓글 2개</Title>
      <TextAreaInput variant="secondary" className="min-h-28" placeholder="댓글을 달아주세요." />
      <Button className="ml-auto w-24 self-end px-2">댓글 달기</Button>
      <Line />
    </>
  )
}
