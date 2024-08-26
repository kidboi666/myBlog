import { useQuery } from "@tanstack/react-query"
import { meQuery } from "@/src/services/queries/auth/meQuery"
import { Tables } from "@/src/models/supabase"
import { useDeleteComment } from "@/src/services/mutate/comment/useDeleteComment"

import { useModal } from "@/src/store/useModal"
import { CommentQuery } from "@/src/services/queries/comment/commentQuery"
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
  const { mutate: addComment } = useAddComment()
  const { mutate: deleteComment } = useDeleteComment()
  const { data: me } = useQuery(meQuery.getUserInfo())
  const { data } = useQuery(CommentQuery.countForComment(postId))
  console.log(data)

  const submitComment = (content: string, commentId?: number) => {
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
      <CommentInput onComment={submitComment} />
      <Line />
      <div className="flex flex-col gap-8">
        {comments &&
          comments?.map((comment) => (
            <Comment
              key={comment.id}
              postId={postId}
              comment={comment}
              onComment={submitComment}
              onDelete={deleteComment}
              onModal={openModal}
            />
          ))}
      </div>
    </Container>
  )
}
