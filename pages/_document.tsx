import { Html, Head, Main, NextScript } from "next/document"
import Script from "next/script"

const Document = () => {
  return (
    <Html lang="ko">
      <Head />
      <body>
        <Script type="module" defer src="https://cdn.jsdelivr.net/npm/ldrs/dist/auto/ring2.js" />
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

export default Document
