import { RefObject } from "react"
import { Container } from "../../layout/Container"
import { TextInput } from "../../shared/TextInput"
import { SearchIcon } from "../../icon/SearchIcon"

interface Props {
  statusRef: RefObject<HTMLElement>
}

export const SearchBar = ({ statusRef }: Props) => {
  return (
    <Container
      ref={statusRef}
      variant="dropdown"
      dataStatus="closed"
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
