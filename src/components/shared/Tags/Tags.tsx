import { List } from "../../layout/List"
import { Button } from "../Button"

interface Props {
  tags: string[] | null
}

export const Tags = ({ tags }: Props) => {
  return (
    <List className="flex gap-2">
      {tags?.map((tag, idx) => (
        // eslint-disable-next-line react/no-array-index-key
        <List.Row key={tag + idx}>
          <Button
            variant="secondary"
            className="rounded-xl px-2 py-1 text-xs font-medium text-slate-500"
          >
            {tag}
          </Button>
        </List.Row>
      ))}
    </List>
  )
}
