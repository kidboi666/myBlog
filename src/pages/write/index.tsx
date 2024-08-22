import { useQuery } from "@tanstack/react-query"
import Image from "next/image"
import { useRouter } from "next/router"
import { ChangeEvent, useEffect, useState } from "react"

import { usePostBlog } from "@/src/services/mutate/post/usePostBlog"
import { usePostImage } from "@/src/services/mutate/post/usePostImage"
import { useUpdatePost } from "@/src/services/mutate/post/useUpdatePost"
import { categoryQuery } from "@/src/services/queries/category/categoryQuery"
import { postQuery } from "@/src/services/queries/post/postQuery"
import { useCategorySelector } from "@/src/hooks/useCategorySelector"
import { useInput } from "@/src/hooks/useInput"
import { stringOrFirstString } from "@/src/utils/stringOrFirstString"

import { UploadImageButton } from "@/src/components/icon/UploadImageIcon"
import { AppLayout } from "@/src/components/layout/AppLayout"
import { Container } from "@/src/components/layout/Container"
import { Footer } from "@/src/components/layout/Footer"
import { Header } from "@/src/components/layout/Header"
import { Button } from "@/src/components/shared/Button"
import { DropDown } from "@/src/components/shared/DropDown"
import { Text } from "@/src/components/shared/Text"
import { TextAreaInput } from "@/src/components/shared/TextAreaInput"
import { TextInput } from "@/src/components/shared/TextInput"
import { TagsInput } from "@/src/components/feature/post/TagsInput"

const WritePost = () => {
  const router = useRouter()
  const { postId } = router.query || null
  const [name, onChangeName, setName] = useInput<string>("")
  const [content, onChangeContent, setContent] = useInput<string>("")
  const [tags, setTags] = useState<string[]>([])
  const [image, setImage] = useState<File | null>(null)
  const [preview, setPreview] = useState("")
  const { mutate: postImage, isPending: isPendingPostImage } = usePostImage()
  const { mutate: postBlog, isPending: isPendingPostBlog } = usePostBlog()
  const { mutate: updatePost, isPending: isPendingUpdatePost } = useUpdatePost()
  const { data: categoryList } = useQuery(categoryQuery.parentCategory())
  const { data: subCategories } = useQuery(categoryQuery.subCategory())
  const { data: previousPost } = useQuery(postQuery.postDetail(stringOrFirstString(Number(postId))))

  const {
    selectedCategory,
    selectedSubCategory,
    handleCategoryChange,
    handleSubCategoryChange,
    subCategoryList,
  } = useCategorySelector({ subCategories })

  const handleChangeFile = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setPreview(URL.createObjectURL(file))
      setImage(file)
    }
  }

  const submitPostOrigin = () => {
    if (!image) {
      postBlog({
        name,
        content,
        selectedCategory,
        selectedSubCategory,
        tags,
      })
    }
    postImage(
      { category: selectedCategory.id, image },
      {
        onSuccess: (data) => {
          postBlog({
            name,
            content,
            selectedCategory,
            selectedSubCategory,
            image: data,
            tags,
          })
        },
      },
    )
  }

  const submitPostUpdate = () => {
    if (!image) {
      updatePost({
        id: stringOrFirstString(Number(postId)),
        body: { name, content, selectedCategory, selectedSubCategory, tags },
      })
    }
    postImage(
      { category: selectedCategory.id, image },
      {
        onSuccess: (data) => {
          updatePost({
            id: stringOrFirstString(Number(postId)),
            body: { name, content, selectedCategory, selectedSubCategory, image: data, tags },
          })
        },
      },
    )
  }

  const handleSubmit = () => {
    if (postId) {
      submitPostUpdate()
    } else {
      submitPostOrigin()
    }
  }

  useEffect(() => {
    if (previousPost?.[0].id) {
      const prevPost = previousPost[0]
      if (prevPost.image) {
        setPreview(prevPost.image)
      }
      if (prevPost.tags) {
        setTags(prevPost.tags)
      }
      if (prevPost.sub_category_id) {
        handleSubCategoryChange({ id: prevPost.sub_category_id, name: prevPost.sub_category_name })
      }
      setName(prevPost.name)
      setContent(prevPost.content)
      handleCategoryChange({ id: prevPost.parent_category_id, name: prevPost.parent_category_name })
    }
  }, [previousPost])

  return (
    <AppLayout Header={<Header />} Footer={<Footer />}>
      <Container variant="post">
        <Button
          className="relative flex h-80 w-full flex-col p-2 ring-1 ring-slate-200"
          variant="icon"
        >
          {preview ? (
            <Image src={preview} alt="sdf" fill className="rounded-lg object-cover" />
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
          <Text variant="caption">{preview ? image?.name : "커버 이미지 파일 선택"}</Text>
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
          className="min-h-96"
        />
        <TagsInput tags={tags} setTags={setTags} />
        <DropDown
          itemList={categoryList}
          selectedItem={selectedCategory.name}
          listName="카테고리를 선택하세요."
          onClick={handleCategoryChange}
        />
        {selectedCategory && (
          <DropDown
            itemList={subCategoryList}
            selectedItem={selectedSubCategory.name}
            listName="하위 카테고리를 선택하세요."
            onClick={handleSubCategoryChange}
          />
        )}
        <Button
          isLoading={isPendingPostBlog || isPendingPostImage || isPendingUpdatePost}
          disabled={!name || !content || !selectedCategory.id}
          onClick={handleSubmit}
        >
          데이터보내기
        </Button>
      </Container>
    </AppLayout>
  )
}

export default WritePost
