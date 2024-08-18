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
      dataStatus="closed"
      className="status-popup fixed left-1/2 top-8 z-30 w-[calc(100%-60px)] origin-top -translate-x-1/2 shadow-2xl transition md:w-[600px]"
    >
      <div className="relative h-8 w-full">
        <div className="absolute left-1.5 top-1.5">
          <SearchIcon />
        </div>
        <TextInput name="search" variant="secondary" className="pl-9" />
      </div>
    </Container>
  )
}
