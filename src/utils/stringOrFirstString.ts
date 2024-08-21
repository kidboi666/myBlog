// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const stringOrFirstString = (arr: any, idx = 0) => {
  return Array.isArray(arr) ? arr[idx] : arr
}
