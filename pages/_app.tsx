import "@/src/styles/globals.css"
import "@/src/styles/fonts.css"
import type { AppProps } from "next/app"

const App = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />
}

export default App
