import { useQuery } from "@tanstack/react-query"

import { useStatusChange } from "@/src/hooks/useStatusChange"
import { meQuery } from "@/src/services/queries/auth/meQuery"

import { ArticleMenu } from "../../feature/nav/ArticleMenu"
import { MenuButton } from "../../feature/nav/MenuButton"
import { Container } from "../Container"
import { List } from "../List/List"
import { LogoButton } from "../../feature/nav/LogoButton"
import { AdminButton } from "../../feature/nav/AdminButton"
import { MeButton } from "../../feature/nav/MeButton"

export const Header = () => {
  const [menuRef, menuStatusRef, handleStatusChange] = useStatusChange<
    HTMLButtonElement,
    HTMLDivElement
  >()
  // const [isOpenSearch, setOpenSearch] = useState(false)
  // const [isOpenMenu, setOpenMenu] = useState(false)
  // const menuRef = useClickOutside(setOpenMenu)
  // const searchRef = useClickOutside(setOpenSearch)
  // const [shouldRenderMenu, isAnimationMenu, handleAnimationEndMenu] = useAnimation(isOpenMenu)
  // const [shouldRenderSearch, isAnimationSearch, handleAnimationEndSearch] =
  //   useAnimation(isOpenSearch)
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
        <nav className="relative justify-self-end" ref={menuRef}>
          <List className="flex items-center gap-4">
            <List.Row>{/* <SearchButton setOpenSearch={setOpenSearch} /> */}</List.Row>
            <List.Row>
              <MenuButton onClick={handleStatusChange} />
            </List.Row>
            <List.Row>
              <MeButton />
            </List.Row>
          </List>
          <ArticleMenu statusRef={menuStatusRef} />
        </nav>
      </Container>
      {/* {shouldRenderSearch && (
        <SearchBar
          targetRef={searchRef}
          isAnimation={isAnimationSearch}
          onAnimationEnd={handleAnimationEndSearch}
        />
      )} */}
    </>
  )
}
