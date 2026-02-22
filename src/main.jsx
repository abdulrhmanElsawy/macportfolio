import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

const base = import.meta.env.BASE_URL || '/'
document.documentElement.style.setProperty('--bg-image', `url("${base}images/wallpaper.png")`)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
