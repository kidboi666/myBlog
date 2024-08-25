import { Container } from "../../layout/Container"
import { Comment } from "./Comment"
import { CommentInput } from "./CommentInput"

const commentMock = [
  {
    id: 0,
    email: "kidboi666@gmail.com",
    avatar_url: "https://avatars.githubusercontent.com/u/70879978?v=4",
    nickname: "이진욱",
    content: "안녕하세요 내용 좋네요.",
    created_at: Date.now(),
  },
  {
    id: 1,
    email: "mtjkljj@gmail.com",
    avatar_url: "https://avatars.githubusercontent.com/u/70879978?v=4",
    nickname: "상현",
    content: "안녕하세요 ~~~ 내용 좋네요.",
    created_at: Date.now(),
  },
]

export const CommentWrapper = () => {
  return (
    <Container variant="comment">
      <CommentInput />
      {commentMock?.map((comment) => <Comment key={comment.id} comment={comment} />)}
    </Container>
  )
}
