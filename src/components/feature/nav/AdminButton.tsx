import Link from "next/link"
import { Button } from "../../shared/Button"

export const AdminButton = () => {
  return (
    <Link href="/admin">
      <Button variant="secondary">AdminPage</Button>
    </Link>
  )
}
