import { useClickOutside } from "@/src/hooks/useClickOutside"
import { useStateChange } from "@/src/hooks/useStateChange"
import { List } from "../../layout/List"
import { Button } from "../../shared/Button"
import { SearchIcon } from "../../icon/SearchIcon"
import { SearchBar } from "./SearchBar"

export const SearchSection = () => {
  const { ref, onClick, close, onTransitionEnd } = useStateChange<HTMLDivElement>()
  const buttonRef = useClickOutside<HTMLButtonElement>(close)
  return (
    <List.Row>
      <Button variant="icon" ref={buttonRef} onClick={onClick}>
        <SearchIcon />
      </Button>
      <SearchBar statusRef={ref} onTransitionEnd={onTransitionEnd} />
    </List.Row>
  )
}
