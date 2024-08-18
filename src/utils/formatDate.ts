export const formatDate = (time: string) => {
  const currentTime = Date.now()
  const targetTime = new Date(time).getTime()

  const diffInSeconds = (currentTime - targetTime) / 1000
  const diffInMinutes = diffInSeconds / 60
  const diffInHours = diffInMinutes / 60
  const diffInDays = diffInHours / 24
  const diffInYears = diffInDays / 365

  if (diffInYears >= 1) {
    return `${Math.floor(diffInYears)} years ago`
  }
  if (diffInDays >= 30) {
    return `${Math.floor(diffInDays / 30)} months ago`
  }
  if (diffInDays >= 1) {
    return `${Math.floor(diffInDays)} days ago`
  }
  if (diffInHours >= 1) {
    return `${Math.floor(diffInHours)} hour${Math.floor(diffInHours) > 1 ? "s" : ""} ago`
  }
  if (diffInMinutes >= 1) {
    return `${Math.floor(diffInMinutes)} minute${Math.floor(diffInMinutes) > 1 ? "s" : ""} ago`
  }

  return `just now`
}

export const formatDateToYMD = (date: string) => {
  const newDate = new Date(date)
  const year = newDate.getFullYear()
  const month = (newDate.getMonth() + 1).toString().padStart(2, "0")
  const day = newDate.getDate().toString().padStart(2, "0")
  return `${year}.${month}.${day}`
}
