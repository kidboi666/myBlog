import { useInput } from "@/src/hooks/useInput"
import { TextAreaInput } from "../../shared/TextAreaInput"
import { Button } from "../../shared/Button"

interface Props {
  onComment: (content: string, commentId?: number) => void
  commentId?: number
}

export const CommentInput = ({ onComment, commentId }: Props) => {
  const [content, onChangeContent] = useInput("")
  return (
    // <form onSubmit={onComment} className="w-full">
    <>
      <TextAreaInput
        variant="secondary"
        value={content}
        onChange={onChangeContent}
        className="min-h-28"
        placeholder="댓글을 달아주세요."
      />
      <Button onClick={() => onComment(content, commentId)} className="ml-auto w-24 self-end px-2">
        댓글 달기
      </Button>
    </>
  )
}
