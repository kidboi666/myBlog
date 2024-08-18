import { forwardRef, PropsWithRef } from "react"
import { useQuery } from "@tanstack/react-query"
import { categoryQuery } from "@/src/services/queries/category/categoryQuery"

import { Container } from "../../layout/Container"
import { Button } from "../Button"
import { ArrowHeadIcon } from "../../icon/ArrowHeadIcon"
import { List } from "../../layout/List"

interface Props {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  itemList?: Record<string, any>[]
  listName?: string
  selectedItem?: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onClick: (arg: any) => void
}

export const SlideBar = forwardRef<HTMLDivElement, PropsWithRef<Props>>(({ onClick }, ref) => {
  const { data: categories } = useQuery(categoryQuery.queryOptions())

  return (
    // <div className="status-slide fixed inset-0 z-50 h-dvh w-full bg-black/25 text-left">
    <Container
      ref={ref}
      data-status="closed"
      className="status-slide fixed left-0 top-0 h-screen w-80 items-start rounded-l-none transition"
    >
      <List className="flex w-full flex-col">
        {categories?.map((category) => (
          <List.Row key={category.id} className="flex w-full items-center gap-4">
            <Button onClick={() => onClick(category)} variant="teritory">
              <div className="-rotate-90">
                <ArrowHeadIcon />
              </div>
              {category.name}
            </Button>
          </List.Row>
        ))}
      </List>
    </Container>
    // </div>
  )
})
