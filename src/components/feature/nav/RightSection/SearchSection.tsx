import { useClickOutside } from "@/src/hooks/useClickOutside"
import { useStateChange } from "@/src/hooks/useStateChange"
import { List } from "@/src/components/layout/List"
import { Button } from "@/src/components/shared/Button"
import { SearchIcon } from "@/src/components/icon/SearchIcon"
import { SearchBar } from "./SearchBar"

export const SearchSection = () => {
  const { ref, onClick, close, onTransitionEnd } = useStateChange<HTMLDivElement>()
  const buttonRef = useClickOutside<HTMLLIElement>(close)
  return (
    <List.Row targetRef={buttonRef} onClick={onClick}>
      <Button variant="icon">
        <SearchIcon />
      </Button>
      <SearchBar statusRef={ref} onTransitionEnd={onTransitionEnd} />
    </List.Row>
  )
}
