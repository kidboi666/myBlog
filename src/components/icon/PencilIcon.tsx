import cn from "@/src/lib/cn"

interface Props {
  className?: string
}

export const PencilIcon = ({ className }: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      className={cn("injected-svg", className)}
      role="img"
      strokeWidth="2"
      stroke="currentColor"
    >
      <path d="M17.9557 11.0206H6" strokeWidth="1.5" />
      <path d="M11.9766 11.0205V22.0458" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M9.48633 6.00879H14.4679" strokeWidth="1.5" strokeLinejoin="round" />
      <path
        d="M6.0625 22.0385V10.9339L11.9624 2.0484C11.9664 2.04249 11.975 2.04245 11.979 2.04832L17.9978 10.9339V22.0385"
        strokeWidth="1.5"
      />
    </svg>
  )
}
