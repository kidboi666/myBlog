import { Button } from "@/src/components/shared/Button"
import { PropsWithChildren } from "react"
import { GithubIcon } from "../../icon/GithubIcon"

interface Props {
  onSignUpToGithub: () => void
}

export const GithubButton = ({ onSignUpToGithub, children }: PropsWithChildren<Props>) => {
  return (
    <Button variant="secondary" onClick={onSignUpToGithub} className="w-full justify-self-center">
      <GithubIcon size={20} />
      {children}
    </Button>
  )
}
