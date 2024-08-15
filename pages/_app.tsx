import type { AppProps } from "next/app"
import { useState } from "react"
import { QueryClientProvider } from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import { queryClient } from "@/src/lib/ReactQuery"
import "@/src/styles/globals.css"
import "@/src/styles/fonts.css"

const App = ({ Component, pageProps }: AppProps) => {
  const [QueryClient] = useState(queryClient)

  return (
    <QueryClientProvider client={QueryClient}>
      <Component {...pageProps} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}

export default App
