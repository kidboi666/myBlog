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
// const currentDateTime = Date.now() / (1000 * 60 * 60 * 24)
// const currentHourTime = Date.now() / (1000 * 60 * 60)
// const currentMinuteTime = Date.now() / (1000 * 60)
// const dateTime = new Date(time).getTime() / (1000 * 60 * 60 * 24)
// const hourTime = new Date(time).getTime() / (1000 * 60 * 60)
// const minuteTime = new Date(time).getTime() / (1000 * 60)
// let diffDate = currentDateTime - dateTime
// let diffTime = currentHourTime - hourTime
// let diffMinute = currentMinuteTime - minuteTime
// console.log(time)
// console.log(diffTime)
// if (diffDate >= 365) {
//   return `${Math.floor(diffDate / 365)} years ago`
// }
// if (diffDate > 31) {
//   return `${Math.floor(diffDate / 30)} months ago`
// }
// if (diffDate >= 1) {
//   return `${Math.floor(diffDate)} days ago`
// }
// if (diffTime < 24) {
//   return `${Math.floor(diffTime <= 1 ? 1 : diffTime)} hour ago`
// }
// if (diffDate > 0) {
//   diffDate = currentMinuteTime - minuteTime
//   return `${Math.floor(diffDate <= 1 ? 1 : diffDate)} minutes ago`
// }
// return `1 minutes ago`
