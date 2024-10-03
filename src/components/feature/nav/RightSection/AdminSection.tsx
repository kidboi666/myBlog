import { AdminIcon } from "@/src/components/icon/AdminIcon"
import { SettingIcon } from "@/src/components/icon/SettingIcon"
import { WriteIcon } from "@/src/components/icon/WriteIcon"
import { List } from "@/src/components/layout/List"
import { Button } from "@/src/components/shared/Button"
import { meQuery } from "@/src/services/queries/auth/meQuery"
import { useQuery } from "@tanstack/react-query"
import { useRouter } from "next/router"

export const AdminSection = () => {
  const { data: admin } = useQuery(meQuery.getUserInfo())

  const router = useRouter()

  const handleAdminButtonClick = () => {
    router.push("/admin")
  }

  const handleSettingButtonClick = () => {
    router.push("/admin/admin_page")
  }

  const handleWriteButtonClick = () => {
    router.push("/write")
  }

  if (admin) {
    return (
      <>
        <List.Row>
          <Button variant="icon" onClick={handleWriteButtonClick}>
            <WriteIcon />
          </Button>
        </List.Row>
        <List.Row>
          <Button variant="icon" onClick={handleSettingButtonClick}>
            <SettingIcon />
          </Button>
        </List.Row>
      </>
    )
  }

  return (
    <List.Row>
      <Button variant="icon" onClick={handleAdminButtonClick}>
        <AdminIcon />
      </Button>
    </List.Row>
  )
}
