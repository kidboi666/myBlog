import Image from "next/image"
import { ChangeEvent, FormEvent, useState } from "react"
import cn from "@/src/lib/cn"
import { useAddCategory } from "@/src/services/mutate/category/useAddCategory"
import { useInput } from "@/src/hooks/useInput"
import { Button } from "../../shared/Button"
import { TextInput } from "../../shared/TextInput"
import { UploadImageButton } from "../../icon/UploadImageIcon"
import { Text } from "../../shared/Text"

export const PostCategory = ({ className }: { className: string }) => {
  const [categoryName, onChangeCategoryName] = useInput("")
  const [imageUrl, onChangeImageUrl] = useInput("")
  const [image, setImage] = useState<File | null>(null)
  const [preview, setPreview] = useState("")
  const { mutate, isPending } = useAddCategory()

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    mutate({ name: categoryName, icon: imageUrl })
  }

  const handleChangeFile = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setPreview(URL.createObjectURL(file))
      setImage(file)
    }
  }

  return (
    <form onSubmit={(e) => handleSubmit(e)} className={cn(className)}>
      <Button className="relative flex flex-col p-2 ring-1 ring-slate-200" variant="icon">
        {preview ? (
          <Image src={preview} alt="sdf" width={200} height={200} />
        ) : (
          <UploadImageButton />
        )}
        <input
          name="image"
          onChange={handleChangeFile}
          type="file"
          accept="image/*"
          className="absolute inset-0 opacity-0"
        />
        <Text variant="caption">{preview ? image?.name : "이미지 파일 선택"}</Text>
      </Button>
      <TextInput
        variant="secondary"
        onChange={onChangeImageUrl}
        placeholder="이미지 주소를 입력하세요."
      />
      <TextInput
        variant="secondary"
        onChange={onChangeCategoryName}
        placeholder="카테고리 이름을 입력하세요."
      />
      <Button isLoading={isPending} disabled={!categoryName} isSubmit className="w-full">
        카테고리 만들기
      </Button>
    </form>
  )
}
