import { useQuery } from "@tanstack/react-query"
import dynamic from "next/dynamic"
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

import { Container } from "@/src/components/layout/Container"
import { Button } from "@/src/components/shared/Button"
import { DropDown } from "@/src/components/shared/DropDown"
import { TextAreaInput } from "@/src/components/shared/TextAreaInput"
import { TextInput } from "@/src/components/shared/TextInput"
import { TagsInput } from "@/src/components/feature/post/TagsInput"
import { Line } from "@/src/components/shared/Line"
import { Back } from "@/src/components/shared/Back"
import { FileInput } from "@/src/components/feature/write/FileInput"
import { Text } from "@/src/components/shared/Text"

const Markdown = dynamic(() => import("@/src/components/shared/Markdown/Markdown"), { ssr: false })

const WritePost = () => {
  const router = useRouter()
  const { postId } = router.query || null
  const [name, onChangeName, setName] = useInput<string>("")
  const [content, onChangeContent, setContent] = useInput<string>("")
  const [tags, setTags] = useState<string[]>([])
  const [image, setImage] = useState<File | null>(null)
  const [preview, setPreview] = useState("")

  const {
    mutate: postImage,
    isPending: isPendingPostImage,
    isSuccess: isSuccessPostImage,
  } = usePostImage()
  const {
    mutate: postBlog,
    isPending: isPendingPostBlog,
    isSuccess: isSuccessPostBlog,
  } = usePostBlog()
  const {
    mutate: updatePost,
    isPending: isPendingUpdatePost,
    isSuccess: isSuccessUpdatePost,
  } = useUpdatePost()
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
        body: {
          name,
          content,
          selectedCategory,
          selectedSubCategory,
          tags,
          image: preview || null,
        },
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
    if (previousPost?.[0]?.id) {
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
    <Container variant="write" className="flex-col">
      <div className="flex w-full gap-4 overflow-y-auto">
        <div className="flex size-full flex-1 flex-col gap-2 p-1">
          <div className="flex h-20 gap-4">
            <Back className="h-full" />
            <FileInput
              preview={preview}
              setPreview={setPreview}
              image={image}
              onChangeFile={handleChangeFile}
              className="h-20 flex-1"
            />
          </div>
          <TextInput
            placeholder="제목을 입력하세요."
            name="name"
            variant="primary"
            value={name}
            onChange={onChangeName}
            className="text-5xl font-semibold"
          />
          <Line />
          <TextAreaInput
            placeholder="내용을 입력하세요."
            name="content"
            variant="primary"
            value={content}
            onChange={onChangeContent}
            className="h-screen overflow-y-auto"
          />

          <div className="flex w-full flex-col gap-2">
            <TagsInput tags={tags} setTags={setTags} />
            <DropDown
              itemList={categoryList}
              selectedItem={selectedCategory.name}
              listName="카테고리를 선택하세요."
              onClick={handleCategoryChange}
              innerClassName="bottom-[calc(100%--4px)] right-8 w-[calc(100%-64px)]"
            />
            {selectedCategory && (
              <DropDown
                itemList={subCategoryList}
                selectedItem={selectedSubCategory.name}
                listName="하위 카테고리를 선택하세요."
                onClick={handleSubCategoryChange}
                innerClassName="bottom-[calc(100%--4px)] ring-1 right-8 w-[calc(100%-64px)]"
              />
            )}
            <Button
              isLoading={isPendingPostBlog || isPendingPostImage || isPendingUpdatePost}
              disabled={
                !name ||
                !content ||
                !selectedCategory.id ||
                isSuccessPostImage ||
                isSuccessPostBlog ||
                isSuccessUpdatePost
              }
              onClick={handleSubmit}
            >
              포스팅하기
            </Button>
          </div>
        </div>
        <div className="hidden w-full overflow-y-auto md:flex md:flex-1 md:flex-col md:gap-2">
          <TextInput
            placeholder="제목을 입력하세요."
            name="name"
            variant="primary"
            value={name}
            readOnly
            onChange={onChangeName}
            className="text-5xl font-semibold"
          />
          <Line />
          <Text>
            <Markdown text={content} />
          </Text>
        </div>
      </div>
    </Container>
  )
}

export default WritePost
