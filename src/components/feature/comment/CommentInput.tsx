import { FormEvent, useEffect } from "react"
import { useInput } from "@/src/hooks/useInput"
import { TextAreaInput } from "../../shared/TextAreaInput"
import { Button } from "../../shared/Button"

interface Props {
  onComment: (e: FormEvent<HTMLFormElement>, content: string, commentId?: number) => void
  commentId?: number
  isPending?: boolean
  isSuccess?: boolean
}

export const CommentInput = ({ onComment, commentId, isPending, isSuccess }: Props) => {
  const [content, onChangeContent, setContent] = useInput("")

  useEffect(() => {
    if (isSuccess) {
      setContent("")
    }
  }, [isSuccess])

  return (
    <form onSubmit={(e) => onComment(e, content, commentId)} className="flex w-full flex-col gap-4">
      <TextAreaInput
        variant="secondary"
        value={content}
        onChange={onChangeContent}
        className="min-h-28"
        placeholder="댓글을 달아주세요."
      />
      <Button>깃허브로 로그인</Button>
      <Button isSubmit isLoading={isPending} disabled={!content} className="ml-auto w-fit self-end">
        댓글 달기
      </Button>
    </form>
  )
}
