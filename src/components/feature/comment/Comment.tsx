/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image"
import { useState } from "react"
import { useQuery } from "@tanstack/react-query"

import { CommentQuery } from "@/src/services/queries/comment/commentQuery"
import { formatDateToYMD } from "@/src/utils/formatDate"
import { useStatusChange } from "@/src/hooks/useStatusChange"
import { COMMENT_OPTION } from "@/src/constants/options"
import { IOption } from "@/src/models/blog/post"

import { Text } from "../../shared/Text"
import { Title } from "../../shared/Title"
import { Button } from "../../shared/Button"
import { CommentInput } from "./CommentInput"

import { KebabIcon } from "../../icon/KebabIcon"
import { DropDownList } from "../../shared/DropDown/DropDownList"

interface Props {
  postId?: number
  comment: any
  onComment: (arg: any) => void
  onDelete: (arg: any) => void
  onModal: (type: any, data: any) => void
}

export const Comment = ({ postId, comment, onComment, onDelete, onModal }: Props) => {
  const [showCommentInput, setShowCommentInput] = useState(false)
  const [showComment, setShowComment] = useState(false)
  const [targetRef, statusRef, handleStatusChange] = useStatusChange<
    HTMLButtonElement,
    HTMLUListElement
  >()
  const { data: commentsForComment } = useQuery(CommentQuery.commentForComment(comment.id))

  const handleOptionClick = (menu: IOption) => {
    if (menu.name === "삭제하기") {
      onModal("alert", {
        title: "댓글 삭제",
        text: "정말 해당 댓글을 삭제하시겠습니까?",
        yes: "삭제하기",
        no: "취소",
        onClick: () => onDelete({ commentId: comment.id, postId }),
      })
    }
    if (menu.name === "신고하기") {
      // 신고 로직
    }
  }

  return (
    <div className="flex w-full gap-4">
      <div className="relative size-10">
        {comment.avatar_url ? (
          <Image src={comment?.avatar_url} alt="프로필 이미지" fill className="rounded-full" />
        ) : (
          <Button variant="icon" className="p-0">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path
                fillRule="evenodd"
                d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                clipRule="evenodd"
              />
            </svg>
          </Button>
        )}
      </div>
      <div className="flex w-full flex-col items-start gap-4">
        <div className="flex w-full flex-col">
          <div className="flex w-full items-center justify-between gap-2">
            <div>
              <Title variant="sub" className="flex-1 text-base">
                {comment?.nickname}
              </Title>
              <Text variant="caption">{formatDateToYMD(comment?.created_at)}</Text>
            </div>
            <Button ref={targetRef} variant="icon" onClick={handleStatusChange}>
              <KebabIcon size={20} className="rotate-90" />
              <DropDownList
                ref={statusRef}
                itemList={COMMENT_OPTION}
                onClick={handleOptionClick}
                className="right-4 top-12"
              />
            </Button>
          </div>
        </div>
        <Text>{comment?.content}</Text>
        <div className="flex gap-4">
          {commentsForComment?.length !== 0 && (
            <Button
              variant="teritory"
              onClick={() => setShowComment((prev) => !prev)}
              className="text-xs"
            >
              답글보기
            </Button>
          )}
          <Button
            variant="teritory"
            onClick={() => setShowCommentInput((prev) => !prev)}
            className="text-xs"
          >
            답글달기
          </Button>
        </div>
        {showCommentInput && <CommentInput onComment={onComment} commentId={comment.id} />}
        {commentsForComment?.length !== 0 &&
          showComment &&
          commentsForComment?.map((commentForComment) => (
            <Comment
              key={commentForComment.id}
              comment={commentForComment}
              onComment={onComment}
              onDelete={onDelete}
              onModal={onModal}
            />
          ))}
      </div>
    </div>
  )
}
