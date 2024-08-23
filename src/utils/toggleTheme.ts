export const toggleTheme = () => {
  const htmlEle = document.querySelector("html")
  const isDarkMode = htmlEle?.classList.contains("dark")

  if (localStorage.theme === "dark") {
    document.documentElement.classList.add("dark")
  } else {
    document.documentElement.classList.remove("dark")
  }
}
