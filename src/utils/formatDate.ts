export const formatDate = (time: string) => {
  const currentTime = Date.now()
  const targetTime = new Date(time).getTime()

  const diffInSeconds = (currentTime - targetTime) / 1000
  const diffInMinutes = diffInSeconds / 60
  const diffInHours = diffInMinutes / 60
  const diffInDays = diffInHours / 24
  const diffInYears = diffInDays / 365

  if (diffInYears >= 1) {
    return `${Math.floor(diffInYears)} 년 전`
  }
  if (diffInDays >= 30) {
    return `${Math.floor(diffInDays / 30)} 달 전`
  }
  if (diffInDays >= 1) {
    return `${Math.floor(diffInDays)} 일 전`
  }
  if (diffInHours >= 1) {
    return `${Math.floor(diffInHours)} 시간 전`
  }
  if (diffInMinutes >= 1) {
    return `${Math.floor(diffInMinutes)} 분 전`
  }

  return `방금 전`
}

export const formatDateToYMD = (date: string | number) => {
  const newDate = new Date(date)
  const year = newDate.getFullYear()
  const month = (newDate.getMonth() + 1).toString().padStart(2, "0")
  const day = newDate.getDate().toString().padStart(2, "0")
  return `${year}.${month}.${day}`
}
