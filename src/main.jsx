import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import setUserTheme from './modules/switchLightDarkMode'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {setUserTheme()}
    <App />
  </React.StrictMode>,
)
