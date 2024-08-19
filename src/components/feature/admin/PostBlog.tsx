/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image"
import { ChangeEvent, useState } from "react"
import { useQuery } from "@tanstack/react-query"
import cn from "@/src/lib/cn"

import { Tables } from "@/src/models/supabase"
import { usePostBlog } from "@/src/services/mutate/post/usePostBlog"
import { usePostImage } from "@/src/services/mutate/post/usePostImage"
import { categoryQuery } from "@/src/services/queries/category/categoryQuery"
import { useInput } from "@/src/hooks/useInput"

import { TextInput } from "../../shared/TextInput"
import { Button } from "../../shared/Button"
import { TextAreaInput } from "../../shared/TextAreaInput"
import { DropDown } from "../../shared/DropDown/DropDown"
import { UploadImageButton } from "../../icon/UploadImageIcon"
import { Text } from "../../shared/Text"

export const PostBlog = ({ className }: { className: string }) => {
  const [name, onChangeName] = useInput("")
  const [content, onChangeContent] = useInput("")
  const [selectedCategory, setSelectedCategory] = useState({ id: 0, name: "" })
  const [selectedSubCategory, setSelectedSubCategory] = useState({ id: 0, name: "" })
  const [image, setImage] = useState<File | null>(null)
  const [preview, setPreview] = useState("")
  const { mutate: postImage, isPending: isPendingPostImage } = usePostImage()
  const { mutate: postBlog, isPending: isPendingPostBlog } = usePostBlog()
  const { data: categoryList } = useQuery(categoryQuery.parentCategory())
  const { data: subCategories } = useQuery(categoryQuery.subCategory())

  const handleChangeFile = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setPreview(URL.createObjectURL(file))
      setImage(file)
    }
  }

  const handleCategoryChange = (selectCategory: Record<string, any>) => {
    setSelectedCategory({ id: selectCategory.id, name: selectCategory.name })
  }

  const handleSubCategoryChange = (selectSubCategory: Record<string, any>) => {
    setSelectedSubCategory({ id: selectSubCategory.id, name: selectSubCategory.name })
  }

  const subCategoryList = subCategories?.filter(
    (category) => category.parent_category_id === selectedCategory.id,
  ) as Tables<"sub_category">[]

  const handleSubmitPost = () => {
    if (!image) {
      postBlog({
        name,
        content,
        selectedCategory,
        selectedSubCategory,
      })
    }
    postImage(
      { category: selectedSubCategory.id, image },
      {
        onSuccess: (data) => {
          postBlog({
            name,
            content,
            selectedCategory,
            selectedSubCategory,
            image: data,
          })
        },
      },
    )
  }

  return (
    <form className={cn(className)}>
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
      <TextInput name="name" variant="secondary" value={name} onChange={onChangeName} />
      <TextAreaInput
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
      {selectedCategory && (
        <DropDown
          itemList={subCategoryList}
          selectedItem={selectedSubCategory?.name}
          listName="하위 카테고리를 선택하세요."
          onClick={handleSubCategoryChange}
        />
      )}
      <Button
        isLoading={isPendingPostBlog || isPendingPostImage}
        disabled={!name || !content || !selectedCategory.id || !selectedSubCategory.id}
        onClick={handleSubmitPost}
      >
        데이터보내기
      </Button>
    </form>
  )
}
