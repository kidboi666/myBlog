import Link from "next/link"
import { useForm } from "react-hook-form"
import { supabase } from "@/src/lib/Supabase"
import { zodResolver } from "@hookform/resolvers/zod"
import { signUpSchema } from "@/src/lib/validators/auth"
import { ISignUpForm } from "@/src/models/auth"
import { Button } from "@/src/components/shared/Button"
import { AuthForm } from "@/src/components/feature/auth/AuthForm"
import { Line } from "@/src/components/shared/Line"
import { Text } from "@/src/components/shared/Text"
import { GithubButton } from "@/src/components/feature/auth/GithubButton"
import { Title } from "@/src/components/shared/Title"

const SignUp = () => {
  const {
    register,
    handleSubmit,
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
    const { data, error } = await supabase.auth.signUp({
      email: authData.email,
      password: authData.password,
      options: {
        data: {
          nickname: authData.nickname,
        },
      },
    })
  }

  const handleSignUpToGithub = async () => {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "github",
      options: {
        redirectTo: "http://localhost:3000",
      },
    })
  }

  return (
    <div className="flex h-screen items-center justify-center">
      <form
        onSubmit={handleSubmit(handleSubmitSignUp)}
        className="flex w-80 flex-col gap-6 text-sm"
      >
        <Title className="self-center">회원가입</Title>
        <div className="flex gap-2 self-end">
          <Text variant="caption">계정이 이미 있으신가요?</Text>
          <Button variant="teritory" className="text-xs">
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
