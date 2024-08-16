import Image from "next/image"
import { ChangeEvent, useState } from "react"
import { useQuery } from "@tanstack/react-query"
import cn from "@/src/lib/cn"

import { usePostBlog } from "@/src/services/mutate/post/usePostBlog"
import { usePostImage } from "@/src/services/mutate/post/usePostImage"
import { categoryQuery } from "@/src/services/queries/category/categoryQuery"
import { useInput } from "@/src/hooks/useInput"

import { TextInput } from "../../shared/TextInput"
import { Button } from "../../shared/Button"
import { TextAreaInput } from "../../shared/TextAreaInput"
import { DropDown } from "../../shared/DropDown/DropDown"

export const PostBlog = ({ className }: { className: string }) => {
  const [title, onChangeTitle] = useInput("")
  const [content, onChangeContent] = useInput("")
  const [selectedCategory, setSelectedCategory] = useState({ id: 0, name: "" })
  const [image, setImage] = useState<File | null>(null)
  const [preview, setPreview] = useState("")
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

  const handleCategoryChange = (selectCategory: Record<string, string | number>) => {
    setSelectedCategory(categoryList!.find((category) => category.id === selectCategory.id)!)
  }

  const handleSubmitPost = () => {
    if (!image) {
      postBlog({
        title,
        content,
        category: selectedCategory,
      })
    }
    postImage(
      { category: selectedCategory.id, image },
      {
        onSuccess: (data) => {
          postBlog({
            title,
            content,
            category: selectedCategory,
            image: data,
          })
        },
      },
    )
  }

  return (
    <form className={cn(className)}>
      {preview && <Image src={preview} alt="sdf" width={200} height={200} />}
      <Button className="relative h-10">
        <input
          onChange={handleChangeFile}
          type="file"
          accept="image/*"
          className="cursur-pointer absolute inset-0 opacity-0"
        />
        파일 선택
      </Button>
      <TextInput name="title" variant="secondary" value={title} onChange={onChangeTitle} />
      <TextAreaInput
        name="content"
        variant="secondary"
        value={content}
        onChange={onChangeContent}
      />
      <DropDown
        itemList={categoryList}
        selectedItem={selectedCategory.name}
        listName="카테고리를 선택하세요."
        onClick={handleCategoryChange}
      />
      <Button
        isLoading={isPendingPostBlog || isPendingPostImage}
        disabled={!title || !content || !selectedCategory}
        onClick={handleSubmitPost}
      >
        데이터보내기
      </Button>
    </form>
  )
}
