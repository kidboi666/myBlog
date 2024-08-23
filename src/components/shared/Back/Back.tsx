import cn from "@/src/lib/cn"
import { useRouter } from "next/router"
import { Button } from "../Button"
import { ArrowHeadIcon } from "../../icon/ArrowHeadIcon"

interface Props {
  className?: string
}

export const Back = ({ className }: Props) => {
  const router = useRouter()
  return (
    <Button
      variant="icon"
      onClick={() => router.back()}
      className={cn("self-start p-2", className)}
    >
      <ArrowHeadIcon className="left-0 rotate-90" />
    </Button>
  )
}
