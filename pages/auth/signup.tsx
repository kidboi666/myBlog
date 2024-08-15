import { useForm } from "react-hook-form"
import { supabase } from "@/src/lib/Supabase"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "@/src/components/shared/Button"
import { signUpSchema } from "@/src/lib/validators/auth"
import { ISignUpForm } from "@/src/models/auth"
import { AuthForm } from "@/src/components/feature/auth/AuthForm"
import { GithubButton } from "@/src/components/feature/auth/providers/GithubButton"

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

  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center gap-4 text-sm">
      <form
        onSubmit={handleSubmit(handleSubmitSignUp)}
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
      </form>
    </div>
  )
}

export default SignUp
