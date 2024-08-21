import { MouseEvent } from "react"
import { useRouter } from "next/router"
import { useQuery } from "@tanstack/react-query"
import { meQuery } from "@/src/services/queries/auth/meQuery"
import { useSignOut } from "@/src/services/mutate/auth/useSignOut"
import { ME_OPTION } from "@/src/constants/options"
import { useStatusChange } from "@/src/hooks/useStatusChange"
import { MeIcon } from "../../icon/MeIcon"
import { SearchIcon } from "../../icon/SearchIcon"
import { List } from "../../layout/List"
import { Button } from "../../shared/Button"
import { DropDownList } from "../../shared/DropDown/DropDowList"
import { SearchBar } from "./SearchBar"

export const RightSection = () => {
  const router = useRouter()
  const { data: me } = useQuery(meQuery.queryOptions())
  const { mutate: signOut } = useSignOut()
  const [searchRef, searchStatusRef, handleSearchStatusChange] = useStatusChange<
    HTMLButtonElement,
    HTMLDivElement
  >()
  const [meBtnRef, meBtnStatusRef, handleMeBtnStatusChange] = useStatusChange<
    HTMLButtonElement,
    HTMLUListElement
  >()

  const handleAuthButton = (e: MouseEvent<HTMLButtonElement>) => {
    if (me?.user) {
      handleMeBtnStatusChange(e)
    } else {
      router.push("/auth/signin")
    }
  }

  const handleMeBtnClick = (menu: { name: string; id: number }) => {
    if (menu.name === "어드민 페이지") {
      router.push("/admin")
    } else if (menu.name === "로그아웃") {
      signOut()
    }
  }

  return (
    <div className="relative justify-self-end">
      <List className="flex items-center gap-4">
        <List.Row>
          <Button variant="icon" ref={searchRef} onClick={handleSearchStatusChange}>
            <SearchIcon />
            <SearchBar statusRef={searchStatusRef} />
          </Button>
        </List.Row>
        <List.Row className="relative">
          {me ? (
            <>
              <Button variant="icon" ref={meBtnRef} onClick={handleAuthButton}>
                <MeIcon />
              </Button>
              <DropDownList
                ref={meBtnStatusRef}
                itemList={ME_OPTION}
                onClick={handleMeBtnClick}
                className="right-0 w-40"
              />
            </>
          ) : (
            <Button onClick={() => router.push("/auth/signin")}>로그인</Button>
          )}
        </List.Row>
      </List>
    </div>
  )
}
