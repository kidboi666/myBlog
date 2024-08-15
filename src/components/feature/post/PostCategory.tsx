import { useInput } from "@/src/hooks/useInput"
import { Container } from "../../layout/Container"
import { Button } from "../../shared/Button"
import { TextInput } from "../../shared/TextInput"
import { FormEvent } from "react"
import { useAddCategory } from "@/src/services/mutate/category/useAddCategory"

export const PostCategory = () => {
  const [categoryName, onChangeCategoryName] = useInput("")
  const { mutate, isPending } = useAddCategory()

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    mutate(categoryName)
  }

  return (
    <Container>
      <form onSubmit={(e) => handleSubmit(e)}>
        <TextInput variant="search" onChange={onChangeCategoryName} />
        <Button isLoading={isPending} isSubmit>
          카테고리 만들기
        </Button>
      </form>
    </Container>
  )
}
