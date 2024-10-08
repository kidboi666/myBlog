import { useToast } from "@/src/store/useToast"
import { Button } from "../../shared/Button"

export const Toast = () => {
  const { openToast } = useToast()
  return (
    <div className="flex flex-1 justify-center gap-4">
      <Button
        variant="warn"
        onClick={() => openToast("failure", { title: "그냥 토스트", text: "앞길 ." })}
        className="flex-1"
      >
        실패 토스트띄우기
      </Button>
      <Button
        variant="secondary"
        onClick={() => openToast("warn", { title: "그냥 토스트", text: "뒷길 조심하세요." })}
        className="flex-1"
      >
        경고 토스트띄우기
      </Button>
      <Button
        onClick={() => openToast("success", { title: "그냥 토스트", text: "밤길 조심하세요." })}
        className="flex-1"
      >
        성공 토스트띄우기
      </Button>
    </div>
  )
}
