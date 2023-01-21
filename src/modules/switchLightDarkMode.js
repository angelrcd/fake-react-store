export default function setUserTheme(){
  if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.setAttribute('data-theme', 'dark')
  } else {
    document.documentElement.removeAttribute('data-theme')
  }
}

export function setLightTheme() {
  localStorage.theme = 'light'
  setUserTheme()
}

export function setDarkTheme() {
  localStorage.theme = 'dark'
  setUserTheme()
}

export function setOSPreference() {
  localStorage.removeItem('data-theme')
  setUserTheme()
}