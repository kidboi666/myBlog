import { useRouter } from "next/router"
import cn from "@/src/lib/cn"
import { Button } from "../Button"
import { ArrowHeadIcon } from "../../icon/ArrowHeadIcon"

interface Props {
  className?: string
}

export const Back = ({ className }: Props) => {
  const router = useRouter()
  return (
    <Button variant="icon" onClick={() => router.push("/")} className={cn(className)}>
      <ArrowHeadIcon className="left-0 rotate-90" />
    </Button>
  )
}
