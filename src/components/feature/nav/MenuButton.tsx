import { ComponentPropsWithRef, forwardRef, PropsWithRef } from "react"
import { Button } from "../../shared/Button"

export const MenuButton = forwardRef<HTMLButtonElement, ComponentPropsWithRef<"button">>(
  ({ onClick }, ref) => {
    return (
      <Button variant="icon" ref={ref} onClick={onClick}>
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
  },
)
