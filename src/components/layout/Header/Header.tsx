/* eslint-disable @typescript-eslint/no-explicit-any */
import Link from "next/link"
import { useRouter } from "next/router"
import { MouseEvent } from "react"
import { useQuery } from "@tanstack/react-query"

import { useStatusChange } from "@/src/hooks/useStatusChange"
import { meQuery } from "@/src/services/queries/auth/meQuery"
import { categoryQuery } from "@/src/services/queries/category/categoryQuery"

import { Button } from "../../shared/Button"
import { MeIcon } from "../../icon/MeIcon"
import { MenuIcon } from "../../icon/MenuIcon"
import { SearchIcon } from "../../icon/SearchIcon"
import { Container } from "../Container"
import { List } from "../List/List"
import { SearchBar } from "../../feature/nav/SearchBar"
import { DropDownList } from "../../shared/DropDown/DropDowList"

const meMenu = [{ name: "로그아웃", id: 0 }]

export const Header = () => {
  const [menuRef, menuStatusRef, handleMenuStatusChange] = useStatusChange<
    HTMLButtonElement,
    HTMLUListElement
  >()
  const [searchRef, searchStatusRef, handleSearchStatusChange] = useStatusChange<
    HTMLButtonElement,
    HTMLDivElement
  >()
  const [meBtnRef, meBtnStatusRef, handleMeBtnStatusChange] = useStatusChange<
    HTMLButtonElement,
    HTMLUListElement
  >()
  const router = useRouter()
  const { data: categories } = useQuery(categoryQuery.queryOptions())
  const { data: me } = useQuery(meQuery.queryOptions())

  const handleAuthButton = (e: MouseEvent<HTMLButtonElement>) => {
    if (me?.user) {
      handleMeBtnStatusChange(e)
    } else {
      router.push("/auth/signin")
    }
  }

  const handleMenuClick = (menu: Record<string, any>) => {
    router.push(`blog/${menu.id}`)
  }

  const handleMeBtnClick = () => {}

  return (
    <Container
      as="header"
      className="fixed top-0 z-50 h-fit justify-between rounded-t-none bg-slate-50 py-4 backdrop-blur-lg xl:px-40"
    >
      <div className="flex items-center gap-4">
        <Link href="/">
          <Button variant="secondary">LOGO</Button>
        </Link>
        <Link href="/admin">
          <Button variant="secondary">ADMIN</Button>
        </Link>
      </div>
      <nav className="relative justify-self-end">
        <List className="flex items-center gap-4">
          <List.Row>
            <Button variant="icon" ref={searchRef} onClick={handleSearchStatusChange}>
              <SearchIcon />
              <SearchBar statusRef={searchStatusRef} />
            </Button>
          </List.Row>
          <List.Row className="relative">
            <Button variant="icon" ref={menuRef} onClick={handleMenuStatusChange}>
              <MenuIcon />
            </Button>
            <DropDownList
              ref={menuStatusRef}
              itemList={categories}
              onClick={handleMenuClick}
              className="right-0 w-40"
            />
          </List.Row>
          <List.Row className="relative">
            <Button variant="icon" ref={meBtnRef} onClick={handleAuthButton}>
              <MeIcon />
            </Button>
            <DropDownList
              ref={meBtnStatusRef}
              itemList={meMenu}
              onClick={handleMeBtnClick}
              className="right-0 w-40"
            />
          </List.Row>
        </List>
      </nav>
    </Container>
  )
}
