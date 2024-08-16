import Link from "next/link"
import { useQuery } from "@tanstack/react-query"

import { useStatusChange } from "@/src/hooks/useStatusChange"
import { meQuery } from "@/src/services/queries/auth/meQuery"

import { ArticleMenu } from "../../feature/nav/ArticleMenu"
import { Button } from "../../shared/Button"
import { MeIcon } from "../../icon/MeIcon"
import { MenuIcon } from "../../icon/MenuIcon"
import { SearchIcon } from "../../icon/SearchIcon"
import { Container } from "../Container"
import { List } from "../List/List"
import { SearchBar } from "../../feature/nav/SearchBar"

export const Header = () => {
  const [menuRef, menuStatusRef, handleMenuStatusChange] = useStatusChange<
    HTMLButtonElement,
    HTMLDivElement
  >()
  const [searchRef, searchStatusRef, handleSearchStatusChange] = useStatusChange<
    HTMLButtonElement,
    HTMLDivElement
  >()
  const { data } = useQuery(meQuery.queryOptions())

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
          <List.Row>
            <Button variant="icon" ref={menuRef} onClick={handleMenuStatusChange}>
              <MenuIcon />
            </Button>
            <ArticleMenu statusRef={menuStatusRef} />
          </List.Row>
          <List.Row>
            <Link href="/auth/signin">
              <Button variant="icon">
                <MeIcon />
              </Button>
            </Link>
          </List.Row>
        </List>
      </nav>
    </Container>
  )
}
