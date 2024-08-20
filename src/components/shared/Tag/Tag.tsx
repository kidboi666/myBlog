import { Button } from "../Button"

interface Props {
  tag: string
}

export const Tag = ({ tag }: Props) => {
  return (
    <Button variant="secondary" className="rounded-2xl px-3 py-1">
      {tag}
    </Button>
  )
}
