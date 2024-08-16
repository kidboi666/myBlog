import Link from "next/link"
import { Title } from "../../shared/Title"

export const LogoButton = () => {
  return (
    <Link href="/">
      <Title lang="en" className="text-base text-slate-500">
        ORIGINAL .
      </Title>
    </Link>
  )
}
