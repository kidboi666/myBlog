import { useEffect } from "react"
import { List } from "@/src/components/layout/List"
import { ThemeSwitchSection } from "./ThemeSwitchSection"
import { AdminSection } from "./AdminSection"
import { ResumeSection } from "./ResumeSection"

export const RightSection = () => {
  useEffect(() => {
    if (localStorage.theme === "dark") {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [])

  return (
    <div className="relative justify-self-end">
      <List className="flex items-center gap-4">
        <ResumeSection />
        <AdminSection />
        <ThemeSwitchSection />
      </List>
    </div>
  )
}
