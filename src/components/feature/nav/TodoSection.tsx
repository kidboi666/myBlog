import { useStateChange } from "@/src/hooks/useStateChange"
import { useClickOutside } from "@/src/hooks/useClickOutside"
import { TodoIcon } from "../../icon/TodoIcon"
import { List } from "../../layout/List"
import { Button } from "../../shared/Button"
import { Todos } from "../todos/Todos"

export const TodoSection = () => {
  const { ref, onClick, close, onTransitionEnd } = useStateChange<HTMLDivElement>()
  const buttonRef = useClickOutside<HTMLButtonElement>(close)
  return (
    <List.Row>
      <Button variant="icon" ref={buttonRef} onClick={onClick}>
        <TodoIcon />
        <Todos statusRef={ref} onTransitionEnd={onTransitionEnd} />
      </Button>
    </List.Row>
  )
}
