import { Title } from "../../shared/Title/Title"
import { Container } from "../Container"
import { List } from "../List/List"
import { Button } from "../../shared/Button"

export const Header = () => {
  return (
    <Container as="header" className="fixed top-0 z-50 h-20 grid-cols-2 rounded-t-none">
      <Title className="text-base text-slate-500">ORIGINAL .</Title>
      <nav className="justify-self-end">
        <List className="flex gap-4">
          <List.Row>
            <Button variant="icon" className="transition-all">
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
            <Button variant="icon" className="transition-all">
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
