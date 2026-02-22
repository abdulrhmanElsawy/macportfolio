import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

const base = import.meta.env.BASE_URL || '/'
const wallpaperPath = `${base.replace(/\/?$/, '/')}images/wallpaper.png`
const wallpaperUrl = new URL(wallpaperPath, window.location.href).href
document.documentElement.style.setProperty('--bg-image', `url("${wallpaperUrl}")`)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
