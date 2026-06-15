import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './main.css'
import App from './App'
import '@fontsource/inter'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)