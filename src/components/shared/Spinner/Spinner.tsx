import { ring2 } from "ldrs"

interface Props {
  size: Size
}

export enum Size {
  s = "20",
  m = "40",
  l = "60",
}

export const Spinner = ({ size = Size.m }: Props) => {
  ring2.register()

  return (
    <l-ring-2
      size={size}
      stroke="3"
      stroke-length="0.25"
      bg-opacity="0.1"
      speed="0.8"
      color="black"
    />
  )
}
