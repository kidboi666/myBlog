import Image from "next/image"
import { formatDateToYMD } from "@/src/utils/formatDate"
import { Text } from "../../shared/Text"
import { Title } from "../../shared/Title"
import { Button } from "../../shared/Button"

interface Props {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  comment: any
}

export const Comment = ({ comment }: Props) => {
  return (
    <div className="flex w-full gap-4">
      <div className="relative size-10">
        <Image src={comment.avatar_url} alt="프로필 이미지" fill className="rounded-full" />
      </div>
      <div className="flex w-full flex-col items-start gap-4">
        <div className="flex flex-col">
          <div className="flex items-end gap-2">
            <Title variant="sub" className="text-base">
              {comment.nickname}
            </Title>
          </div>
          <Text variant="caption">{formatDateToYMD(comment.created_at)}</Text>
        </div>
        <Text>{comment.content}</Text>
        <Button variant="teritory" className="text-xs">
          답글달기
        </Button>
      </div>
    </div>
  )
}
