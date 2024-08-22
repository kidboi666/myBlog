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
    <Button
      variant="teritory"
      onClick={() => router.back()}
      className={cn("rotate-90 p-0 text-slate-600", className)}
    >
      <ArrowHeadIcon className="size-8" />
    </Button>
  )
}
