import cn from "@/src/lib/cn"

interface Props {
  size: number
  className?: string
}

export const KebabIcon = ({ size, className }: Props) => {
  return (
    <svg
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("text-foreground-lighter", className)}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7 12.5a2.5 2.5 0 11-5.001-.001A2.5 2.5 0 017 12.5zm7.5 0a2.5 2.5 0 11-5.001-.001 2.5 2.5 0 015.001.001zm7.5 0a2.5 2.5 0 11-5.001-.001A2.5 2.5 0 0122 12.5z"
        fill="currentColor"
      />
    </svg>
  )
}
