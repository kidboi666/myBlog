import { ComponentPropsWithRef, MouseEvent } from "react"
import { Tables } from "@/src/models/supabase"
import { useStatusChange } from "@/src/hooks/useStatusChange"
import { List } from "../../layout/List"
import { Button } from "../../shared/Button"
import { ArrowHeadIcon } from "../../icon/ArrowHeadIcon"
import { Text } from "../../shared/Text"

interface Props extends ComponentPropsWithRef<"ul"> {
  category: Tables<"category">
  subCategories: Tables<"sub_category">[]
}

export const SlideBarCategoryList = ({ category, subCategories }: Props) => {
  const [targetRef, statusRef, handleStatusChange] = useStatusChange<
    HTMLButtonElement,
    HTMLUListElement
  >()

  const handleCategoryButtonClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation()
    handleStatusChange(e)
  }

  return (
    <List.Row className="flex w-full flex-col items-start">
      <Button
        ref={targetRef}
        variant="teritory"
        onClick={(e) => handleCategoryButtonClick(e)}
        className="flex-col"
      >
        <Text className="flex items-center gap-2">
          <ArrowHeadIcon />
          {category.name}
        </Text>
      </Button>
      <List
        data-status="closed"
        targetRef={statusRef}
        className="origin-top transition data-[status=closed]:h-0 data-[status=closed]:scale-y-0 data-[status=closed]:opacity-0"
      >
        {subCategories.map((subCategory) => (
          <List.Row key={subCategory.id}>
            <Button variant="teritory">{subCategory.name}</Button>
          </List.Row>
        ))}
      </List>
    </List.Row>
  )
}
