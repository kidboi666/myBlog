import { Title } from "../../shared/Title"

interface Props {
  comment: {
    id: number
    name: string
  }
}

export const Comment = ({ comment }: Props) => {
  return (
    <>
      {/* <Image /> */}
      <Title>이진욱</Title>
    </>
  )
}
