/* eslint-disable react/prop-types */
/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react/no-children-prop */
import cn from "@/src/lib/cn"
import Image from "next/image"
import { Children, isValidElement, PropsWithChildren } from "react"
import Md from "react-markdown"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism"
import rehypeRaw from "rehype-raw"
import remarkGfm from "remark-gfm"

const h1 = ({ children }: PropsWithChildren) => {
  return (
    <h3 className="mb-[0.6em] mt-[1em] text-3xl font-bold">
      {Children.map(children, (child) => {
        if (typeof child === "string") return child

        if (isValidElement(child) && child.props.node.tagName === "code") {
          return (
            <code className="rounded-[0.3em] bg-slate-200 px-[0.3em] py-[0.2em] text-blue-400">
              {child.props.children}
            </code>
          )
        }
        return child
      })}
    </h3>
  )
}
const h2 = ({ children }: PropsWithChildren) => {
  return (
    <h3 className="mb-[0.6em] mt-[1em] text-2xl font-bold">
      {Children.map(children, (child) => {
        if (typeof child === "string") return child

        if (isValidElement(child) && child.props.node.tagName === "code") {
          return (
            <code className="rounded-[0.3em] bg-slate-200 px-[0.3em] py-[0.2em] text-blue-400">
              {child.props.children}
            </code>
          )
        }
        return child
      })}
    </h3>
  )
}
const h3 = ({ children }: PropsWithChildren) => {
  return (
    <h3 className="mb-[0.6em] mt-[1em] text-xl font-bold">
      {Children.map(children, (child) => {
        if (typeof child === "string") return child

        if (isValidElement(child) && child.props.node.tagName === "code") {
          return (
            <code className="rounded-[0.3em] bg-slate-200 px-[0.3em] py-[0.2em] text-blue-400">
              {child.props.children}
            </code>
          )
        }
        return child
      })}
    </h3>
  )
}
const aside = ({ children }: PropsWithChildren) => (
  <aside className="mb-[0.5em] mt-[0.5em] rounded-[0.3em] bg-slate-200 p-[1em]">{children}</aside>
)
const p = ({ children }: PropsWithChildren) => (
  <p className="mb-[0.3em] mt-[0.3em] leading-[1.5]">{children}</p>
)
const table = ({ children }: PropsWithChildren) => (
  <table className="w-full font-light">{children}</table>
)
const thead = ({ children }: PropsWithChildren) => <thead className="">{children}</thead>
const th = ({ children }: PropsWithChildren) => (
  <th className="border border-slate-300 p-[0.4em]">{children}</th>
)
const tr = ({ children }: PropsWithChildren) => (
  <tr className="border border-slate-300 p-[0.4em]">{children}</tr>
)
const td = ({ children }: PropsWithChildren) => (
  <td className="border border-slate-300 p-[0.4em]">{children}</td>
)

interface Props {
  text: string
  showLine?: boolean
}

const Markdown = ({ text, showLine = false }: Props) => {
  return (
    <Md
      remarkPlugins={[remarkGfm]}
      rehypePlugins={[rehypeRaw]}
      components={{
        h1,
        h2,
        h3,
        aside,
        p,
        table,
        thead,
        th,
        tr,
        td,
        a: ({ children, node, href, ...rest }) => {
          return (
            <a
              href={href}
              {...rest}
              style={{
                color: "#4776b2",
                fontWeight: "bold",
                marginTop: "0.3em",
                marginBottom: "0.3em",
              }}
            >
              {children}
            </a>
          )
        },
        code: ({ children, className, node, ...rest }) => {
          const match = /language-(\w+)/.exec(className || "")
          return match ? (
            <SyntaxHighlighter
              PreTag="div"
              children={String(children).replace(/\n$/, "")}
              language={match[1]}
              style={oneDark}
              showLineNumbers={showLine}
              useInlineStyles
            />
          ) : (
            <code
              {...rest}
              className={cn(
                "rounded-[0.3em] bg-slate-200 px-[0.3em] py-[0.1em] text-blue-400",
                className,
              )}
            >
              {children}
            </code>
          )
        },
        img: (image) => (
          <Image src={image.src || ""} alt={image.alt || ""} width={500} height={300} />
        ),
      }}
    >
      {text}
    </Md>
  )
}

export default Markdown
