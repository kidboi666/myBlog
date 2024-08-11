import Image from "next/image"
import { Title } from "../../shared/Title/Title"
import { Container } from "../Container"
import { List } from "../List/List"
import { Button } from "../../shared/Button"

export const Header = () => {
  return (
    <Container as="header" className="fixed top-0 h-20 justify-between rounded-t-none">
      <Title className="text-base text-slate-500">ORIGINAL .</Title>
      <nav>
        <List className="flex gap-4">
          <List.Row>
            <Button variant="icon">
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
            <Button variant="icon">
              <svg width="24" height="24">
                <path
                  d="M5 6h14M5 12h14M5 18h14"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                ></path>
              </svg>
            </Button>
          </List.Row>
        </List>
      </nav>
    </Container>
  )
}
