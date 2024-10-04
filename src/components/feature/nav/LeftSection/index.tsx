import Link from "next/link"
import { useQuery } from "@tanstack/react-query"
import { categoryQuery } from "@/src/services/queries/category/categoryQuery"
import { useStatusChange } from "@/src/hooks/useStatusChange"
import { MenuIcon } from "@/src/components/icon/MenuIcon"
import { Title } from "@/src/components/shared/Title"
import { Button } from "@/src/components/shared/Button"
import { SideBar } from "./SideBar"
import { SlideBar } from "./SlideBar"

export const LeftSection = () => {
  const [buttonRef, slideBarRef, handleSlideBarChange] = useStatusChange<
    HTMLDivElement,
    HTMLDivElement
  >()
  const { data: categories } = useQuery(categoryQuery.parentCategory())
  const { data: subCategories } = useQuery(categoryQuery.subCategory())

  return (
    <div className="flex items-center">
      <div className="flex md:hidden" ref={buttonRef}>
        <Button variant="icon" onClick={handleSlideBarChange}>
          <MenuIcon />
        </Button>
        <SlideBar categories={categories} subCategories={subCategories} slideBarRef={slideBarRef} />
      </div>
      <div className="hidden gap-6 md:flex">
        <Link href="/">
          <Button variant="icon" className="group px-2 py-0">
            <Title variant="title" className="transition group-hover:text-slate-50">
              Original
            </Title>
          </Button>
        </Link>
        <SideBar categories={categories} subCategories={subCategories} />
      </div>
    </div>
  )
}
