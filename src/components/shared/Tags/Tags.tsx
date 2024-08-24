import { MouseEvent } from "react"
import cn from "@/src/lib/cn"
import { List } from "../../layout/List"
import { Button } from "../Button"

interface Props {
  tags: string[] | null
  className?: string
  onClick: (e: MouseEvent<HTMLButtonElement>, tag: string) => void
}

export const Tags = ({ tags, className, onClick }: Props) => {
  return (
    <List className={cn("flex gap-2", className)}>
      {tags?.map((tag, idx) => (
        // eslint-disable-next-line react/no-array-index-key
        <List.Row key={tag + idx}>
          <Button
            variant="secondary"
            onClick={(e) => onClick(e, tag)}
            className="rounded-xl px-2 py-[2px] text-xs font-medium text-slate-500 dark:text-slate-400 dark:ring-slate-600"
          >
            {tag}
          </Button>
        </List.Row>
      ))}
    </List>
  )
}
