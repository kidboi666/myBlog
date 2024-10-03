import { RefObject } from "react"
import { Container } from "@/src/components/layout/Container"
import { TextInput } from "@/src/components/shared/TextInput"
import { SearchIcon } from "@/src/components/icon/SearchIcon"

interface Props {
  statusRef: RefObject<HTMLElement>
  onTransitionEnd?: () => void
}

export const SearchBar = ({ statusRef, onTransitionEnd }: Props) => {
  return (
    <Container
      ref={statusRef}
      variant="dropdown"
      dataStatus="closed"
      onClick={(e) => e.stopPropagation()}
      onTransitionEnd={onTransitionEnd}
      className="fixed left-1/2 top-full w-[calc(100%-60px)] origin-top -translate-x-1/2 transition md:w-[600px]"
    >
      <div className="relative w-full">
        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500">
          <SearchIcon />
        </div>
        <TextInput name="search" variant="secondary" className="pl-9" />
      </div>
    </Container>
  )
}
