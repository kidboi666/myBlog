import cn from "@/src/lib/cn"
import { Container } from "../../layout/Container"
import { List } from "../../layout/List"
import { Button } from "../../shared/Button"

interface SectionProps {
  menuList?: Record<string, string | number>[]
  isAnimation: boolean
  onAnimationEnd: () => void
  className?: string
}

export const SectionMenu = ({ menuList, isAnimation, onAnimationEnd, className }: SectionProps) => {
  return (
    <Container
      lang="en"
      onAnimationEnd={onAnimationEnd}
      className={cn(
        "fixed right-0 top-[84px] z-30 size-fit rounded-t-none bg-slate-200 pb-2",
        isAnimation ? "animate-slideDown" : "animate-slideUp",
        className,
      )}
    >
      <List className="flex gap-4">
        {menuList?.map((menu) => (
          <List.Row key={menu.id}>
            <Button variant="teritory" className="text-sm">
              {menu.name}
            </Button>
          </List.Row>
        ))}
      </List>
    </Container>
  )
}
