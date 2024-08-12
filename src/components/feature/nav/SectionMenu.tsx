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
      onAnimationEnd={onAnimationEnd}
      className={cn(
        "fixed left-0 top-14 z-30 h-fit rounded-t-none pb-2 pt-16",
        isAnimation ? "animate-slideDown" : "animate-slideUp",
        className,
      )}
    >
      <List className="flex gap-4">
        {menuList?.map((menu) => (
          <List.Row key={menu.id}>
            <Button variant="secondary" className="w-full text-sm">
              {menu.name}
            </Button>
          </List.Row>
        ))}
      </List>
    </Container>
  )
}
