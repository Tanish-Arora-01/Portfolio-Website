import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import PlasmaBackground from './components/PlasmaBackground.jsx'

// 🔥 render background separately (outside layout tree)
createRoot(document.getElementById('bg-root')).render(
  <PlasmaBackground />
)

// normal app
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)
