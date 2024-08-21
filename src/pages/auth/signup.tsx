import Link from "next/link"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { signUpSchema } from "@/src/lib/validators/auth"
import { ISignUpForm } from "@/src/models/auth"
import { useSignInOAuth } from "@/src/services/mutate/auth/useSignInOAuth"
import { useSignUp } from "@/src/services/mutate/auth/useSignUp"

import { GithubButton } from "@/src/components/feature/auth/GithubButton"
import { AuthForm } from "@/src/components/feature/auth/AuthForm"
import { Button } from "@/src/components/shared/Button"
import { Line } from "@/src/components/shared/Line"
import { Text } from "@/src/components/shared/Text"
import { Title } from "@/src/components/shared/Title"

const SignUp = () => {
  const { mutate: signInOAuth } = useSignInOAuth()
  const { mutate: signUp } = useSignUp()
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, dirtyFields },
  } = useForm<ISignUpForm>({
    resolver: zodResolver(signUpSchema),
    mode: "onBlur",
    defaultValues: {
      email: "",
      nickname: "",
      password: "",
      passwordConfirmation: "",
    },
  })

  const handleSubmitSignUp = async (authData: ISignUpForm) => {
    signUp(authData, {
      onError: (error) => {
        setError("email", {
          type: "validateError",
          message: error.message,
        })
      },
    })
  }

  const handleSignUpToGithub = async () => {
    signInOAuth()
  }

  return (
    <div className="flex h-screen items-center justify-center">
      <form
        onSubmit={handleSubmit(handleSubmitSignUp)}
        className="flex w-96 flex-col gap-6 text-sm"
      >
        <Title className="self-center">회원가입</Title>
        <div className="flex gap-2 self-end">
          <Text variant="caption">계정이 이미 있으신가요?</Text>
          <Button variant="teritory" className="p-0 text-xs">
            <Link href="/auth/signin">로그인 하러가기</Link>
          </Button>
        </div>
        <AuthForm
          name="이메일"
          type="email"
          register={register("email")}
          dirtyField={dirtyFields.email}
          error={errors.email}
        />
        <AuthForm
          name="닉네임"
          type="nickname"
          register={register("nickname")}
          dirtyField={dirtyFields.nickname}
          error={errors.nickname}
        />
        <AuthForm
          name="비밀번호"
          type="password"
          register={register("password")}
          dirtyField={dirtyFields.password}
          error={errors.password}
        />
        <AuthForm
          name="비밀번호 확인"
          type="password"
          register={register("passwordConfirmation")}
          dirtyField={dirtyFields.passwordConfirmation}
          error={errors.passwordConfirmation}
        />
        <Button isSubmit>회원가입</Button>
        <div className="relative">
          <Line className="border-[0.1px]" />
          <Text
            variant="caption"
            className="absolute -top-2 left-1/2 -translate-x-1/2 bg-white px-2"
          >
            소셜 회원가입
          </Text>
        </div>
        <GithubButton onSignUpToGithub={handleSignUpToGithub}>깃허브로 회원가입</GithubButton>
      </form>
    </div>
  )
}

export default SignUp
