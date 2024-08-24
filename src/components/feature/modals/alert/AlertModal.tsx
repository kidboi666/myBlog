import { useModal } from "@/src/store/useModal"
import { Button } from "@/src/components/shared/Button"
import { Text } from "@/src/components/shared/Text"
import { ModalWrapper } from "../ModalWrapper"

export const AlertModal = () => {
  const { closeModal, type, data } = useModal()

  if (type !== "alert") return null

  return (
    <ModalWrapper as="div" title={data.title}>
      <Text>{data.text}</Text>
      <Button variant="secondary" onClick={() => data.onClick()}>
        {data.yes}
      </Button>
      <Button onClick={() => closeModal()}>{data.no}</Button>
    </ModalWrapper>
  )
}
