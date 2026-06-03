import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

const root = createRoot(document.getElementById('root'))

root.render(
  <StrictMode>
    <App />
  </StrictMode>,
)

// Hilangkan loading screen dengan fade-out halus saat React selesai mount
// requestAnimationFrame memastikan DOM sudah ter-render sebelum kita fade-out
requestAnimationFrame(() => {
  const shell = document.getElementById('app-shell')
  if (shell) {
    shell.classList.add('fade-out')
    shell.addEventListener('animationend', () => shell.remove(), { once: true })
  }
})

