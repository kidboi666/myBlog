import { useForm } from "react-hook-form"
import { supabase } from "@/src/lib/Supabase"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "@/src/components/shared/Button"
import { signInSchema } from "@/src/lib/validators/auth"
import { ISignInForm } from "@/src/models/auth"
import { AuthForm } from "@/src/components/feature/auth/AuthForm"
import { GithubButton } from "@/src/components/feature/auth/providers/GithubButton"
import Link from "next/link"
import { Line } from "@/src/components/shared/Line"

const SignIn = () => {
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
    const { data, error } = await supabase.auth.signInWithPassword({
      email: authData.email,
      password: authData.password,
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
    <div className="flex h-screen w-screen flex-col items-center justify-center gap-4 text-sm">
      <form
        onSubmit={handleSubmit(handleSubmitSignIn)}
        className="flex w-80 flex-col gap-4 text-sm"
      >
        <AuthForm
          name="이메일"
          type="email"
          register={register("email")}
          dirtyField={dirtyFields.email}
          error={errors.email}
        />

        <AuthForm
          name="비밀번호"
          type="password"
          register={register("password")}
          dirtyField={dirtyFields.password}
          error={errors.password}
        />

        <Button isSubmit>로그인</Button>
        <div className="flex justify-between text-xs">
          <Button variant="teritory">비밀번호 재설정</Button>
          <Button variant="teritory">
            <Link href="/auth/signup">계정 만들기</Link>
          </Button>
        </div>
        <Line className="border-[0.1px]" />
      </form>
      <GithubButton onSignUpToGithub={handleSignUpToGithub} />
    </div>
  )
}

export default SignIn
