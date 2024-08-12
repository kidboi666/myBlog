import cn from "@/src/lib/cn"
import Image, { StaticImageData } from "next/image"
import { ComponentProps, ElementType, PropsWithChildren } from "react"

interface Props extends ComponentProps<"div"> {
  as?: ElementType
  className?: string
}

export const Card = ({
  as: Component = "div",
  className,
  children,
  ...props
}: PropsWithChildren<Props>) => {
  return (
    <Component
      className={cn(
        "transition-slow flex h-full w-full flex-col gap-4 rounded-2xl bg-blue-200 p-4 hover:-translate-y-2 hover:shadow-lg",
        className,
      )}
      {...props}
    >
      {children}
    </Component>
  )
}

interface ImageProps {
  src: StaticImageData
  alt: string
  innerClassName?: string
  className?: string
}

Card.Image = ({ src, alt, className, innerClassName }: ImageProps) => {
  return (
    <div className={cn("relative", className)}>
      <Image src={src} alt={alt} fill className={cn("rounded-2xl object-cover", innerClassName)} />
    </div>
  )
}

interface ContentProps extends ComponentProps<"div"> {
  className?: string
}

Card.Content = ({ className, children, ...props }: PropsWithChildren<ContentProps>) => {
  return (
    <div className={cn(className)} {...props}>
      {children}
    </div>
  )
}
