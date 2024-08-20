import Link from "next/link"
import { useQuery } from "@tanstack/react-query"
import { categoryQuery } from "@/src/services/queries/category/categoryQuery"
import { useStatusChange } from "@/src/hooks/useStatusChange"
import { MenuIcon } from "../../icon/MenuIcon"
import { Button } from "../../shared/Button"
import { SideBar } from "./SideBar"
import { SlideBar } from "./SlideBar"

export const LeftSection = () => {
  const [menuRef, menuStatusRef, handleMenuStatusChange] = useStatusChange<
    HTMLDivElement,
    HTMLDivElement
  >()
  const { data: categories } = useQuery(categoryQuery.parentCategory())
  const { data: subCategories } = useQuery(categoryQuery.subCategory())

  return (
    <div className="flex items-center">
      <div className="flex lg:hidden" ref={menuRef}>
        <Button variant="icon" onClick={handleMenuStatusChange}>
          <MenuIcon />
        </Button>
        <SlideBar categories={categories} subCategories={subCategories} statusRef={menuStatusRef} />
      </div>
      <div className="hidden gap-6 lg:flex">
        <Link href="/">
          <Button lang="en" variant="teritory" className="p-0">
            ORIGINAL
          </Button>
        </Link>
        <SideBar categories={categories} subCategories={subCategories} />
      </div>
    </div>
  )
}
