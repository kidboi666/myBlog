import { PropsWithChildren, ReactNode } from "react"

interface Props {
  Header?: ReactNode
  Footer?: ReactNode
}

export const AppLayout = ({ children, Header, Footer }: PropsWithChildren<Props>) => {
  return (
    <div className="relative flex min-h-dvh flex-col gap-12 gradient-move dark:gradient-move-dark">
      {Header}
      <main className="flex w-full flex-1 flex-col items-center justify-center gap-12 px-0 lg:px-28 xl:px-40">
        {children}
      </main>
      {Footer}
    </div>
  )
}
