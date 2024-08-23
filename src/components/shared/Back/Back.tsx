import { useRouter } from "next/router"
import { Button } from "../Button"
import { ArrowHeadIcon } from "../../icon/ArrowHeadIcon"

export const Back = () => {
  const router = useRouter()
  return (
    <Button variant="icon" onClick={() => router.push("/")} className="self-start p-2">
      <ArrowHeadIcon className="left-0 rotate-90" />
    </Button>
  )
}
