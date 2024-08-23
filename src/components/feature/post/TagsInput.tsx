/* eslint-disable react/no-array-index-key */
import { Dispatch, KeyboardEvent, SetStateAction, useState } from "react"
import cn from "@/src/lib/cn"
import { useInput } from "@/src/hooks/useInput"
import { Tags } from "../../shared/Tags"
import { Text } from "../../shared/Text"

interface Props {
  tags: string[]
  setTags: Dispatch<SetStateAction<string[]>>
}

export const TagsInput = ({ tags, setTags }: Props) => {
  const [text, onChangeText, setText] = useInput("")
  const [error, setError] = useState("")

  const handleDelete = (idx: number) => {
    const filterTag = tags?.filter((tag) => tag !== tags[idx])
    if (filterTag) {
      setTags(filterTag)
    }
  }

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault()
      if (e.nativeEvent.isComposing || !text) return
      setText("")
      setTags((prev: string[]) => [...prev, text])
    }

    if (e.key === " ") {
      e.preventDefault()
      if (e.nativeEvent.isComposing || !text) return
    }

    if (e.key === "Backspace") {
      if (tags && !text) {
        handleDelete(tags.length - 1)
      }
    }
    if (tags.length >= 10 && e.key !== "Backspace") {
      setText("")
      setError("태그는 10개 까지만 등록 가능합니다.")
    } else {
      setError("")
    }
  }

  return (
    <div>
      <div
        className={cn(
          "flex w-full flex-wrap gap-2 rounded-lg border border-slate-300 py-2 pr-2 text-sm",
          error && "border-red-500",
        )}
      >
        <Tags tags={tags} />
        <input
          name="tags"
          placeholder="태그를 추가하세요. 입력후 Enter. 삭제는 BackSpace"
          value={text}
          onChange={onChangeText}
          onKeyDown={handleKeyDown}
          className="flex-1 outline-none"
        />
      </div>
      {error && (
        <Text as="span" variant="error">
          {error}
        </Text>
      )}
    </div>
  )
}
