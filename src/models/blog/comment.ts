export interface IComment {
  email: string
  nickname: string
  userId: string
  content: string
  postId: number | null
  avatarUrl: string | null
  commentId: number | null
}
