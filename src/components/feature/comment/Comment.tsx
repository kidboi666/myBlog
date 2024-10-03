import { useQuery } from "@tanstack/react-query"
import { FormEvent } from "react"
import { Tables } from "@/src/models/supabase"
import { useModal } from "@/src/store/useModal"

import { useDeleteComment } from "@/src/services/mutate/comment/useDeleteComment"
import { CommentQuery } from "@/src/services/queries/comment/commentQuery"
import { useAddComment } from "@/src/services/mutate/comment/useAddComment"
import { categoryQuery } from "@/src/services/queries/category/categoryQuery"
import { postQuery } from "@/src/services/queries/post/postQuery"
import { Container } from "../../layout/Container"
import { Line } from "../../shared/Line"
import { Title } from "../../shared/Title"
import { CommentItem } from "./CommentItem"
import { CommentInput } from "./CommentInput"

interface Props {
  postId: number
  comments: Tables<"comment">[]
}

export const Comment = ({ postId, comments }: Props) => {
  const { openModal } = useModal()
  const { data: post } = useQuery(postQuery.postDetail(Number(postId)))
  const { data: categoryList } = useQuery(categoryQuery.parentCategory())
  const [postCategory] =
    categoryList?.filter((category) => category.id === Number(post?.parent_category_id)) || []
  const { data: count } = useQuery(CommentQuery.countForComment(postId))
  const {
    mutate: addComment,
    isPending: isPendingAddComment,
    isSuccess: isSuccessAddComment,
  } = useAddComment()
  const { mutate: deleteComment } = useDeleteComment()

  const submitComment = (
    e: FormEvent<HTMLFormElement>,
    content: string,
    nickname: string,
    password: string,
    commentId?: number,
  ) => {
    e.preventDefault()
    addComment({
      postId: commentId ? null : postId,
      nickname,
      password,
      content,
      commentId: commentId ?? null,
    })
  }

  return (
    <Container variant="comment">
      <Title>달린 댓글 {count ?? 0}개</Title>
      <CommentInput
        onComment={submitComment}
        isPending={isPendingAddComment}
        isSuccess={isSuccessAddComment}
      />
      <Line />
      <div className="flex flex-col gap-4">
        {comments &&
          comments?.map((comment) => (
            <CommentItem
              key={comment.id}
              postId={postId}
              comment={comment}
              isPending={isPendingAddComment}
              isSuccess={isSuccessAddComment}
              onComment={submitComment}
              onDelete={deleteComment}
              onModal={openModal}
            />
          ))}
      </div>
    </Container>
  )
}
