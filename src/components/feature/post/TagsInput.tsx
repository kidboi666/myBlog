import { Dispatch, KeyboardEvent, SetStateAction } from "react"
import { useInput } from "@/src/hooks/useInput"
import { TextInput } from "../../shared/TextInput"
import { Tag } from "../../shared/Tag"

interface Props {
  tags: string[]
  setTags: Dispatch<SetStateAction<string[]>>
  // onChange: (e: ChangeEvent) => void
}

export const TagsInput = ({ tags, setTags }: Props) => {
  const [text, onChangeText, setText] = useInput("")

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
  }

  return (
    <>
      {tags && tags?.length > 0 && (
        <div className="flex max-h-16 flex-wrap gap-2 overflow-y-auto py-1">
          {/* eslint-disable-next-line react/no-array-index-key */}
          {tags?.map((tag, idx) => <Tag key={tag + idx} tag={tag} />)}
        </div>
      )}
      <TextInput
        name="tags"
        variant="secondary"
        placeholder="태그를 추가하세요. 입력후 Enter"
        value={text}
        onChange={onChangeText}
        onKeyDown={handleKeyDown}
      />
    </>
  )
}
