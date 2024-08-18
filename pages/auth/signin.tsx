import Link from "next/link"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { signInSchema } from "@/src/lib/validators/auth"
import { ISignInForm } from "@/src/models/auth"
import { useSignIn } from "@/src/services/mutate/auth/useSignIn"
import { useSignInOAuth } from "@/src/services/mutate/auth/useSignInOAuth"

import { AuthForm } from "@/src/components/feature/auth/AuthForm"
import { GithubButton } from "@/src/components/feature/auth/GithubButton"
import { Line } from "@/src/components/shared/Line"
import { Text } from "@/src/components/shared/Text"
import { Title } from "@/src/components/shared/Title"
import { Button } from "@/src/components/shared/Button"

const SignIn = () => {
  const { mutate: signIn } = useSignIn()
  const { mutate: signInOAuth } = useSignInOAuth()
  const {
    register,
    handleSubmit,
    formState: { errors, dirtyFields },
  } = useForm<ISignInForm>({
    resolver: zodResolver(signInSchema),
    mode: "onBlur",
    defaultValues: {
      email: "",
      password: "",
    },
  })

  const handleSubmitSignIn = async (authData: ISignInForm) => {
    signIn(authData)
  }

  const handleSignInToGithub = async () => {
    signInOAuth()
  }

  return (
    <div className="flex h-screen items-center justify-center">
      <form
        onSubmit={handleSubmit(handleSubmitSignIn)}
        className="flex w-96 flex-col gap-6 text-sm"
      >
        <Title className="self-center">로그인</Title>
        <div className="flex gap-2 self-end">
          <Text variant="caption">계정이 없으신가요?</Text>
          <Button variant="teritory" className="text-xs">
            <Link href="/auth/signup">계정 만들기</Link>
          </Button>
        </div>
        <div className="flex flex-col">
          <AuthForm
            name="이메일"
            type="email"
            register={register("email")}
            dirtyField={dirtyFields.email}
            error={errors.email}
          />
        </div>

        <div className="flex flex-col">
          <AuthForm
            name="비밀번호"
            type="password"
            register={register("password")}
            dirtyField={dirtyFields.password}
            error={errors.password}
          />
        </div>
        <Button isSubmit>로그인</Button>
        <div className="relative">
          <Line className="border-[0.1px]" />
          <Text
            variant="caption"
            className="absolute -top-2 left-1/2 -translate-x-1/2 bg-white px-2"
          >
            소셜 로그인
          </Text>
        </div>
        <GithubButton onSignUpToGithub={handleSignInToGithub}>깃허브로 로그인</GithubButton>
      </form>
    </div>
  )
}

export default SignIn
