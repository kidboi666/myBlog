import useIntersect from "@/src/hooks/useIntersect"
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
  const [target, isIntersecting] = useIntersect<HTMLDivElement>({ threshold: 0.1 }, true)

  return (
    <Component
      ref={target}
      className={cn(isIntersecting && "animate-cardSlideDown", className)}
      {...props}
    >
      {children}
    </Component>
  )
}

interface ImageProps {
  src: StaticImageData | string
  alt: string
  innerClassName?: string
  className?: string
}

Card.Image = ({ src, alt, className, innerClassName }: ImageProps) => {
  return (
    <div className={cn("relative", className)}>
      <Image src={src} alt={alt} fill className={cn("rounded-2xl", innerClassName)} />
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
