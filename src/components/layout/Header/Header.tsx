import Link from "next/link"
import { useState } from "react"
import useAnimation from "@/src/hooks/useAnimation"
import useClickOutside from "@/src/hooks/useClickOutside"
import { Container } from "../Container"
import { List } from "../List/List"
import { ArticleMenu } from "../../feature/nav/ArticleMenu"
import { Title } from "../../shared/Title/Title"
import { Button } from "../../shared/Button"
import { SearchBar } from "../../feature/nav/SearchBar"
import { useQuery } from "@tanstack/react-query"
import { meQuery } from "@/src/services/queries/auth/meQuery"

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
        <Title lang="en" className="text-base text-slate-500">
          ORIGINAL .
        </Title>
        <nav className="justify-self-end">
          <List className="flex items-center gap-4">
            <List.Row>
              <Button
                variant="icon"
                onClick={() => setOpenSearch((prev) => !prev)}
                className="transition-fast"
              >
                <span className="sr-only">Search</span>
                <svg
                  width="24"
                  height="24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="m19 19-3.5-3.5" />
                  <circle cx="11" cy="11" r="6" />
                </svg>
              </Button>
            </List.Row>
            <List.Row>
              <Button
                variant="icon"
                onClick={() => setOpenMenu((prev) => !prev)}
                className="transition-fast"
              >
                <span className="sr-only">Menu</span>
                <svg width="24" height="24">
                  <path
                    d="M5 6h14M5 12h14M5 18h14"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </Button>
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
