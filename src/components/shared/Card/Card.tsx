import cn from "@/src/lib/cn"
import Image, { StaticImageData } from "next/image"
import { ComponentProps, PropsWithChildren } from "react"

interface Props extends ComponentProps<"div"> {
  className?: string
}

export const Card = ({ className, children, ...props }: PropsWithChildren<Props>) => {
  return (
    <div
      className={cn("flex size-fit flex-col gap-4 rounded-2xl bg-blue-200 p-4", className)}
      {...props}
    >
      {children}
    </div>
  )
}

interface ImageProps {
  src: StaticImageData
  alt: string
  className?: string
}

Card.Image = ({ src, alt, className }: ImageProps) => {
  return (
    <div className={cn("relative w-full", className)}>
      <Image src={src} alt={alt} fill className="rounded-2xl object-cover" />
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
