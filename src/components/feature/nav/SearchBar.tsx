import { RefObject } from "react"
import cn from "@/src/lib/cn"
import { Container } from "../../layout/Container"
import { Button } from "../../shared/Button"
import { TextInput } from "../../shared/TextInput"

interface Props {
  targetRef: RefObject<HTMLElement>
  isAnimation: boolean
  onAnimationEnd: () => void
}

export const SearchBar = ({ targetRef, isAnimation, onAnimationEnd }: Props) => {
  return (
    <Container
      ref={targetRef}
      onAnimationEnd={onAnimationEnd}
      className={cn(
        "fixed right-0 top-8 z-30 size-fit gap-4 px-4 pb-2 pt-12 md:px-4 xl:px-4",
        isAnimation ? "animate-slideDown" : "animate-slideUp",
      )}
    >
      <div className="relative h-8 w-80">
        <Button variant="icon" className="absolute left-2 top-1">
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
        <TextInput name="search" variant="search" />
      </div>
    </Container>
  )
}
