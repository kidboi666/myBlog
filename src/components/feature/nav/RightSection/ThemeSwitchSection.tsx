import { List } from "@/src/components/layout/List"
import { Button } from "@/src/components/shared/Button"
import { DarkModeIcon } from "@/src/components/icon/DarkModeIcon"

export const ThemeSwitchSection = () => {
  const handleTheme = () => {
    const savedTheme = localStorage.getItem("theme")

    if (savedTheme === "dark") {
      localStorage.setItem("theme", "light")
      document.documentElement.classList.remove("dark")
    } else {
      localStorage.setItem("theme", "dark")
      document.documentElement.classList.add("dark")
    }
  }

  const handleButtonClick = () => {
    handleTheme()
  }

  return (
    <List.Row>
      <Button variant="icon" onClick={handleButtonClick}>
        <DarkModeIcon />
      </Button>
    </List.Row>
  )
}
