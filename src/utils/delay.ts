export const delay = (func: () => any) => {
  let timer
  if (!timer) {
    timer = setTimeout(() => {
      timer = null
      func()
    }, 100)
  }
}
