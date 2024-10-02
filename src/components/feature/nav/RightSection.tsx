import { useLayoutEffect } from "react"
import { List } from "../../layout/List"
import { TodoSection } from "./TodoSection"
import { SearchSection } from "./SearchSection"
import { UserSection } from "./UserSection"

export const RightSection = () => {
  useLayoutEffect(() => {
    if (localStorage.theme === "dark") {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [])

  return (
    <div className="relative justify-self-end">
      <List className="flex items-center gap-4">
        <TodoSection />
        <SearchSection />
        <UserSection />
      </List>
    </div>
  )
}
