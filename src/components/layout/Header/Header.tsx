import Link from "next/link"
import { useState } from "react"
import { useQuery } from "@tanstack/react-query"

import { meQuery } from "@/src/services/queries/auth/meQuery"
import useAnimation from "@/src/hooks/useAnimation"
import useClickOutside from "@/src/hooks/useClickOutside"

import { ArticleMenu } from "../../feature/nav/ArticleMenu"
import { SearchBar } from "../../feature/nav/SearchBar"
import { SearchButton } from "../../feature/nav/SearchButton"
import { MenuButton } from "../../feature/nav/MenuButton"
import { Title } from "../../shared/Title/Title"
import { Button } from "../../shared/Button"
import { Container } from "../Container"
import { List } from "../List/List"
import { LogoButton } from "../../feature/nav/LogoButton"
import { AdminButton } from "../../feature/nav/AdminButton"

export const Header = () => {
  const [isOpenSearch, setOpenSearch] = useState(false)
  const [isOpenMenu, setOpenMenu] = useState(false)
  const menuRef = useClickOutside(setOpenMenu)
  const searchRef = useClickOutside(setOpenSearch)
  const [shouldRenderMenu, isAnimationMenu, handleAnimationEndMenu] = useAnimation(isOpenMenu)
  const [shouldRenderSearch, isAnimationSearch, handleAnimationEndSearch] =
    useAnimation(isOpenSearch)
  const { data } = useQuery(meQuery.queryOptions())

  return (
    <>
      <Container
        as="header"
        className="fixed top-0 z-50 h-fit justify-between rounded-t-none bg-slate-50/90 py-6 backdrop-blur-lg"
      >
        <div className="flex items-center gap-4">
          <LogoButton />
          <AdminButton />
        </div>
        <nav className="justify-self-end">
          <List className="flex items-center gap-4">
            <List.Row>
              <SearchButton setOpenSearch={setOpenSearch} />
            </List.Row>
            <List.Row>
              <MenuButton setOpenMenu={setOpenMenu} />
            </List.Row>
            <List.Row>
              <Link href="/auth/signin">
                <Button variant="primary">로그인</Button>
              </Link>
            </List.Row>
          </List>
        </nav>
      </Container>
      {shouldRenderSearch && (
        <SearchBar
          targetRef={searchRef}
          isAnimation={isAnimationSearch}
          onAnimationEnd={handleAnimationEndSearch}
        />
      )}
      {shouldRenderMenu && (
        <ArticleMenu
          targetRef={menuRef}
          isOpenMenu={isOpenMenu}
          isAnimation={isAnimationMenu}
          onAnimationEnd={handleAnimationEndMenu}
        />
      )}
    </>
  )
}
