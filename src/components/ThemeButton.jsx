import { useState } from "react"
import { setDarkTheme, setLightTheme } from "../modules/switchLightDarkMode"

export default function ThemeButton() {
  const [theme, setTheme] = useState(document.documentElement.getAttribute('data-theme'))

  const switchTheme = () =>{
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme)
    newTheme==='light' ? setLightTheme() : setDarkTheme()
  }

  const getIconSrc =()=>{
    return theme === 'dark' ? '/moon.svg' : '/sun.svg';
  }

  return (
    <>
      <li  onClick={switchTheme} className="btn btn-ghost">
        <button className="w-8 h-8">
          <img src={getIconSrc()} alt="theme icon" />
        </button>
      </li>
    </>
  )
}