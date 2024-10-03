import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { signInSchema } from "@/src/lib/validators/auth"
import { ISignInForm } from "@/src/models/auth"
import { useSignIn } from "@/src/services/mutate/auth/useSignIn"

import { AuthForm } from "@/src/components/feature/auth/AuthForm"
import { Title } from "@/src/components/shared/Title"
import { Button } from "@/src/components/shared/Button"
import { useRouter } from "next/router"
import { ArrowHeadIcon } from "@/src/components/icon/ArrowHeadIcon"

const SignIn = () => {
  const router = useRouter()
  const { mutate: signIn, isPending: isPendingSignIn, isSuccess: isSuccessSignIn } = useSignIn()

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, dirtyFields },
  } = useForm<ISignInForm>({
    resolver: zodResolver(signInSchema),
    mode: "onBlur",
    defaultValues: {
      email: "dolosolo@naver.com",
      password: "",
    },
  })

  const handleSubmitSignIn = async (authData: ISignInForm) => {
    signIn(authData, {
      onError: (error) => {
        setError("email", {
          type: "validateError",
          message: error.message,
        })
      },
    })
  }

  return (
    <div className="flex h-screen flex-col items-center justify-center dark:bg-slate-800">
      <form
        onSubmit={handleSubmit(handleSubmitSignIn)}
        className="relative flex w-full flex-col gap-6 px-2 text-sm md:w-96"
      >
        <Button variant="icon" onClick={() => router.back()} className="absolute -top-8 p-2">
          <ArrowHeadIcon className="left-0 rotate-90" />
          뒤로가기
        </Button>
        <Title className="self-center">관리자 로그인</Title>
        <div className="flex flex-col">
          <AuthForm
            name="비밀번호"
            type="password"
            register={register("password")}
            dirtyField={dirtyFields.password}
            error={errors.password}
          />
        </div>
        <Button isSubmit isLoading={isPendingSignIn} disabled={isSuccessSignIn}>
          로그인
        </Button>
      </form>
    </div>
  )
}

export default SignIn
