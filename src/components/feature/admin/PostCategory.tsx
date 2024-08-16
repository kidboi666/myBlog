import { FormEvent } from "react"
import cn from "@/src/lib/cn"
import { useAddCategory } from "@/src/services/mutate/category/useAddCategory"
import { useInput } from "@/src/hooks/useInput"
import { Button } from "../../shared/Button"
import { TextInput } from "../../shared/TextInput"

export const PostCategory = ({ className }: { className: string }) => {
  const [categoryName, onChangeCategoryName] = useInput("")
  const { mutate, isPending } = useAddCategory()

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    mutate(categoryName)
  }

  return (
    <form onSubmit={(e) => handleSubmit(e)} className={cn(className)}>
      <TextInput variant="secondary" onChange={onChangeCategoryName} />
      <Button isLoading={isPending} disabled={!categoryName} isSubmit className="w-full">
        카테고리 만들기
      </Button>
    </form>
  )
}
