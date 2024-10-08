import { ChangeEvent, Dispatch, SetStateAction, useCallback, useState } from "react"

type TChangeEvent = ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>

type ReturnType<T> = [T, (e: TChangeEvent) => void, Dispatch<SetStateAction<T>>]

/**
 *
 * @param {string} initialValue 인풋의 초기값 (문자열이면 ''을 넣어줘도 무방)
 * @return {string} value - 인풋의 value
 * @return {function} handler - 인풋의 onChange에 걸면 되는 함수
 * @return {function} initValue - 인풋을 초기화 해주는 함수
 * @description
 * input값을 상태에 전달해주는 기능입니다.
 * 매번 input의 target.value를 state에 넘기는 함수를 작성하지 않고 해당 훅을 불러와 onChange에 handler를 걸어주시면 됩니다.
 */
export const useInput = <T extends string | number | Record<string, string | number>>(
  initialValue: T,
): ReturnType<T> => {
  const [value, setValue] = useState<T>(initialValue)

  const handler = useCallback((e: TChangeEvent) => {
    setValue(e.target.value as T)
  }, [])

  return [value, handler, setValue]
}
