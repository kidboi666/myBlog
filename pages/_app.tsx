import type { AppProps } from "next/app"
import { useState } from "react"
import { QueryClientProvider } from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import { queryClient } from "@/src/lib/ReactQuery"
import { Modal } from "@/src/components/feature/modals/Modal"
import { Toast } from "@/src/components/shared/Toast/Toast"
import { Portal } from "@/src/components/shared/Portal/Portal"
import "@/src/styles/globals.css"
import "@/src/styles/fonts.css"

const App = ({ Component, pageProps }: AppProps) => {
  const [QueryClient] = useState(queryClient)

  return (
    <QueryClientProvider client={QueryClient}>
      <Component {...pageProps} />
      <Portal>
        <Modal />
        <Toast />
      </Portal>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}

export default App
