import { FormEvent, useEffect } from "react"
import { useInput } from "@/src/hooks/useInput"
import { TextAreaInput } from "../../shared/TextAreaInput"
import { Button } from "../../shared/Button"
import { TextInput } from "../../shared/TextInput"
import { Text } from "../../shared/Text"

interface Props {
  onComment: (
    e: FormEvent<HTMLFormElement>,
    content: string,
    nickname: string,
    password: string,
    commentId?: number,
  ) => void
  commentId?: number
  isPending?: boolean
  isSuccess?: boolean
}

export const CommentInput = ({ onComment, commentId, isPending, isSuccess }: Props) => {
  const [content, onChangeContent, setContent] = useInput("")
  const [nickname, onChangeNickname, setNickname] = useInput("")
  const [password, onChangePassword, setPassword] = useInput("")

  useEffect(() => {
    if (isSuccess) {
      setContent("")
      setNickname("")
      setPassword("")
    }
  }, [isSuccess])

  return (
    <form
      onSubmit={(e) => onComment(e, content, nickname, password, commentId)}
      className="flex w-full flex-col gap-4"
    >
      <div className="flex gap-4">
        <div className="relative flex w-full">
          <TextInput
            variant="secondary"
            value={nickname}
            onChange={onChangeNickname}
            maxLength={10}
            placeholder="닉네임을 입력해주세요."
            className="flex-1"
          />
          <Text variant="caption" className="absolute right-2 top-1/2 -translate-y-1/2">
            {nickname.length} / 10
          </Text>
        </div>
        <div className="relative flex w-full">
          <TextInput
            variant="secondary"
            value={password}
            onChange={onChangePassword}
            type="password"
            maxLength={8}
            placeholder="비밀번호를 입력해주세요"
          />
          <Text variant="caption" className="absolute right-2 top-1/2 -translate-y-1/2">
            {password.length} / 8
          </Text>
        </div>
      </div>
      <div className="relative flex w-full">
        <TextAreaInput
          variant="secondary"
          value={content}
          onChange={onChangeContent}
          className="min-h-28"
          placeholder="댓글을 달아주세요."
          maxLength={300}
        />
        <Text variant="caption" className="absolute bottom-2 right-2">
          {content.length} / 300
        </Text>
      </div>
      <Button
        isSubmit
        isLoading={isPending}
        disabled={!content || !nickname || !password}
        className="ml-auto w-fit self-end"
      >
        댓글 달기
      </Button>
    </form>
  )
}
