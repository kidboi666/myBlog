import { PropsWithChildren } from "react"

export default function Button({ children }: PropsWithChildren) {
  return (
    <button type="button" onClick={() => console.log("asdf")}>
      {children}
    </button>
  )
}
