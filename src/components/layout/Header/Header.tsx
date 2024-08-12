import { useState } from "react"
import { Title } from "../../shared/Title/Title"
import { Container } from "../Container"
import { List } from "../List/List"
import { Button } from "../../shared/Button"
import { TextInput } from "../../shared/TextInput"

export const Header = () => {
  const [isOpenSearch, setOpenSearch] = useState(false)
  const [isOpenMenu, setOpenMenu] = useState(false)

  return (
    <Container as="header" className="fixed top-0 z-50 h-fit grid-cols-2 rounded-t-none py-6">
      <Title className="text-base text-slate-500">ORIGINAL .</Title>
      <nav className="justify-self-end">
        <List className="flex items-center gap-4">
          {isOpenSearch && (
            <TextInput
              name="search"
              className="w-80 rounded-3xl border border-slate-100 bg-slate-100 px-4 py-2 outline-none focus:border-slate-300"
            />
          )}
          {isOpenMenu && (
            <List className="flex items-center gap-4 self-center">
              <List.Row>
                <Button variant="secondary">Blog</Button>
              </List.Row>
              <List.Row>
                <Button variant="secondary">PortFolio</Button>
              </List.Row>
              <List.Row>
                <Button variant="secondary">Guest</Button>
              </List.Row>
            </List>
          )}
          <List.Row className="self-aut">
            <Button
              variant="icon"
              onClick={() => setOpenSearch((prev) => !prev)}
              className="transition-all"
            >
              <span className="sr-only">Search</span>
              <svg
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="m19 19-3.5-3.5" />
                <circle cx="11" cy="11" r="6" />
              </svg>
            </Button>
          </List.Row>
          <List.Row>
            <Button
              variant="icon"
              onClick={() => setOpenMenu((prev) => !prev)}
              className="transition-all"
            >
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
          </List.Row>
        </List>
      </nav>
    </Container>
  )
}
