import Image from "next/image"
import { Container } from "../../layout/Container"
import { useInput } from "@/src/hooks/useInput"
import { ChangeEvent, useEffect, useState } from "react"

import { usePostBlog } from "@/src/services/mutate/post/usePostBlog"
import { usePostImage } from "@/src/services/mutate/post/usePostImage"
import { TextInput } from "../../shared/TextInput"
import { Button } from "../../shared/Button"
import { useQuery } from "@tanstack/react-query"
import { categoryQuery } from "@/src/services/queries/category/categoryQuery"
import { Tables } from "@/src/models/supabase"

export const PostBlog = () => {
  const [title, onChangeTitle] = useInput("")
  const [content, onChangeContent] = useInput("")
  const [category, setCategory] = useState({ id: 0, name: "" })
  const [image, setImage] = useState<File | null>()
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

  const handleCategoryChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const selectedCategoryId = parseInt(e.target.value)
    const selectedCategoryName = categoryList!.find(
      (category) => category.id === selectedCategoryId,
    )!
    setCategory(selectedCategoryName)
  }

  const handleSubmitPost = () => {
    if (!image) {
      postBlog({
        title,
        content,
        category,
      })
    }
    postImage(
      { category: category.name, image },
      {
        onSuccess: (data) => {
          console.log(data)
          postBlog({
            title,
            content,
            category,
            image: data,
          })
        },
      },
    )
  }

  return (
    <Container className="mb-40">
      <div className="flex flex-col gap-4">
        {preview && <Image src={preview} alt="sdf" width={200} height={200} />}
        <input onChange={handleChangeFile} type="file" accept="image/*" />
        <TextInput name="title" variant="search" value={title} onChange={onChangeTitle} />
        <TextInput name="content" variant="search" value={content} onChange={onChangeContent} />
        <select onChange={handleCategoryChange}>
          {categoryList?.map((category) => <option value={category.id}>{category.name}</option>)}
        </select>
        <Button
          isLoading={isPendingPostBlog || isPendingPostImage}
          disabled={!title || !content || !category}
          onClick={handleSubmitPost}
        >
          데이터보내기
        </Button>
      </div>
    </Container>
  )
}
