import { useStateChange } from "@/src/hooks/useStateChange"
import { useClickOutside } from "@/src/hooks/useClickOutside"
import { TodoIcon } from "@/src/components/icon/TodoIcon"
import { List } from "@/src/components/layout/List"
import { Button } from "@/src/components/shared/Button"
import { Todos } from "@/src/components/feature/todos/Todos"

export const TodoSection = () => {
  const { ref, onClick, close, onTransitionEnd } = useStateChange<HTMLDivElement>()
  const buttonRef = useClickOutside<HTMLLIElement>(close)
  return (
    <List.Row targetRef={buttonRef} onClick={onClick}>
      <Button variant="icon">
        <TodoIcon />
      </Button>
      <Todos statusRef={ref} onTransitionEnd={onTransitionEnd} />
    </List.Row>
  )
}
