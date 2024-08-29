/* eslint-disable @typescript-eslint/no-explicit-any */
export const delay = (func: () => any) => {
  let timer
  if (!timer) {
    timer = setTimeout(() => {
      timer = null
      func()
    }, 100)
  }
}
