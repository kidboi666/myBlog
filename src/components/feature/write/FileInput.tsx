import { ChangeEvent, Dispatch, SetStateAction, useRef, useState } from "react"
import Image from "next/image"
import cn from "@/src/lib/cn"
import { Xicon } from "../../icon/XIcon"
import { UploadImageButton } from "../../icon/UploadImageIcon"
import { Button } from "../../shared/Button"
import { Text } from "../../shared/Text"

interface Props {
  preview: string
  setPreview: Dispatch<SetStateAction<string>>
  onChangeFile: (e: ChangeEvent<HTMLInputElement>) => void
  image: File | null
  className?: string
}

export const FileInput = ({ preview, setPreview, onChangeFile, image, className }: Props) => {
  const [showCancelButton, setShowCancelButton] = useState(false)
  const imageInput = useRef<HTMLInputElement>(null)

  const handlePickClick = () => {
    if (imageInput.current) {
      imageInput.current.click()
    }
  }

  return (
    <Button
      variant="icon"
      onMouseEnter={() => setShowCancelButton(true)}
      onMouseLeave={() => setShowCancelButton(false)}
      onClick={handlePickClick}
      className={cn("h-40 ring-1 ring-slate-300 dark:ring-slate-600", className)}
    >
      {preview && showCancelButton && (
        <Button
          variant="icon"
          onClick={() => setPreview("")}
          className="absolute inset-0 z-10 flex items-center justify-center gap-4 rounded-lg text-white opacity-90"
        >
          <Xicon className="h-10 w-10" />
        </Button>
      )}
      {preview ? (
        <Image src={preview} alt="sdf" fill className="rounded-lg object-cover" />
      ) : (
        <UploadImageButton />
      )}
      <input
        name="image"
        onChange={onChangeFile}
        type="file"
        accept="image/*"
        className="hidden"
        ref={imageInput}
      />
      <Text variant="caption" className="group-hover:text-white dark:group-hover:text-slate-500">
        {preview ? image?.name : "커버 이미지 파일 선택"}
      </Text>
    </Button>
  )
}
