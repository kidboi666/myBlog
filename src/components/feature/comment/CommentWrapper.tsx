import { useQuery } from "@tanstack/react-query"
import { FormEvent } from "react"
import { Tables } from "@/src/models/supabase"
import { useModal } from "@/src/store/useModal"

import { useDeleteComment } from "@/src/services/mutate/comment/useDeleteComment"
import { meQuery } from "@/src/services/queries/auth/meQuery"
// import { CommentQuery } from "@/src/services/queries/comment/commentQuery"
import { useAddComment } from "@/src/services/mutate/comment/useAddComment"
import { Container } from "../../layout/Container"
import { Line } from "../../shared/Line"
import { Title } from "../../shared/Title"
import { Comment } from "./Comment"
import { CommentInput } from "./CommentInput"

interface Props {
  postId: number
  comments: Tables<"comment">[]
}

export const CommentWrapper = ({ postId, comments }: Props) => {
  const { openModal } = useModal()
  const {
    mutate: addComment,
    isPending: isPendingAddComment,
    isSuccess: isSuccessAddComment,
  } = useAddComment()
  const { mutate: deleteComment } = useDeleteComment()
  const { data: me } = useQuery(meQuery.getUserInfo())
  // 코멘트 갯수 쿼리인데 아직 미구현 (학습 필요)
  // const { data } = useQuery(CommentQuery.countForComment(postId))
  // console.log(data)

  const submitComment = (e: FormEvent<HTMLFormElement>, content: string, commentId?: number) => {
    e.preventDefault()
    addComment({
      postId: commentId ? null : postId,
      email: me?.userInfo?.email,
      nickname: me?.userInfo?.user_name || me?.userInfo?.nickname,
      userId: me?.id || "",
      content,
      avatarUrl: me?.userInfo?.avatar_url ?? null,
      commentId: commentId ?? null,
    })
  }

  return (
    <Container variant="comment">
      <Title>달린 댓글 {comments.length ?? 0}개</Title>
      <CommentInput
        onComment={submitComment}
        isPending={isPendingAddComment}
        isSuccess={isSuccessAddComment}
      />
      <Line />
      <div className="flex flex-col gap-4">
        {comments &&
          comments?.map((comment) => (
            <Comment
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
