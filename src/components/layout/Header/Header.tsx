/* eslint-disable @typescript-eslint/no-explicit-any */
import Link from "next/link"
import { useRouter } from "next/router"
import { MouseEvent, useState } from "react"
import { useQuery } from "@tanstack/react-query"

import { useStatusChange } from "@/src/hooks/useStatusChange"
import { meQuery } from "@/src/services/queries/auth/meQuery"
import { categoryQuery } from "@/src/services/queries/category/categoryQuery"
import { subCategoryQuery } from "@/src/services/queries/category/subCategoryQuery"

import { Button } from "../../shared/Button"
import { MeIcon } from "../../icon/MeIcon"
import { MenuIcon } from "../../icon/MenuIcon"
import { SearchIcon } from "../../icon/SearchIcon"
import { SearchBar } from "../../feature/nav/SearchBar"
import { DropDownList } from "../../shared/DropDown/DropDowList"
import { SlideBar } from "../../shared/SlideBar"
import { List } from "../List/List"
import { Container } from "../Container"
import { NavMenuList } from "../../feature/nav/NavMenuList"

const meMenu = [
  { name: "어드민 페이지", id: 0 },
  { name: "로그아웃", id: 1 },
]

export const Header = () => {
  const [menuRef, menuStatusRef, handleMenuStatusChange] = useStatusChange<
    HTMLButtonElement,
    HTMLDivElement
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
  const { data: categories } = useQuery(categoryQuery.parentCategory())
  const { data: me } = useQuery(meQuery.queryOptions())
  const { data: subCategories } = useQuery(subCategoryQuery.queryOptions())
  const [showSubCategory, setShowSubCategory] = useState(false)

  const handleAuthButton = (e: MouseEvent<HTMLButtonElement>) => {
    if (me?.user) {
      handleMeBtnStatusChange(e)
    } else {
      router.push("/auth/signin")
    }
  }

  const handleMenuClick = (menu: Record<string, any>) => {
    console.log(menu)
    // router.replace({ pathname: "blog", query: { categoryId: menu.id } })
  }

  const handleMeBtnClick = (menu: { name: string; id: number }) => {
    if (menu.name === "어드민 페이지") {
      router.push("/admin")
    } else if (menu.name === "로그아웃") {
      // 로그아웃
    }
  }

  return (
    <Container
      as="header"
      className="fixed top-0 z-50 h-fit justify-between rounded-t-none bg-slate-50 py-4 backdrop-blur-lg xl:px-40"
    >
      <div className="flex items-center">
        <div className="flex lg:hidden">
          <Button variant="icon" ref={menuRef} onClick={handleMenuStatusChange}>
            <MenuIcon />
          </Button>
          <SlideBar ref={menuStatusRef} onClick={handleMenuClick} />
        </div>
        <div className="hidden gap-6 lg:flex">
          <Link href="/" className="hidden lg:flex">
            <Button lang="en" variant="teritory" className="p-0">
              ORIGINAL
            </Button>
          </Link>

          {categories?.map((category) => {
            const pickSubCategories =
              subCategories?.filter(
                (subCategory) => category.id === subCategory.parent_category_id,
              ) || []
            return (
              <NavMenuList
                key={category.id}
                category={category}
                subCategories={pickSubCategories}
              />
            )
          })}
        </div>
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
