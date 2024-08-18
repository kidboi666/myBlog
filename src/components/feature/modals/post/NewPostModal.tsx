import { useModal } from "@/src/store/useModal"

import Image from "next/image"
import { ChangeEvent, useState } from "react"
import { useQuery } from "@tanstack/react-query"

import { usePostBlog } from "@/src/services/mutate/post/usePostBlog"
import { usePostImage } from "@/src/services/mutate/post/usePostImage"
import { categoryQuery } from "@/src/services/queries/category/categoryQuery"
import { useInput } from "@/src/hooks/useInput"

import { TextInput } from "../../../shared/TextInput"
import { Button } from "../../../shared/Button"
import { TextAreaInput } from "../../../shared/TextAreaInput"
import { DropDown } from "../../../shared/DropDown/DropDown"
import { UploadImageButton } from "../../../icon/UploadImageIcon"
import { Text } from "../../../shared/Text"
import { ModalWrapper } from "../ModalWrapper"

export const NewPostModal = () => {
  const [name, onChangeName] = useInput("")
  const [content, onChangeContent] = useInput("")
  const [selectedCategory, setSelectedCategory] = useState({ id: 0, name: "" })
  const [image, setImage] = useState<File | null>(null)
  const [preview, setPreview] = useState("")
  const { type } = useModal()
  const { mutate: postImage, isPending: isPendingPostImage } = usePostImage()
  const { mutate: postBlog, isPending: isPendingPostBlog } = usePostBlog()
  const { data: categoryList } = useQuery(categoryQuery.queryOptions())

  const handleChangeFile = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setPreview(URL.createObjectURL(file))
      setImage(file)
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleCategoryChange = (selectCategory: Record<string, any>) => {
    setSelectedCategory({ id: selectCategory.id, name: selectCategory.name })
  }

  const handleSubmitPost = () => {
    if (!image) {
      postBlog({
        name,
        content,
        category: selectedCategory,
      })
    }
    postImage(
      { category: selectedCategory.id, image },
      {
        onSuccess: (data) => {
          postBlog({
            name,
            content,
            category: selectedCategory,
            image: data,
          })
        },
      },
    )
  }

  if (type !== "newPost") return null

  return (
    <ModalWrapper as="form" title="게시물 포스팅">
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
        placeholder="제목을 입력하세요."
        name="name"
        variant="secondary"
        value={name}
        onChange={onChangeName}
      />
      <TextAreaInput
        placeholder="내용을 입력하세요."
        name="content"
        variant="secondary"
        value={content}
        onChange={onChangeContent}
        className="min-h-40"
      />
      <DropDown
        itemList={categoryList}
        selectedItem={selectedCategory.name}
        listName="카테고리를 선택하세요."
        onClick={handleCategoryChange}
      />
      <Button
        isLoading={isPendingPostBlog || isPendingPostImage}
        disabled={!name || !content || !selectedCategory.id}
        onClick={handleSubmitPost}
      >
        데이터보내기
      </Button>
    </ModalWrapper>
  )
}
