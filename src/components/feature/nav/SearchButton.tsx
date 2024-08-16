import { Dispatch, SetStateAction } from "react"
import { Button } from "../../shared/Button"

interface Props {
  setOpenSearch: Dispatch<SetStateAction<boolean>>
}

export const SearchButton = ({ setOpenSearch }: Props) => {
  return (
    <Button
      variant="icon"
      onClick={() => setOpenSearch((prev) => !prev)}
      className="transition-fast"
    >
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
  )
}
