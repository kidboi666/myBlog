import { useRouter } from "next/router"
import { useQuery } from "@tanstack/react-query"
import { meQuery } from "@/src/services/queries/auth/meQuery"
import { useSignOut } from "@/src/services/mutate/auth/useSignOut"
import { useClickOutside } from "@/src/hooks/useClickOutside"
import { useStateChange } from "@/src/hooks/useStateChange"
import { ME_OPTION } from "@/src/constants/options"
import { List } from "../../layout/List"
import { Button } from "../../shared/Button"
import { MeIcon } from "../../icon/MeIcon"
import { DropDownList } from "../../shared/DropDown/DropDownList"

export const UserSection = () => {
  const { data: me } = useQuery(meQuery.queryOptions())

  const router = useRouter()
  const { ref, onClick, open, close, onTransitionEnd } = useStateChange<HTMLUListElement>()
  const buttonRef = useClickOutside<HTMLButtonElement>(close)
  const { mutate: signOut } = useSignOut()

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

  const handleMeBtnClick = (menu: { name: string; id: number }) => {
    open()
    if (menu.name === "어드민 페이지") {
      close()
      router.push("/admin")
    } else if (menu.name === "로그아웃") {
      signOut()
    } else if (menu.name === "다크모드") {
      handleTheme()
    }
  }

  return (
    <List.Row>
      {me ? (
        <Button variant="icon" ref={buttonRef} onClick={onClick}>
          <MeIcon />
          <DropDownList
            ref={ref}
            itemList={ME_OPTION}
            onTransitionEnd={onTransitionEnd}
            onClick={handleMeBtnClick}
            className="right-0 top-full w-40"
          />
        </Button>
      ) : (
        <Button onClick={() => router.push("/auth/signin")}>로그인</Button>
      )}
    </List.Row>
  )
}
