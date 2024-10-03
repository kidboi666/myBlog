import { ComponentPropsWithRef, MouseEvent, RefObject, useRef } from "react"
import Image from "next/image"
import { useRouter } from "next/router"
import { Tables } from "@/src/models/supabase"
import { List } from "@/src/components/layout/List"
import { Button } from "@/src/components/shared/Button"
import { ArrowHeadIcon } from "@/src/components/icon/ArrowHeadIcon"
import { Title } from "@/src/components/shared/Title"

interface Props extends ComponentPropsWithRef<"ul"> {
  category: Tables<"category">
  subCategories: Tables<"sub_category">[]
  slideBarRef: RefObject<HTMLElement>
}

export const SlideBarCategoryList = ({ category, subCategories, slideBarRef }: Props) => {
  const router = useRouter()
  const arrowRef = useRef<SVGSVGElement>(null)
  const listRef = useRef<HTMLUListElement>(null)

  const handleCategoryButtonClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation()
    if (subCategories.length === 0) {
      slideBarRef.current?.setAttribute("data-status", "closed")
      router.push({
        pathname: "/blog",
        query: { categoryId: category.id, name: category.name },
      })
    }
    if (listRef.current?.getAttribute("data-status") === "closed") {
      arrowRef.current?.setAttribute("data-status", "opened")
      listRef.current?.setAttribute("data-status", "opened")
    } else {
      arrowRef.current?.setAttribute("data-status", "closed")
      listRef.current?.setAttribute("data-status", "closed")
    }
  }

  const handleParentCategoryButtonClick = (e: MouseEvent, menu: Tables<"category">) => {
    e.stopPropagation()
    slideBarRef.current?.setAttribute("data-status", "closed")
    router.push({
      pathname: "/blog",
      query: { categoryId: menu.id, name: menu.name },
    })
  }

  const handleSubCategoryButtonClick = (e: MouseEvent, menu: Tables<"sub_category">) => {
    e.stopPropagation()
    slideBarRef.current?.setAttribute("data-status", "closed")
    router.push({
      pathname: "/blog",
      query: { categoryId: menu.parent_category_id, name: menu.name, subCategoryId: menu.id },
    })
  }

  return (
    <List.Row className="flex w-full flex-col items-start transition">
      <Button
        variant="secondary"
        onClick={(e) => handleCategoryButtonClick(e)}
        className="w-full justify-between px-2 text-base font-medium ring-0"
      >
        <div className="flex items-center gap-4">
          {category.icon && (
            <Image
              src={category.icon}
              alt="카테고리 아이콘"
              width={24}
              height={24}
              className="rounded-md"
            />
          )}
          <Title as="h2" className="text-sm font-normal">
            {category.name}
          </Title>
        </div>
        {subCategories.length >= 1 && (
          <ArrowHeadIcon
            ref={arrowRef}
            className="rotate-180 transition group-hover:text-slate-500 data-[status=closed]:-rotate-0"
          />
        )}
      </Button>
      <List
        data-status="closed"
        targetRef={listRef}
        className="ml-12 w-full origin-top transition data-[status=closed]:h-0 data-[status=closed]:scale-y-0 data-[status=closed]:opacity-0"
      >
        {subCategories.length !== 0 && (
          <>
            <List.Row className="h-8">
              <Button
                variant="teritory"
                onClick={(e) => handleParentCategoryButtonClick(e, category)}
                className="w-full justify-start"
              >
                <Title as="h3" className="text-sm font-normal">
                  전체
                </Title>
              </Button>
            </List.Row>
            {subCategories.map((subCategory) => (
              <List.Row key={subCategory.id} className="h-8">
                <Button
                  variant="teritory"
                  onClick={(e) => handleSubCategoryButtonClick(e, subCategory)}
                  className="w-full justify-start"
                >
                  <Title as="h3" className="text-sm font-normal">
                    {subCategory.name}
                  </Title>
                </Button>
              </List.Row>
            ))}
          </>
        )}
      </List>
    </List.Row>
  )
}
