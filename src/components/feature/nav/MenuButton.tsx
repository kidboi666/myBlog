import { Dispatch, SetStateAction } from "react"
import { Button } from "../../shared/Button"

interface Props {
  setOpenMenu: Dispatch<SetStateAction<boolean>>
}

export const MenuButton = ({ setOpenMenu }: Props) => {
  return (
    <Button variant="icon" onClick={() => setOpenMenu((prev) => !prev)} className="transition-fast">
      <span className="sr-only">Menu</span>
      <svg width="24" height="24">
        <path
          d="M5 6h14M5 12h14M5 18h14"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    </Button>
  )
}
