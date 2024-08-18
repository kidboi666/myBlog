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
  const [target, isIntersecting] = useIntersect<HTMLDivElement>({ threshold: 0.1 })

  return (
    <Component
      ref={target}
      className={cn(
        "flex h-full w-full cursor-pointer flex-col gap-6 rounded-2xl p-6 opacity-0 transition-fast hover:-translate-y-2 hover:shadow-lg md:flex-row",
        isIntersecting && "animate-cardSlideDown",
        className,
      )}
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
    <div className={cn("relative flex-shrink-0", className)}>
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
