import { Dispatch, KeyboardEvent, SetStateAction } from "react"
import { useInput } from "@/src/hooks/useInput"
import { TextInput } from "../../shared/TextInput"
import { Text } from "../../shared/Text"

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
        <div className="flex gap-2">
          {tags?.map((tag, idx) => (
            <Text
              as="span"
              key={`${tag + idx}`}
              variant="caption"
              className="inline-flex w-fit rounded-full p-2 ring-1 ring-slate-300"
            >
              {tag}
            </Text>
          ))}
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
