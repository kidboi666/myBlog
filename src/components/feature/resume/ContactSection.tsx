import Link from "next/link"
import { List } from "../../layout/List"
import { Text } from "../../shared/Text"
import { Title } from "../../shared/Title"

export const ContactSection = () => {
  return (
    <article className="flex flex-col gap-12">
      <Title variant="resume">연락처.</Title>

      <List className="list-inside list-disc">
        <Text as="div" className="flex flex-col gap-2">
          <List.Row>HP : 010-9383-4485</List.Row>
          <List.Row>e-mail : sleepnowinthefire66@gmail.com</List.Row>
          <List.Row>
            Github : <Link href="https://github.com/kidboi666">https://github.com/kidboi666</Link>
          </List.Row>
        </Text>
      </List>
    </article>
  )
}
