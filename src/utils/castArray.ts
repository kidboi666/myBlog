// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const castArray = (arr: any, idx = 0) => {
  return Array.isArray(arr) ? arr[idx] : arr
}
